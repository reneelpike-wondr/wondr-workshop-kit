# Wondr Workshop — AI Business Assistant Kit

**Built by Wondr — [wondragency.com.au](https://wondragency.com.au)**

> Give your business an AI assistant that remembers who you are, learns your business, and gets smarter every time you use it — without writing a single line of code.

---

## What Is This?

This kit sets up a personal AI business assistant on your laptop. Not a chatbot you close and forget — an assistant that:

- **Remembers your business** — your name, your customers, your biggest challenges
- **Lives on your computer** — runs locally, not in a browser tab
- **Controls your browser** — can open websites, fill forms, and do research for you
- **Has 65 specialist skills** — research, copywriting, sales emails, social content, competitor analysis, and more
- **Gets smarter over time** — every conversation builds on the last

It is built on [Claude Code](https://claude.ai/claude-code) by Anthropic — the same AI that powers Claude, configured specifically for your business.

---

## Who Is This For?

**Workshop attendees** — follow the setup guide below. Your assistant will walk you through everything.

---

## How It Works

```text
Your Laptop
    └── VS Code (your workspace app)
         └── Claude Code (your AI assistant)
              ├── CLAUDE.md (your assistant's instructions + memory loader)
              ├── memory/ (saves what it learns about you)
              ├── skills/ (65 specialist capabilities)
              └── Playwright (browser remote control)
```

**Two steps, then you are up and running:**

| Step | What Happens |
|---|---|
| **1. Bootstrap** | Paste the bootstrap prompt into Claude Code — it clones the repo, copies skills, and creates your workspace |
| **2. Open workspace** | Open `~/my-sidekick/` in VS Code and start Claude Code — the CLAUDE.md agent handles onboarding, asks about your business, and runs a live demo |

After that, every time you open VS Code and type `claude`, your assistant already knows who you are.

---

## Quick Start

**Before the workshop**, complete these 3 steps — takes about 15 minutes:

1. Get a **Claude Max** subscription at [claude.ai](https://claude.ai) ($100 USD/month)
2. Install **VS Code** at [code.visualstudio.com](https://code.visualstudio.com)
3. Install the **Claude Code extension** inside VS Code (search "Claude Code" in Extensions)

**Windows users:** also install [Git for Windows](https://gitforwindows.org) — see [docs/WINDOWS-SETUP.md](docs/WINDOWS-SETUP.md) before arriving.

No other pre-installs needed on Mac. Full checklist: [docs/PRE-WORKSHOP-CHECKLIST.md](docs/PRE-WORKSHOP-CHECKLIST.md)

---

## At the Workshop

1. Open VS Code and start Claude Code in the terminal
2. Copy the **bootstrap prompt** from the workshop Notion page and paste it into Claude Code
3. Claude handles everything: clones the repo, copies skills, creates your workspace
4. When it finishes, open `~/my-sidekick/` in VS Code and start Claude Code
5. The CLAUDE.md agent takes over — it greets you, asks about your business, and shows you what it can do

Your assistant handles it all conversationally, one step at a time. No scripts to run, no commands to memorise.

---

## Your 65 Skills

Skills are specialist capabilities your assistant can use. Think of them like switching your assistant from "general helper" to "expert copywriter", "market researcher", or "product strategist" for a specific task.

This kit includes a curated, security-reviewed skill library built specifically for business owners.

**Marketing & Content**

| Skill | What It Does |
|---|---|
| `copywriting` | Persuasive marketing copy for any platform |
| `avoid-ai-writing` | Strips robotic AI patterns from any text |
| `content-creator` | Long-form SEO articles and blog content |
| `content-marketer` | Omnichannel content marketing strategy |
| `social-content` | Social media posts for LinkedIn, Instagram, Facebook |
| `ad-creative` | Ad headlines, copy, and creative briefs |
| `direct-response-copy` | High-converting direct response copy |
| `paid-ads` | Google, Meta, LinkedIn campaign strategy |
| `email-sequence` | Automated email campaigns and sequences |
| `email-composer` | Professional emails for any context |
| `content-repurposer` | Turn one piece of content into 5 channel-specific assets |
| `brand-voice` | Extract and apply consistent brand voice |
| `follow-up-writer` | Post-call follow-up messages from raw notes |

**Research & Intelligence**

| Skill | What It Does |
|---|---|
| `deep-research` | Deep research on any topic |
| `research-analyst` | Competitive and market analysis with structured reports |
| `reddit-insights` | Mines Reddit for honest customer opinions |
| `competitor-alternatives` | Maps your competitive landscape |
| `competitive-cartographer` | Strategic competitive positioning |
| `apify-market-research` | Market research across Google, Amazon, reviews |
| `apify-competitor-intelligence` | Competitor strategy, pricing, ads, positioning |
| `apify-content-analytics` | Content performance and campaign ROI |
| `last30days` | Trends and sentiment from the last 30 days |
| `youtube-summarizer` | Transcripts and summaries from any YouTube video |

**Sales & Revenue**

| Skill | What It Does |
|---|---|
| `sales-automator` | Cold emails, follow-ups, proposal templates, sales scripts |
| `call-prep` | Pre-call intelligence briefs |
| `campaign-planner` | Multi-channel campaign planning |
| `objection-handler` | Pre-call objection prep from CRM history |
| `revenue-gap-finder` | Find stalled deals in your pipeline |

**Strategy & Business**

| Skill | What It Does |
|---|---|
| `brainstorming` | Structured idea generation |
| `systems-thinking` | Maps complex systems to find high-leverage interventions |
| `indie-monetization-strategist` | Monetisation models for solopreneurs and small teams |
| `tech-entrepreneur-coach-adhd` | Founder strategy — validation, MVP, marketing, money |
| `personal-finance-coach` | Tax optimisation, investment, cash flow |
| `product-appeal-analyzer` | Product desirability and market positioning |
| `plan-ceo-review` | CEO-mode plan review — challenge premises, expand scope |
| `contract-review` | Plain-English contract review with risk flagging |
| `finance-analyst` | Plain-English financial analysis from spreadsheet data |
| `doc-summary` | Structured document summariser — key decisions, action items |
| `data-cleaner` | Clean messy spreadsheets and CSV data |

**AI & Automation**

| Skill | What It Does |
|---|---|
| `orchestrator` | Master coordinator — delegates to specialist skills |
| `agent-creator` | Create custom agents and skills |
| `prompt-engineer` | Improve AI instructions for better results |
| `skill-creator` | Create and improve Claude skills |
| `bot-developer` | Discord, Telegram, Slack bots |
| `agentfolio` | Discover and research autonomous AI agents |
| `n8n-workflow-patterns` | Proven n8n workflow patterns |
| `n8n-mcp-tools-expert` | Guide for using n8n automation tools |

**Planning & Workflow**

| Skill | What It Does |
|---|---|
| `writing-plans` | Plans complex tasks before executing |
| `executing-plans` | Execute implementation plans with review checkpoints |
| `task-decomposer` | Break complex problems into parallel sub-tasks |
| `dispatching-parallel-agents` | Run independent tasks simultaneously |
| `verification-before-completion` | Verify work before claiming it's done |
| `using-superpowers` | Skill discovery and invocation framework |

**Design & Visuals**

| Skill | What It Does |
|---|---|
| `frontend-design` | Design landing pages and marketing pages |
| `diagramming-expert` | Text-based diagrams for processes and systems |
| `web-design-guidelines` | Web interface guidelines and best practices |

**Browser & Testing**

| Skill | What It Does |
|---|---|
| `playwright-skill` | Browser automation with Playwright |
| `qa` | Systematic QA testing for web apps |
| `webapp-testing` | Browser-based web application testing |

**Setup**

| Skill | What It Does |
|---|---|
| `first-run-setup` | First-run setup and onboarding for your assistant |

---

## What's In This Kit

```text
wondr-workshop-kit/
├── CLAUDE.md                    # Pointer to my-sidekick/CLAUDE.md
├── my-sidekick/                # Copied to ~/my-sidekick/ on your computer
│   ├── CLAUDE.md                # Your assistant's brain — instructions + onboarding agent
│   └── memory/                  # Where your assistant saves what it learns
│       ├── USER.md              # Your profile (filled in on first run)
│       ├── SETUP.md             # Setup completion status
│       └── MEMORY.md            # Persistent memory across conversations
├── skills/                      # 72 skills (installed to ~/.claude/skills/)
├── docs/
│   ├── PRE-WORKSHOP-CHECKLIST.md   # What to do before arriving
│   ├── WINDOWS-SETUP.md            # Step-by-step Windows guide
│   ├── COMPLETION-GUIDE.md         # What to do after the workshop
│   ├── SKILLS-REFERENCE.md         # How to use each skill
│   ├── FIRST-5-PROMPTS.md          # Copy-paste prompts to get started
│   ├── ACCOUNTS-AND-LOGINS.md      # Every account to create (with links)
│   ├── SUBSCRIPTIONS-AND-SOFTWARE.md  # What costs what
│   └── GLOSSARY.md                 # Plain English definitions of every tech term
└── visuals/                     # Printable explainer pages
```

---

## After the Workshop

Your assistant is now yours. A few things to explore next:

- **Create all accounts** — see [docs/ACCOUNTS-AND-LOGINS.md](docs/ACCOUNTS-AND-LOGINS.md)
- **Add Gmail** — your assistant can help you connect it
- **Add Google Calendar** — same — just ask your assistant
- **Explore your skills** — ask "what skills do you have?" to see everything available

Full guide: [docs/COMPLETION-GUIDE.md](docs/COMPLETION-GUIDE.md)

---

## Common Questions

**Is my data private?**
Yes. Your memory files (`~/my-sidekick/memory/`) live on your computer only. Nothing is sent to a third party except your conversations with Claude (which go to Anthropic, same as using claude.ai normally).

**What does it cost after the workshop?**
Claude Max is $100 USD/month (~$155 AUD). That is the only required cost. Everything else in this kit is free.

**What if I miss a step during setup?**
Your assistant will notice and offer to fix it. Just open `~/my-sidekick/` in VS Code, start Claude Code, and it will pick up where you left off.

**Can I use this on Windows?**
Yes. See [docs/WINDOWS-SETUP.md](docs/WINDOWS-SETUP.md) for the complete Windows walkthrough.

---

## Support

- Workshop guides: [`docs/`](docs/)
- Windows guide: [`docs/WINDOWS-SETUP.md`](docs/WINDOWS-SETUP.md)
- Wondr: [wondragency.com.au](https://wondragency.com.au)

---

Wondr Workshop Kit — April 2026 — Built by Wondr
