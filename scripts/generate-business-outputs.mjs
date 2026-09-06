#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = process.env.LOCO_CANONICAL_SOURCE || path.join(root, 'data/business.json');
const outputDir = process.env.LOCO_OUTPUT_DIR || path.join(root, 'generated');
const htmlPath = process.env.LOCO_HTML_PATH || path.join(root, 'index.html');
const source = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
// Prefer the soonest upcoming event. When none is scheduled, publish the most
// recently completed event as `last_event` so the machine-readable outputs
// stop advertising a past show as upcoming.
const discoverable = source.events.filter((item) => item.discovery_enabled);
const upcoming = discoverable.filter((item) => item.status === 'upcoming')
  .sort((a, b) => a.date.localeCompare(b.date))[0];
const completed = discoverable.filter((item) => item.status === 'completed')
  .sort((a, b) => b.date.localeCompare(a.date))[0];
const event = upcoming || completed;
if (!event) throw new Error('No discoverable event in canonical source');
const isUpcoming = Boolean(upcoming);

const pad = (value) => String(value).padStart(2, '0');
const time24 = (value) => {
  const match = value.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
  if (!match) throw new Error(`Invalid time: ${value}`);
  let hour = Number(match[1]) % 12;
  if (match[3].toUpperCase() === 'PM') hour += 12;
  return `${pad(hour)}:${match[2]}:00-06:00`;
};
const startDate = `${event.date}T${time24(event.bell)}`;
const doorDate = `${event.date}T${time24(event.doors)}`;
const generatedWarning = 'GENERATED FILE — DO NOT EDIT DIRECTLY';
const provenance = {
  event: source.provenance.event_identity,
  venue: source.provenance.venue,
  doors: source.provenance.doors_time,
  bell: source.provenance.bell_time,
  ticketing: {
    prices: source.provenance.ticket_prices,
    inventory: source.provenance.ticket_inventory,
    purchase_url: { source: 'canonical_source', status: 'handoff_only' }
  }
};
const eventRecord = {
  id: event.id, name: event.name, date: event.date, doors: event.doors, bell: event.bell,
  timezone: event.timezone, venue: event.venue, status: event.status, provenance,
  ...(event.results ? { results: event.results } : {})
};
const ticketing = isUpcoming
  ? {
    purchase_url: event.ticketing.purchase_url,
    authority: event.ticketing.capability_url,
    disclosure: 'authoritative ticket capability is delegated to the ticketing system; this endpoint does not duplicate prices or availability',
    prices: 'unknown — authoritative lookup required',
    inventory: 'unknown — authoritative lookup required',
    authoritative_source: event.ticketing.authoritative_source
  }
  : {
    status: 'closed',
    reason: 'the most recent event has concluded; no tickets are on sale for it',
    purchase_url: null,
    authority: event.ticketing.capability_url,
    disclosure: 'authoritative ticket capability is delegated to the ticketing system; this endpoint does not duplicate prices or availability',
    prices: 'unknown — authoritative lookup required',
    inventory: 'unknown — authoritative lookup required',
    authoritative_source: event.ticketing.authoritative_source
  };
const agent = {
  _generated: generatedWarning,
  schema_version: source.schema_version,
  generated_at: new Date().toISOString(),
  freshness: { status: 'current', source: 'canonical_business_record', checked_at: new Date().toISOString() },
  business: source.business,
  next_event: isUpcoming ? eventRecord : null,
  last_event: isUpcoming ? null : eventRecord,
  ticketing
};
const longDate = new Date(`${event.date}T12:00:00-06:00`).toLocaleDateString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/Denver'
});
const description = isUpcoming
  ? `${source.business.name} presents ${event.name}, a live professional wrestling event.`
  : `${source.business.name} presented ${event.name}, a live professional wrestling event held ${longDate} in ${event.venue.city}, ${event.venue.state}. Results are published on this page.`;
const jsonld = {
  '@context': 'https://schema.org', '@type': 'Event', '@id': 'https://laststand.locopro.pw/#event',
  name: event.name, description,
  url: 'https://laststand.locopro.pw/', mainEntityOfPage: 'https://laststand.locopro.pw/', startDate,
  doorTime: doorDate, eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: { '@type': 'Place', name: event.venue.name, address: {
    '@type': 'PostalAddress', streetAddress: event.venue.street_address, addressLocality: event.venue.city,
    addressRegion: event.venue.state, postalCode: event.venue.postal_code, addressCountry: event.venue.country
  }}, organizer: { '@type': 'Organization', name: source.business.name, url: 'https://mainpage.locopro.pw/' }
};
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'agent-capabilities.json'), `${JSON.stringify(agent, null, 2)}\n`);
fs.writeFileSync(path.join(outputDir, 'event.jsonld'), `${JSON.stringify(jsonld, null, 2)}\n`);
// Publish stable root-level URLs while retaining the generated directory as the build artifact source.
fs.writeFileSync(path.join(root, 'agent-capabilities.json'), `${JSON.stringify(agent, null, 2)}\n`);
fs.writeFileSync(path.join(root, 'event.jsonld'), `${JSON.stringify(jsonld, null, 2)}\n`);
const marker = /<!-- GENERATED:EVENT-JSONLD:START -->[\s\S]*?<!-- GENERATED:EVENT-JSONLD:END -->/;
const html = fs.readFileSync(htmlPath, 'utf8');
const replacement = `<!-- GENERATED:EVENT-JSONLD:START -->\n  <script type="application/ld+json">\n${JSON.stringify(jsonld, null, 2).split('\n').map((line) => `    ${line}`).join('\n')}\n  </script>\n  <!-- ${generatedWarning} -->\n  <!-- GENERATED:EVENT-JSONLD:END -->`;
if (!marker.test(html)) throw new Error('Missing JSON-LD generation markers in index.html');
fs.writeFileSync(htmlPath, html.replace(marker, replacement));
console.log(`Generated ${event.bell} from ${sourcePath}`);
