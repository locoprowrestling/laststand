# Agent-Ready Business Gateway engineering test

Status: implemented locally; production deployment remains a separate authorized release action.

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

The stage harness uses temporary source/output directories so the repository ends in the authoritative final state. No generated destination was manually edited during the sequence. Production deployment and public retrieval were not performed in this local implementation turn; therefore external verification is pending and must not be inferred from local tests.

## Final state

**AUTHORITATIVE FINAL BELL TIME: 6:00 PM**

Ticket inventory, prices, and transaction outcomes remain external-authority-only. Historical test values may appear only in this engineering evidence, never in current generated output.
