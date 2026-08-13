import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = process.env.LOCO_CANONICAL_SOURCE || path.resolve(here, '../data/business.json');
const read = () => JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
const current = () => read().events.find((event) => event.discovery_enabled && event.status === 'upcoming');
export function get_upcoming_event() { const event = current(); return event ? summary(event) : null; }
export function get_event_details({ event_id } = {}) { const event = read().events.find((item) => item.id === event_id) || current(); return event ? summary(event) : null; }
export function get_ticket_options() { return { status: 'unknown', reason: 'authoritative lookup required', source: 'external_ticketing_system' }; }
export function get_purchase_link() { return { url: current()?.ticketing.purchase_url ?? null, handoff: true, source: 'canonical_source' }; }
function summary(event) { return { id: event.id, name: event.name, date: event.date, venue: event.venue, doors: event.doors, bell: event.bell, provenance: { event: read().provenance.event_identity, venue: read().provenance.venue, doors: read().provenance.doors_time, bell: read().provenance.bell_time } }; }
