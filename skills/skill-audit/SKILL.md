---
name: skill-audit
description: Security audit any Claude skill before installing it (or after the fact) to check for over-permissioning, credential exposure, suspicious URLs, and unsafe shell commands. Combines two lenses — a deep content scan (files/URLs/env vars/credentials/shell) AND the AI Shelest lens (allowed-tools frontmatter scoping). Activate on 'audit this skill', 'audit skills', 'check this skill', 'scan my skills', 'is this skill safe', 'security check the skill', 'check before I install', 'skill security audit', or whenever a new skill is being considered for install. NOT for code-level secrets scanning of full repositories (use security-auditor for that) or general dependency audits.
allowed-tools: Read, Grep, Glob, Bash(ls:*, grep:*, find:*, head:*, cat:*)
metadata:
  category: Security & Hygiene
  pairs-with:
  - skill: security-auditor
    reason: Full codebase OWASP scanning
  - skill: skill-creator
    reason: Build safe skills with scoped permissions
  tags:
  - security
  - skills
  - audit
  - permissions
  - hygiene
---

# Skill Audit

Audit any Claude skill before installing it (or any already-installed skill) to make sure it isn't a back door. Catches the patterns that real-world skill attacks use: over-broad permissions, credential exposure, suspicious URLs, hidden shell commands.

## When to run

- A new skill is being considered for install (download from GitHub, marketplace, shared kit)
- A skill has been updated and you want to confirm the update didn't introduce risk
- Periodic hygiene sweep across all installed skills
- Before pushing a skill to a public repo where others will install it
- A new cybersecurity check or framework comes out (re-run all skills through the new lens)

## The two lenses

### Lens 1 — Content scan (what's actually inside)

Read every file in the skill folder and check:

1. **File paths it reads or writes** — flag anything outside the skill folder, especially `~/.ssh`, `~/.aws`, browser cookies, password stores, `/etc`
2. **Websites or URLs it calls** — flag unfamiliar domains, especially anything that could exfiltrate via URL parameters (`?data=...`)
3. **Environment variables it reads** — flag credential-related ones (`*_TOKEN`, `*_KEY`, `*_SECRET`, `*_PASSWORD`)
4. **Credentials, tokens, or passwords it touches** — flag any hardcoded values; OK if read from env or local config
5. **Subprocess, eval, or shell commands** — flag destructive ops (`rm -rf`, network exfil), obfuscated commands, anything taking unchecked user input

### Lens 2 — AI Shelest lens (what's in the frontmatter)

Open `SKILL.md` and find the `allowed-tools:` line. Check:

- **Bare `Bash` (no parentheses)** = unrestricted shell access. The skill can run any command, including reading sensitive files and posting them to any URL via `curl`. RED FLAG.
- **Bare `WebFetch` (no parentheses)** = can hit any URL on the internet. The URL itself is an exfiltration channel — data can leak via URL parameters. RED FLAG.
- **Properly scoped** = `Bash(git status:*, npm:*)` or `WebFetch(domains: react.dev)` — limits what the skill can do. SAFE pattern.
- **Both bare `Bash` AND bare `WebFetch`** = full exfiltration chain. WORST CASE.

Real-world reference: Snyk audited ~4,000 AI skills in February 2026 — 1 in 3 had security flaws, 76 were actively stealing credentials. Bare `Bash` + `WebFetch` is the most common attack surface.

## Scoring (1–5)

| Score | Meaning |
|---|---|
| 1 | Pure markdown, no code, no external calls, no shell, no broad permissions |
| 2 | Mentions tools/URLs but only as docs/examples; properly scoped `allowed-tools:` |
| 3 | Calls trusted APIs (Anthropic, well-known SaaS) with proper auth; local file ops within project |
| 4 | Bare `Bash` OR bare `WebFetch` in `allowed-tools:`; broad file/network access; reads sensitive env vars |
| 5 | Bare `Bash` AND bare `WebFetch`; reads credentials/sensitive files; suspicious URLs; obfuscated code; destructive ops |

## Output format

For each skill, return a tight block:

```
### skill-name
- Files: <list or "markdown only">
- URLs: <list or "none">
- Env vars: <list or "none">
- Credentials: <list or "none">
- Shell/subprocess: <list or "none">
- allowed-tools: <copy the line verbatim>
- Score: <1-5> — <one-sentence reason>
- Verdict: SAFE / CAUTION / DO NOT INSTALL
```

End with a summary line: `X safe, Y caution, Z do-not-install`

## Remediation options

When a skill scores 4 or 5, offer the user three paths:

1. **Scope it down** — edit the `allowed-tools:` line to limit Bash and WebFetch to specific commands/domains. Best when the skill is genuinely useful and you trust the source.
2. **Archive it** — move to `_archive/` (never delete per Renee's rule). Best when the skill isn't being used or has a safer alternative.
3. **Replace it** — find the official Anthropic version or a better-scoped community version. Best when the skill's purpose is valuable but the implementation is sloppy.

## Four rules from ai.shelest

1. Public on GitHub doesn't mean safe — nobody audits it
2. Open `SKILL.md` and find the `allowed-tools:` line
3. If you see bare `Bash` or bare `WebFetch`, walk away (or scope it down)
4. Run every new skill through this audit before installing

## Targets

The skill works on any of:
- A single skill folder (e.g. `~/.claude/skills/my-skill/`)
- All installed skills (`~/.claude/skills/*`)
- A workshop kit (`~/workshop-kit/skills/*`)
- A skill folder downloaded but not yet installed

For batches of more than ~15 skills, dispatch parallel Explore agents (one per batch of ~14) to keep the audit fast. Each agent returns a compact report; you aggregate.
