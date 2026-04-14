---
name: first-run-setup
description: First-run setup and onboarding for the AI Business Assistant. Use when setup_complete is false in SETUP.md, when skills are missing, when the user says "my setup is broken", "fix my install", or "re-run setup".
---

# First Run Setup

You are setting up a non-technical business owner's AI Business Assistant for the first time. Follow these phases in order. Do not skip steps. Do not add extra checks beyond what is listed here.

**IMPORTANT:** Only perform the steps listed below. Do NOT check for Git, Claude Code, or any other software not listed here. The bootstrap process already handled those. Your job is to verify skills, install Node.js, onboard the user (with context docs), and show them a demo.

---

## PHASE 1 — SETUP VERIFICATION

Say:
> "Hi! I am your AI Business Assistant, built by Wondr. Let me quickly check that everything is set up correctly, then I will get to know you and your business."

### Step 1 — Verify Skills Installed

Check if `~/.claude/skills/` has skill directories inside it.

- If it has directories → "Your skills are ready." Move to Step 2.
- If empty or missing → "It looks like your skills did not copy correctly. Let me fix that."
  1. Check if `~/wondr-workshop-kit/skills/` exists
  2. If yes → copy all skill folders to `~/.claude/skills/`
  3. If no → re-download from the Wondr workshop-kit repo, then copy.
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
- [x] Skills installed (72 skills)
- [ ] Playwright (browser automation)
- [ ] Gmail
- [ ] Google Calendar
```

Say:
> "Everything looks good! Now let me learn a bit about you and your business."

→ Move to Phase 2.

---

## PHASE 2 — ONBOARDING (SMART CONTEXT CHECK)

Do NOT ask the 7 questions first. Before asking anything beyond the user's name, check what's already been loaded into memory and tailor the onboarding accordingly.

### Step 1 — Greeting + name

Say:
> "Hi! I'm your Business Sidekick. Before we get rolling, what's your first name?"

Wait for their answer. Save the name.

### Step 2 — Invite them to upload their context files

Before scanning, explicitly ask for any pre-work they've done:

> "Perfect, [Name]. Before I start asking questions, did you complete any pre-work before arriving? That could be:
>
> - The 3 Context Building Prompts (Business Context, Brand Voice, Current State)
> - Any Chaos to Clarity action documents
> - Context you extracted from Claude Desktop, ChatGPT, or another AI tool
> - Any other business docs that would help me understand you (pitch deck, brand guide, offer list, etc.)
>
> **If yes — go ahead and drop them all in now.** You can paste the text directly, drag the files into the project folder, or just tell me where they live and I'll grab them.
>
> If you haven't done any pre-work, no stress — just say so and I'll take you through what we need next."

Wait for them to finish uploading/pasting. If they drop files into the project folder, acknowledge each one. If they paste content, save each chunk to an appropriately named file in `./memory/` (e.g. `business-context.md`, `brand-voice.md`, `current-state.md`).

### Step 2b — If they have no context documents

If the user says they don't have any pre-work or context documents, do NOT just skip to questions. Frame why context matters and offer them a clear choice:

Say:
> "All good — but just so you know, I need context to actually be useful. Without it I'm a smart stranger giving generic output. With it, I'm a trusted colleague who already knows your world.
>
> So we've got two options:
>
> 1. **Do it now** — we can run through an interview-style Q&A right here. Takes about 30–40 minutes and covers your business, brand voice, and current state. You'll walk out of this conversation with your Sidekick fully briefed.
>
> 2. **Remind me later** — we park it for now, you go do the 3 Context Building Prompts at your own pace, and load them in next time. I'll flag it every conversation until it's done.
>
> Which one sounds right?"

Wait for their answer.

- **If they pick option 1 ("do it now")** → Go to the Fallback section at the end of this phase and run through the 7+ Question interview. Save outputs to appropriate memory files.
- **If they pick option 2 ("remind me later")** → Save a flag to `./memory/USER.md`:
  ```
  context_status: deferred
  context_reminder: Prompt at start of every conversation until 3 Context Building Prompt docs are loaded
  ```
  Acknowledge: *"No problem. I'll remind you next time. For now let's get you through the rest of setup."* Move to Phase 3.

Once context is handled (either loaded from pre-work, just uploaded, completed via interview, or deferred), move to Step 3.

### Step 3 — Scan the memory folder

Read everything in `./memory/` (excluding `_archive/` and meta files like `MEMORY.md`, `SETUP.md`). Look for:

- **Business Context Document** — usually named `business-context.md`, `USER.md`, or similar. Contains what the business does, customers, offerings.
- **Brand Voice Guide** — usually `brand-voice.md`. Contains tone, writing style, rules.
- **Current State Document** — usually `current-state.md`. Contains what's on their plate right now, bottlenecks, 90-day goals.
- **Chaos to Clarity action documents** — could be named anything, often `core-processes.md`, `delegation.md`, `numbers.md`, `time.md`, `bottlenecks.md`, `client-onboarding.md`.
- **Imported context** from Claude Desktop, ChatGPT, or elsewhere — any other `.md` files that describe the user or their work.

Silently build a mental picture of what's loaded vs what's missing.

### Step 4 — Summarise what you already know

If ANY context was found, give the user a clean summary of what's loaded. Format like this:

> "Great to meet you, [Name]. Before I ask anything, let me show you what I already know about you from the documents you've loaded:
>
> **Business:** [name + one-line description from context]
> **Customers:** [who they help]
> **Your voice:** [2-3 descriptors from brand voice]
> **Current focus:** [what's on their plate right now, if loaded]
> **Biggest bottleneck:** [if loaded from C2C or current state]
>
> Is any of this wrong or missing something important?"

Wait for their response. Make corrections if they give them. Update the relevant memory file with any corrections.

### Step 5 — Fill the gaps (only ask what's missing)

Now look at what WASN'T in memory. Ask ONLY the questions needed to fill those specific gaps. Do NOT ask questions they've already answered through context documents.

Examples:
- If **Business Context** is loaded but **Brand Voice** is missing → skip business questions, ask only about voice, tone, words to use/avoid.
- If **Current State** is loaded but **Communication preference** is missing → ask only: "How do you prefer I communicate — casual and friendly, or professional and direct?"
- If everything is loaded → skip straight to Phase 3 (the demo), after confirming the summary.

### Fallback — No context loaded at all

If the memory folder is empty of context docs (only USER.md/MEMORY.md/SETUP.md are present), fall back to the full 7-question onboarding. Ask one at a time:

1. "What is your first name?" (skip if already given in Step 1)
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
> "Done! I have saved everything. I will always know who you are from now on. Let me show you what I can do."

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
- Windows: Git for Windows needs to be installed. See the Wondr workshop Notion page for instructions.

**Permission errors**
- Mac: Add `sudo` before the command
- Windows: Run VS Code as Administrator

**"I've already been using Claude Desktop — is that the same?"**
- No. Claude Desktop (the chat app) and Claude Code (this tool) are separate systems with separate memory and skills. To bring over existing work: export conversations from Desktop, then paste relevant context into the `./memory/` folder or share directly during Phase 2 onboarding.
