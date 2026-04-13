# Completion Guide — Finishing Your Sidekick Setup After the Workshop

Even Robin needed a minute to find his feet after joining Batman. If you didn't get through everything today, this guide walks you through completing your setup at home. Take your time. There's no rush.

---

## What You Should Have Done Today

Tick these off:

- [ ] VS Code installed
- [ ] Terminal basics understood
- [ ] Claude Code installed (`npm install -g @anthropic-ai/claude-code`)
- [ ] Logged in to Claude (`claude login`)
- [ ] Workshop kit downloaded (`git clone ...`)
- [ ] Skills installed (check `~/.claude/skills/`)
- [ ] Playwright (browser automation) connected
- [ ] Gmail connected (optional — if you got to it)
- [ ] Onboarding completed (told your assistant about your business)
- [ ] Tested a first task with your assistant

---

## Finishing at Home — Step by Step

### If you didn't finish the install:

Open Terminal (Mac: press Command + Space, type "Terminal", press Enter) and run:

```bash
npm install -g @anthropic-ai/claude-code
claude login
```

Your skills were installed during the workshop setup. They live at `~/.claude/skills/`

---

### Connect More Tools

These are the most valuable next connections. Do them in this order:

#### 1. Google Calendar (know your schedule)
Your assistant can help you set this up — just ask in the Claude chat:
> "Help me connect Google Calendar so you can see my schedule."

Now your assistant can see your calendar, find free time, and help you plan meetings.

#### 2. Notion (knowledge base)
Your assistant can help you set this up — just ask in the Claude chat:
> "Help me connect Notion so you can read and update my workspace."

Great for keeping a business knowledge base.

#### 3. Slack or Microsoft Teams (if you use them)
Your assistant can help you set this up — just ask in the Claude chat:
> "Help me connect Slack so you can send and read messages."

---

### Set Up Telegram Notifications

This lets your Sidekick send you messages on your phone. Very useful when it finishes a task.

**Step 1:** Download Telegram on your phone (free)
**Step 2:** Search for `@BotFather` in Telegram
**Step 3:** Send `/newbot` and follow the instructions
**Step 4:** Copy your bot token
**Step 5:** Tell your assistant: "I want to set up Telegram notifications. My bot token is: [your token]"
**Step 6:** Your assistant handles the rest

---

### Connect Your CRM (GoHighLevel or HubSpot)

Your assistant can help you set this up — just ask in the Claude chat:
> "Help me connect my CRM (GoHighLevel / HubSpot) so you can manage my contacts. My API key is [key]."

---

### The Most Useful Things to Do in Week 1

Now that everything's set up, here's what to try first:

**Day 1: Research**
> "Research the top 5 pain points for [your target customer] in 2025. Give me a structured report I can use for marketing."

**Day 2: Content**
> "Write 10 LinkedIn posts for the next 2 weeks for my business. My business is [describe]. My audience is [describe]. Make them sound like a real person."

**Day 3: Email**
> "Build me a 5-email welcome sequence for new leads. Each email should be under 200 words. The sequence is for [your business type]."

**Day 4: Competitors**
> "Analyse my top 3 competitors. Go to their websites, summarise what they offer, what their pricing looks like, and where I could position differently."

**Day 5: Strategy**
> "I want to increase my revenue by 30% in the next 90 days. Help me brainstorm 10 specific strategies based on what you know about my business."

---

## How to Get Better Results

### The Golden Rule of AI Prompts
More context = better results. Always include:
1. **Who** you're writing for
2. **What** you want
3. **Why** it matters (the goal)
4. **How** you want it (tone, length, format)

**Example:**
> "Write a cold email [WHAT] to a restaurant owner in Brisbane [WHO] offering social media management services [WHY: get them as a client]. Keep it under 150 words, casual but professional, with a specific question at the end to start a conversation [HOW]."

---

### Teach Your Assistant Over Time

The more you tell your assistant, the better it gets. After any conversation, you can say:
> "Remember that for future — I prefer emails to be under 200 words and always end with a question."

Your assistant will update its memory file and apply it from that point on.

---

### Save Your Best Prompts

When you find a prompt that works really well, save it. Create a file:
```bash
nano ~/my-sidekick/my-best-prompts.md
```
Paste in your best prompts so you can reuse them.

---

## Troubleshooting Common Issues

### "Claude says it can't find my skills"
```bash
ls ~/.claude/skills/
```
Your skills were installed during the workshop setup. They live at `~/.claude/skills/`. If the folder is empty, ask your assistant for help:
> "My skills folder is empty. Help me reinstall the workshop skills."

### "Claude isn't remembering me"
Check your memory file exists:
```bash
cat ~/my-sidekick/memory/USER.md
```
If it says "status: not-yet-onboarded", start a new conversation and your assistant will run the onboarding questions again.

### "Gmail/Calendar isn't connecting"
Your assistant can help you set this up — just ask in the Claude chat:
> "Gmail/Calendar isn't working. Help me reconnect it."

### "Something broke and I don't know what"
Tell your assistant:
> "Something broke. Here's the error: [paste the red error text]. Help me fix it step by step."

Your `systematic-debugging` skill handles this — your assistant will walk you through diagnosing and fixing it in plain English.

### "I forgot how to start my assistant"
```bash
cd ~/my-sidekick && claude
```
That's the only command you need to remember. Put a note on your monitor if needed!

---

## Getting More Advanced (Month 2+)

Once you're comfortable with the basics, here's what to explore next:

### n8n (Automation Workflows)
n8n is a visual automation tool (like Zapier, but you own it). Your AI assistant can build and manage n8n workflows. Things like:
- "When someone fills in my contact form, add them to my CRM and send them a welcome email"
- "Every Monday, pull my sales numbers and email me a summary"

### Your Own Agents
Once you see the value of AI in your business, you can deploy your own agents that run 24/7. Luke and the Wondr team can set this up for you.

### Voice Interface
You can talk to your Sidekick instead of typing, using tools like Wispr Flow (what Luke uses).

---

## Support

- **Workshop resources:** All documents in `~/workshop-kit/docs/`
- **Skills reference:** `~/workshop-kit/skills/SKILLS-LIST.md`
- **Luke / Wondr:** wondragency.com.au

---

*Built for the OpenClaw Workshop by Wondr — wondragency.com.au*
