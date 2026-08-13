# Agent-Ready Business Gateway engineering test

Status: deployed and externally verified 2026-08-13.

## Before

The site had inline JSON-LD and human-facing event copy, but no canonical business record, generic agent endpoint, MCP-oriented adapter, or propagation test. The prior JSON-LD also contained ticket price and availability claims that are not authoritative for this test.

## Canonical source and outputs

- Source: `data/business.json` (the only manually maintained bell value).
- Generated outputs: root-level `agent-capabilities.json`, root-level `event.jsonld`, the build copies under `generated/`, and the marked JSON-LD block in `index.html`.
- MCP adapter: `mcp/business-gateway.mjs`.
- Test: `tests/business-gateway.test.mjs`.

Schema.org uses `startDate` for bell and `doorTime` for doors. Ticket options intentionally return `unknown — authoritative lookup required`; no Offer is generated.

## Propagation results

| Stage | Canonical | Schema.org | Agent JSON | MCP | Stale current value |
|---|---|---|---|---|---|
| A | 6:15 PM | passed | passed | same source | none in generated stage |
| B | 6:05 PM | passed | passed | same source | 6:15 PM absent |
| C | 6:00 PM | passed | passed | same source | 6:05 PM and 6:15 PM absent |

The stage harness uses temporary source/output directories so the repository ends in the authoritative final state. No generated destination was manually edited during the sequence.

## Production deployment and external verification

- Release commit: `ac9f962766e84d8e5420e5e295f0b4b2975f4284`
- GitHub Actions run: `31717386022` — succeeded
- Public base: `https://laststand.locopro.pw/`
- Retrieval timestamp: `2026-08-13T15:48Z`
- `/agent-capabilities.json`: HTTP 200; bell `6:00 PM`; date `2026-08-30`; venue `Longmont Elks Lodge #1055`.
- `/event.jsonld`: HTTP 200; `startDate` `2026-08-30T18:00:00-06:00`.
- `/` HTML: JSON-LD parsed successfully and reported the same start date; no `6:15 PM`, `6:05 PM`, `18:15:00`, or `18:05:00` value was present.
- Public endpoint correctly reports ticket prices and inventory as `unknown — authoritative lookup required`.

GitHub Actions emitted non-blocking workflow annotations for deprecated Node 20 action targets and an ignored `include-hidden-files` input. The deployment itself and public business-state readbacks succeeded.

## Final state

**AUTHORITATIVE FINAL BELL TIME: 6:00 PM**

Ticket inventory, prices, and transaction outcomes remain external-authority-only. Historical test values may appear only in this engineering evidence, never in current generated output.
