# Workshop Run-Sheet — 3 Hours

**For: Luke (workshop facilitator)**
**Audience: 20 non-technical business owners**
**Goal: Every person leaves with a working Business Sidekick and their first real output — their own Goose, Woz, or Scully, paired up and ready to go.**

---

## Before the Room Opens (30 min before)

- [ ] Print and lay out handouts: 4 visual pages per person (visuals/ folder)
- [ ] Print and lay out: FIRST-5-PROMPTS card (1 per person)
- [ ] Print and lay out: GLOSSARY page (1 per person)
- [ ] Have SUBSCRIPTIONS-AND-SOFTWARE doc on the screen
- [ ] Test your own setup — open VS Code, run `cd ~/my-sidekick && claude`, confirm it loads
- [ ] Have the Notion page open with the bootstrap prompt ready for attendees to copy
- [ ] Check the room Wi-Fi is strong enough for 20 people downloading tools
- [ ] Have a "helper" setup for anyone who falls behind (Telegram or second laptop)

---

## HOUR 1 — Context + Setup (60 min)

### 0:00-0:10 — Welcome + Why AI (10 min)

- Welcome everyone, quick intro
- Ask: "Who here uses AI already? Who uses ChatGPT?" (show of hands)
- Frame the workshop: "Today you are not just learning about AI — you are walking out with YOUR AI assistant that knows your business"
- Show Page 1 handout: AI Models

**Key points to make:**
- Claude is the most capable AI for business tasks
- Claude.ai (the website) = a chat interface. Claude Code = Claude running IN your computer
- The difference: Claude Code can control your computer, install tools, connect to your apps
- This is not a demo. You are setting this up for real today.

### 0:10-0:20 — The Stack Explained (10 min)

- Show Page 2 handout: Your Setup diagram
- Walk through: "Your computer has 3 things open — VS Code, Terminal, and Browser"
- Show Page 3 handout: Skills and Agents
- Explain skills in plain terms: "Think of skills like apps. Each one teaches your assistant a new ability."
- Show Page 4 handout: The Full Ecosystem

**Key analogy:** "You are building a staff member today. VS Code is their office, Terminal is how they communicate with your computer, skills are their training, and CLAUDE.md is their job description."

### 0:20-0:40 — Live Demo (20 min)

- Do a live demo from YOUR assistant
- Show: "Watch what happens when I ask it to research a competitor"
- Run a real deep-research on a well-known business (e.g. "Research Hubspot and tell me 5 gaps in their offer")
- Show: "Now watch it write a LinkedIn post about that gap"
- Show: "Now watch it open my browser and take a screenshot of their pricing page"

**Purpose:** Get them excited and show it is real before they touch anything.

### 0:40-0:55 — SETUP TIME — Everyone Installs (15 min)

**Walk them through one step at a time. Do each step yourself on the big screen.**

1. "Everyone open VS Code" — wait until everyone has it
2. "Open the Claude Code panel" (show them how)
3. "Now go to the Notion page — the link is on the screen" — show the Notion page URL
4. "Copy the bootstrap prompt from the Notion page and paste it into Claude Code"
   - **Warning beforehand:** "If a popup appears asking to install developer tools — click Install. This is normal on Mac."
5. Wait for everyone. Walk around to anyone stuck. Claude will clone the repo, copy skills, and create the workspace.
6. When the bootstrap finishes: "Now open the folder `~/my-sidekick/` in VS Code — File → Open Folder"
7. "Start Claude Code in the new window — your assistant will introduce itself"

### 0:55-1:00 — Buffer / Help Stragglers (5 min)

- Walk the room, make sure everyone has Claude running in `~/my-sidekick/`
- Help anyone whose bootstrap had issues

---

## HOUR 2 — Onboarding + First Tasks (60 min)

### 1:00-1:15 — Onboarding (15 min)

- "Your assistant is now asking you questions. Answer them honestly — it is learning about YOUR business."
- Walk around the room to check everyone is through the 7 questions
- Help anyone who is confused

### 1:15-1:45 — First Real Task (30 min)

- "Now ask your assistant to do something real for your business."
- Give them the FIRST-5-PROMPTS card — "Pick one of these to start with"
- Walk around the room — help people phrase their first prompt
- Celebrate loudly when someone gets a good output: "Look at that — that is real work done in 2 minutes"

### 1:45-2:00 — Connect Their Browser (15 min)

- "Now let's give your assistant the ability to control your browser"
- Everyone: `claude mcp add playwright npx @playwright/mcp@latest --scope user`
- Demo what this enables: "Now ask it to open a competitor's website and screenshot their pricing"
- Show the browser opening and working

---

## HOUR 3 — Power Features + Next Steps (60 min)

### 2:00-2:20 — Gmail and Calendar (20 min)

- "Anyone want to connect their email? Raise your hand."
- Walk them through Gmail connection with Playwright assistance
- Demo: "Now ask your assistant to summarise your last 10 emails"

### 2:20-2:35 — Telegram Setup (15 min)

- "This is the one that will blow your mind — notifications on your phone when your assistant finishes a job"
- Walk through Telegram bot setup for anyone who wants it
- Demo: Set a task running and show the phone notification

### 2:35-2:50 — Q&A + Showcase (15 min)

- Ask 3-4 people to share what their assistant produced today
- Address common questions (have FAQ doc ready)
- Show: "You can keep giving it tasks after you leave today"

### 2:50-3:00 — Close + Next Steps (10 min)

- Hand out the COMPLETION-GUIDE.md printout
- "Anything you did not finish today is in this guide — it walks you through completing it at home"
- Mention the upgrade paths (server, GHL, n8n)
- "The more you use it, the smarter it gets about YOUR business"
- CTA: Anyone who wants a fully set-up server version (24/7 agents) — speak to Luke

---

## Emergency Fixes (Common Issues)

| Problem | Fix |
|---|---|
| `git: command not found` | Click Install on the Xcode popup that appeared |
| `claude: command not found` | Claude Code extension may not be installed — check VS Code Extensions panel |
| Claude login loop | Run: `claude logout` then `claude login` again |
| Bootstrap prompt fails partway | Paste the bootstrap prompt again — it is safe to re-run |
| Playwright not connecting | Run: `claude mcp add playwright npx @playwright/mcp@latest --scope user` |
| Windows-specific issues | Check `docs/WINDOWS-SETUP.md` — Git for Windows must be installed |

---

## What Success Looks Like

Every person should leave with:
- [ ] Claude Code installed and logged in
- [ ] 92 skills installed
- [ ] Browser automation (Playwright) connected
- [ ] At least 1 real output from their business (research, email, post)
- [ ] Memory set up (assistant knows their business)
- [ ] Printed handouts to refer to at home
- [ ] Completion guide for finishing the rest

---

*OpenClaw Workshop — wondragency.com.au*
