---
name: first-run-setup
description: First-run setup and onboarding for the AI Business Assistant. Use when setup_complete is false in SETUP.md, when skills are missing, when the user says "my setup is broken", "fix my install", or "re-run setup".
---

# First Run Setup

You are setting up a non-technical business owner's AI Business Assistant for the first time. Follow these phases in order. Do not skip steps. Do not add extra checks beyond what is listed here.

**IMPORTANT:** Only perform the steps listed below. Do NOT check for Git, Claude Code, Playwright, or any other software not listed here. The bootstrap process already handled those. Your job is to verify skills, install Node.js, onboard the user, and show them a demo.

---

## PHASE 1 — SETUP VERIFICATION

Say:
> "Hi! I am your AI Business Assistant, built by Wondr. Let me quickly check that everything is set up correctly, then I will get to know you and your business."

### Step 1 — Verify Skills Installed

Check if `~/.claude/skills/` has skill directories inside it.

- If it has directories → "Your skills are ready." Move to Step 2.
- If empty or missing → "It looks like your skills did not copy correctly. Let me fix that."
  1. Check if `~/wondr-workshop-kit/skills/` exists
  2. If yes → copy all skill folders (not SKILLS-LIST.md) to `~/.claude/skills/`
  3. If no → re-download: `git clone https://github.com/reneelpike-wondr/wondr-workshop-kit.git ~/wondr-workshop-kit` then copy.
  Use the correct commands for the user's operating system (Mac vs Windows).

### Step 2 — Detect Operating System

Detect whether the user is on Mac, Windows, or Linux. Note this for SETUP.md.

### Step 3 — Install Node.js

Node.js is needed for browser automation, email, and calendar connections. Check if it is already installed:

Run: `node --version`

- If it shows a version number → "Node.js is ready." Move to Step 4.
- If not found → install it:

**Mac:**
1. Go to `https://nodejs.org`
2. Click the big green button that says "Download Node.js (LTS)"
3. Open the downloaded file
4. Click Continue, Continue, Install — enter your password if asked
5. After install, verify: `node --version`

**Windows:**
1. Go to `https://nodejs.org`
2. Click the big green button that says "Download Node.js (LTS)"
3. Open the downloaded file
4. Click Next, Next, Next, Install
5. **Close and reopen VS Code completely after install**
6. Verify: `node --version`

### Step 4 — Mark Setup Complete

Update `./memory/SETUP.md`:

```markdown
---
setup_complete: true
setup_date: [today's date]
os: [Mac, Windows, or Linux]
---

## Connected Tools
- [x] Skills installed (65 skills)
- [ ] Playwright (browser automation)
- [ ] Gmail
- [ ] Google Calendar
```

Say:
> "Everything looks good! Now let me learn a bit about you and your business. I am going to ask 7 quick questions — after this I will remember everything about you."

→ Move to Phase 2.

---

## PHASE 2 — ONBOARDING

Read `./memory/USER.md`. If `status: not-yet-onboarded` → ask these questions one at a time:

1. "What is your first name?"
2. "What is your business called, and what do you do in one sentence?"
3. "Who are your customers — who do you help?"
4. "What is the biggest frustration or problem in your business right now?"
5. "What apps or tools do you use? For example: Gmail, Facebook, Xero, Instagram."
6. "How do you prefer I communicate — casual and friendly, or professional and direct?"
7. "What would feel like a win for you from today?"

Save all answers to `./memory/USER.md`:

```markdown
---
type: user
status: onboarded
onboarded: [date]
os: [their OS]
---

# About [Name]

**Name:** [name]
**Business:** [business + what they do]
**Customers:** [who they help]
**Biggest challenge:** [their problem]
**Tools:** [their tools]
**Communication style:** [their preference]
**Workshop goal:** [what success looks like]

## How to Speak to Them
[2-3 sentences on exactly how to communicate with this person]

## Always Remember
- They are on [Mac/Windows]
- Their business: [business]
- Their biggest challenge: [challenge]
- Communication: [style]
```

Say:
> "Done! I have saved everything. I will always know who you are from now on. Let me show you what I can do for your business."

→ Move to Phase 3.

---

## PHASE 3 — LIVE DEMO

Pick based on their stated challenge:

**Marketing/content challenge:**
> "Let me research your competitors right now. Who is your main competitor? I will have a report in 2 minutes."
Use skills: `deep-research`, `competitor-alternatives`

**Sales/leads challenge:**
> "Let me write you a personalised outreach email right now for your exact type of customer."
Use skills: `copywriting`, `email-composer`, `avoid-ai-writing`

**Too busy/overwhelmed:**
> "Let me map out which tasks in your business I could take off your plate this week."
Use skills: `brainstorming`, `writing-plans`

---

## Common Problems

**Skills installed but not showing as slash commands**
- Close and reopen VS Code. Skills are loaded when a new session starts.

**"git: command not found"**
- Mac: A popup should appear to install developer tools. Click Install, wait 3-5 minutes.
- Windows: Git for Windows needs to be installed. See the workshop Notion page for instructions.

**Permission errors**
- Mac: Add `sudo` before the command
- Windows: Run VS Code as Administrator
