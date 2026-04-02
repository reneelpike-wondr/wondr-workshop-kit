# PAGE 2 — Your Setup: How Everything Connects

---

## The Big Picture

Think of your AI setup like a kitchen — you're the head chef, Claude is your sous chef, and the tools are the equipment.

```
┌─────────────────────────────────────────────────────────────────┐
│                        YOUR COMPUTER                             │
│                                                                   │
│   ┌──────────────┐     ┌──────────────┐     ┌──────────────┐   │
│   │   VS CODE    │     │   TERMINAL   │     │   BROWSER    │   │
│   │              │     │              │     │              │   │
│   │ Your editor  │────▶│ Claude runs  │────▶│ Claude can   │   │
│   │ See files    │     │ here         │     │ control this │   │
│   │ Chat & watch │     │ Type commands│     │ Fill forms   │   │
│   └──────────────┘     └──────────────┘     │ Scrape sites │   │
│          │                    │              └──────────────┘   │
│          ▼                    ▼                                   │
│   ┌─────────────────────────────────────────────────────────┐   │
│   │                     CLAUDE CODE                          │   │
│   │                  (Your AI Assistant)                     │   │
│   │                                                          │   │
│   │  Reads:    CLAUDE.md — your instructions & who you are  │   │
│   │  Remembers: memory/USER.md — your business profile      │   │
│   │  Uses:     65 Skills — specialist capabilities          │   │
│   │  Connects: MCP tools — Gmail, Calendar, CRM, and more   │   │
│   └─────────────────────────────────────────────────────────┘   │
│                                                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

## What Each Part Does

### VS Code
Your workspace — where you see all your files, read what Claude writes, and give it instructions. Free, made by Microsoft. Think of it as your office desk.

### Terminal (inside VS Code)
The text window where you type commands and Claude Code runs. Looks technical, but you only ever need two commands. Claude handles the rest.

### CLAUDE.md — Your Instructions File
A file you can read and edit that tells Claude who you are, how to talk to you, and what it can do. It loads automatically every time you open Claude.

> Like an instruction manual for a new employee that Claude re-reads every morning.

### Skills (92 installed)
Specialist training programs that give Claude deep expertise. When you ask Claude to write ad copy, it reads the copywriting skill first. When you ask for competitor research, it reads the research skill. No extra steps needed — it chooses automatically.

> Like giving your assistant access to 92 specialist textbooks they can reference on demand.

### MCP Tools — App Connections
Live connections to your other apps. Once connected, Claude can read your emails, check your calendar, update your CRM, and control your browser — without you having to copy and paste anything.

> Like giving your assistant login access to your business apps.

### Memory — USER.md
A file where Claude saves everything it learns about you. Your name, your business, your customers, your communication style. Reads it at the start of every conversation so it always knows who you are.

> This is what makes it YOUR assistant, not just any AI.

---

## Your File Structure

```
YOUR COMPUTER
│
├── my-assistant/
│   ├── CLAUDE.md              ← Claude's instructions (loads every session)
│   ├── .mcp.json              ← Browser automation auto-connects on startup
│   └── memory/
│       ├── USER.md            ← Your profile (name, business, preferences)
│       └── SETUP.md           ← Setup completion status
│
├── wondr-workshop-kit/
│   ├── setup.sh               ← The installer that set everything up
│   ├── skills/                ← Your 92 skill files
│   └── docs/                  ← Guides and reference docs
│
└── .claude/
    └── skills/                ← Where Claude looks for your installed skills
```

---

## How a Conversation Works

```
You type a message
        │
        ▼
Claude reads CLAUDE.md (your instructions — loads every time)
        │
        ▼
Claude reads memory/USER.md (your business profile — who you are)
        │
        ▼
Claude picks the right skill (e.g. copywriting skill for writing tasks)
        │
        ▼
Claude does the work (research, writing, browser, automation)
        │
        ▼
Claude responds in your preferred style and format
        │
        ▼
If it learned something new → saves to your memory file
```

---

## The 3 Commands You Will Ever Need

```bash
# 1. Start your AI assistant (do this every time)
cd ~/my-assistant && claude

# 2. Check what tools are connected
claude mcp list

# 3. Install a new tool connection
claude mcp add [tool-name] [command]
```

That is it. Claude handles everything else.

---

## The First Time You Open It

When you run `cd ~/my-assistant && claude` for the first time, your assistant will:

1. Greet you by name (once set up)
2. Tell you what it remembers about your business
3. Ask what you want to work on
4. Do the task — using your skills and connected tools

Every session after that, it already knows who you are. No re-explaining needed.

---

*Wondr Workshop — wondragency.com.au*
