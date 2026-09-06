import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const generator = path.join(root, 'scripts/generate-business-outputs.mjs');
const source = JSON.parse(fs.readFileSync(path.join(root, 'data/business.json'), 'utf8'));
function stage(bell, status) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'loco-gateway-'));
  const data = structuredClone(source); data.events[0].bell = bell;
  if (status) data.events[0].status = status;
  const sourcePath = path.join(dir, 'business.json'); const htmlPath = path.join(dir, 'index.html');
  fs.writeFileSync(sourcePath, JSON.stringify(data)); fs.writeFileSync(htmlPath, '<!-- GENERATED:EVENT-JSONLD:START -->old<!-- GENERATED:EVENT-JSONLD:END -->');
  execFileSync(process.execPath, [generator], { env: { ...process.env, LOCO_CANONICAL_SOURCE: sourcePath, LOCO_OUTPUT_DIR: path.join(dir, 'generated'), LOCO_HTML_PATH: htmlPath } });
  return { dir, agent: JSON.parse(fs.readFileSync(path.join(dir, 'generated/agent-capabilities.json'))), jsonld: JSON.parse(fs.readFileSync(path.join(dir, 'generated/event.jsonld'))), html: fs.readFileSync(htmlPath, 'utf8') };
}
test('canonical source and required provenance are valid', () => { assert.equal(source.events[0].bell, '6:00 PM'); assert.ok(source.provenance.bell_time); assert.ok(source.events[0].venue); });
const record = (agent) => agent.next_event || agent.last_event;
test('A, B, C propagation replaces superseded current values', () => {
  const a = stage('6:15 PM'); assert.equal(record(a.agent).bell, '6:15 PM'); assert.match(a.html, /18:15:00/);
  const b = stage('6:05 PM'); assert.equal(record(b.agent).bell, '6:05 PM'); assert.doesNotMatch(b.html, /18:15:00/);
  const c = stage('6:00 PM'); assert.equal(record(c.agent).bell, '6:00 PM'); assert.doesNotMatch(c.html, /18:15:00|18:05:00/);
});
test('an upcoming event publishes next_event with a purchase handoff', () => {
  const u = stage('6:00 PM', 'upcoming');
  assert.equal(u.agent.next_event.status, 'upcoming'); assert.equal(u.agent.last_event, null);
  assert.equal(u.agent.ticketing.purchase_url, 'https://tickets.locopro.pw/');
  assert.match(u.jsonld.description, /presents/);
});
test('a completed event publishes last_event and closes ticketing', () => {
  const c = stage('6:00 PM', 'completed');
  assert.equal(c.agent.next_event, null); assert.equal(c.agent.last_event.status, 'completed');
  assert.equal(c.agent.last_event.date, source.events[0].date);
  assert.equal(c.agent.ticketing.status, 'closed'); assert.equal(c.agent.ticketing.purchase_url, null);
  assert.equal(c.agent.ticketing.prices, 'unknown — authoritative lookup required');
  assert.match(c.jsonld.description, /presented .* held August 30, 2026/); assert.equal(c.jsonld.startDate, '2026-08-30T18:00:00-06:00');
});
test('generated outputs contain no fabricated ticket state', async () => { const { get_ticket_options } = await import('../mcp/business-gateway.mjs'); assert.equal(get_ticket_options().status, 'unknown'); });
test('Last Stand delegates ticket authority without duplicating ticket facts', () => { const output = JSON.parse(fs.readFileSync(path.join(root, 'agent-capabilities.json'))); assert.equal(output.ticketing.authority, 'https://tickets.locopro.pw/agent-capabilities.json'); assert.equal(output.ticketing.prices, 'unknown — authoritative lookup required'); });
