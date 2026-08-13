import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const generator = path.join(root, 'scripts/generate-business-outputs.mjs');
const source = JSON.parse(fs.readFileSync(path.join(root, 'data/business.json'), 'utf8'));
function stage(bell) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'loco-gateway-'));
  const data = structuredClone(source); data.events[0].bell = bell;
  const sourcePath = path.join(dir, 'business.json'); const htmlPath = path.join(dir, 'index.html');
  fs.writeFileSync(sourcePath, JSON.stringify(data)); fs.writeFileSync(htmlPath, '<!-- GENERATED:EVENT-JSONLD:START -->old<!-- GENERATED:EVENT-JSONLD:END -->');
  execFileSync(process.execPath, [generator], { env: { ...process.env, LOCO_CANONICAL_SOURCE: sourcePath, LOCO_OUTPUT_DIR: path.join(dir, 'generated'), LOCO_HTML_PATH: htmlPath } });
  return { dir, agent: JSON.parse(fs.readFileSync(path.join(dir, 'generated/agent-capabilities.json'))), jsonld: JSON.parse(fs.readFileSync(path.join(dir, 'generated/event.jsonld'))), html: fs.readFileSync(htmlPath, 'utf8') };
}
test('canonical source and required provenance are valid', () => { assert.equal(source.events[0].bell, '6:00 PM'); assert.ok(source.provenance.bell_time); assert.ok(source.events[0].venue); });
test('A, B, C propagation replaces superseded current values', () => {
  const a = stage('6:15 PM'); assert.equal(a.agent.next_event.bell, '6:15 PM'); assert.match(a.html, /18:15:00/);
  const b = stage('6:05 PM'); assert.equal(b.agent.next_event.bell, '6:05 PM'); assert.doesNotMatch(b.html, /18:15:00/);
  const c = stage('6:00 PM'); assert.equal(c.agent.next_event.bell, '6:00 PM'); assert.doesNotMatch(c.html, /18:15:00|18:05:00/);
});
test('generated outputs contain no fabricated ticket state', async () => { const { get_ticket_options } = await import('../mcp/business-gateway.mjs'); assert.equal(get_ticket_options().status, 'unknown'); });
