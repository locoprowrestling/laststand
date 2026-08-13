# Last Stand deployment backup and rollback plan

Prepared 2026-08-13 before production deployment of the Agent-Ready Business Gateway.

## Protected baseline

- Repository: `https://github.com/locoprowrestling/laststand.git`
- Deployment branch: `main`
- Current known-good baseline: commit `05e05e7` (`Add GitHub Actions Pages deploy workflow`)
- Production domain: `https://laststand.locopro.pw/`
- Deployment mechanism: GitHub Actions workflow `.github/workflows/deploy-pages.yml` using GitHub Pages.

Do not overwrite or rewrite the baseline. The implementation should be introduced as a new commit on `main`, with the baseline commit retained in Git history.

## Backup layers

1. **Git rollback anchor:** record `git rev-parse origin/main` immediately before release. It should remain `05e05e7` unless another approved change lands first.
2. **Release commit:** commit the implementation as one focused change. Record its full SHA after commit.
3. **Local release artifact:** run `scripts/build-pages.sh . <temporary-output>` and retain the artifact manifest plus SHA-256 hashes before pushing.
4. **External production readback:** after deployment, retrieve `/`, `/agent-capabilities.json`, and any other public generated resource. Save the response bodies and headers outside the repository as deployment evidence; these are observations, not a replacement for the Git backup.

## Pre-deploy gate

From `/Volumes/LaCie 2TB/locoprowrestling/LoCoProWebsites/laststand`:

```sh
git status --short --branch
git rev-parse origin/main
node scripts/generate-business-outputs.mjs
node --test tests/business-gateway.test.mjs
rm -rf /tmp/laststand-pages-predeploy
./scripts/build-pages.sh . /tmp/laststand-pages-predeploy
test -f /tmp/laststand-pages-predeploy/agent-capabilities.json
node --input-type=module -e "const fs=require('fs'); const x=JSON.parse(fs.readFileSync('/tmp/laststand-pages-predeploy/agent-capabilities.json')); if(x.next_event.bell!=='6:00 PM') process.exit(1)"
git diff --check
```

Before pushing, inspect the artifact for generated files, confirm no `6:15 PM` or `6:05 PM` appears in current published files, and confirm no ticket inventory or price is asserted by the generated machine-facing outputs.

## Deployment and verification

Push only the reviewed release commit to `main`. Wait for the Pages workflow to finish successfully, then retrieve the deployed resources from `https://laststand.locopro.pw/` rather than treating the workflow status as business-state verification.

Verify externally:

- JSON-LD `startDate` is `2026-08-30T18:00:00-06:00`.
- `/agent-capabilities.json` reports `next_event.bell` as `6:00 PM`.
- The MCP adapter in the release source reports `6:00 PM`.
- Current public resources contain neither superseded test value.
- Ticket inventory and pricing remain authoritative-lookup-required.

Record the workflow URL, release SHA, retrieval timestamp, HTTP status, and extracted business values in the engineering report. Search-engine caches are a separate, non-blocking observation.

## Rollback triggers

Rollback if any public current representation has the wrong bell time, stale 6:15/6:05 values, malformed JSON, an absent endpoint, a broken page, or an unintended commercial claim. Do not roll back solely because a third-party search index is stale.

## Rollback procedure

Preferred rollback is a new forward commit that restores the prior content; preserve the bad release for diagnosis. If the release is the immediately preceding commit:

```sh
git revert <release-commit-sha>
git push origin main
```

If the release contains multiple approved commits, restore the known-good tree into a new branch or worktree, review it, then push a new revert/fix commit. Never use `git reset --hard` on the shared checkout or force-push `main` for this recovery.

After rollback, repeat the external readback against the public domain and confirm the page and machine-readable outputs match the restored commit. Keep the failed deployment evidence and update `ENGINEERING-REPORT.md` with the failure and recovery.

## Current readiness decision

Backup/rollback readiness is **prepared but not executed**: no commit, tag, push, Pages deployment, or live endpoint retrieval has been performed in this preparation step.
