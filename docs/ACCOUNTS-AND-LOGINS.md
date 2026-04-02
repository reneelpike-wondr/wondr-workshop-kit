# Accounts & Logins — Everything You Need to Create

**Set these up before or at the workshop. All links are included. Most are free.**

This is your complete done-for-you list. Work through it top to bottom.

---

## Priority 1 — Required Before the Workshop

### 1. Google Account (Gmail)

You almost certainly have one already. If not:

1. Go to: [accounts.google.com/signup](https://accounts.google.com/signup)
2. Fill in your name, choose an email address ending in `@gmail.com`
3. Set a password and verify your phone number
4. Done — this gives you Gmail + Google Calendar + Google Drive in one account

> **Already have one?** Make sure you know the email address and password. You will need to click "Allow" in a Google login screen during setup.

✅ Done when: You can log in at [gmail.com](https://gmail.com)

---

### 2. Claude Account (Claude Max)

1. Go to: [claude.ai](https://claude.ai)
2. Click **Continue with Google** — sign in with the Google account from Step 1
3. Once logged in, go to **Settings → Billing**
4. Click **Upgrade Plan** → choose **Claude Max** ($100 USD/month)
5. Enter your card details

> **Why Claude Max?** The standard free plan does not include Claude Code — the version that runs on your computer and automates tasks.

✅ Done when: You see "Max" next to your plan in Settings → Billing

---

### 3. GitHub Account

GitHub is where the workshop kit is stored. You need an account to download it and get future updates.

1. Go to: [github.com/signup](https://github.com/signup)
2. Enter your email, choose a username and password
3. Verify your email address (check your inbox)
4. Done — the free plan is all you need

> **What is GitHub?** It's like Google Drive for code and documents. Your workshop kit lives at `github.com/reneepike-wondr/wondr-workshop-kit` — free and public.

✅ Done when: You can log in at [github.com](https://github.com)

---

## Priority 2 — Set Up at the Workshop

These get connected during the setup wizard. Just have the accounts ready.

### 4. Telegram Account

Telegram is a messaging app. Your AI assistant will send you phone notifications through it when it finishes tasks or needs a decision.

1. Download Telegram on your phone: [telegram.org](https://telegram.org)
   - iPhone: App Store → search "Telegram"
   - Android: Play Store → search "Telegram"
2. Open the app and sign up with your phone number
3. Verify with the SMS code sent to your phone
4. Done — no desktop app needed (though you can install one too)

> **What you will do at the workshop:** Search for `@BotFather` inside Telegram, create a bot, and give your assistant the bot token. Your assistant guides you through this step by step.

✅ Done when: Telegram is installed on your phone and you can open it

---

### 5. Workshop Kit — Download on the Day

You will run this command at the workshop. It downloads everything automatically:

```bash
git clone https://github.com/reneepike-wondr/wondr-workshop-kit.git ~/wondr-workshop-kit
```

No GitHub login required to download — the repo is public.

Your GitHub account is used for:
- Getting future updates (`git pull` to pull new skills and guides)
- Eventually storing your own customisations

---

## Priority 3 — Connect After the Workshop

These are the most useful next connections. Each one is optional but recommended.

### Google OAuth — Connects Gmail + Calendar

When you run the Gmail or Calendar connection commands, a browser window will open automatically. You just:

1. See the Google login screen
2. Click your email address
3. Click **Allow** on the permissions screen
4. Done — Claude can now access Gmail and Calendar

```bash
# Connect Gmail
claude mcp add gmail npx @gptscript-ai/gmail-mcp

# Connect Google Calendar
claude mcp add google-calendar npx @gptscript-ai/google-calendar-mcp
```

> No extra account needed — just your existing Google account.

---

### Notion Account (Optional)

If you use Notion for notes or documentation:

1. Go to: [notion.so](https://www.notion.so)
2. Click **Get Notion free** → sign up with Google
3. Connect at the workshop: `claude mcp add notion npx @anthropic-ai/notion-mcp`

---

### GoHighLevel CRM (Optional — Paid)

If you want your assistant to manage your sales pipeline and contacts:

1. Go to: [gohighlevel.com](https://www.gohighlevel.com)
2. Start a 14-day free trial
3. Plans: $97-$297 USD/month after trial
4. Get your API key from Settings → Integrations → API Keys
5. Tell your assistant: "Connect my GHL account — my API key is [key]"

---

## Account Summary

| Account | Cost | When to Create | Link |
|---|---|---|---|
| Google (Gmail) | Free | Before workshop | [accounts.google.com/signup](https://accounts.google.com/signup) |
| Claude Max | $100 USD/mo | Before workshop | [claude.ai](https://claude.ai) |
| GitHub | Free | Before workshop | [github.com/signup](https://github.com/signup) |
| Telegram | Free | Before workshop (phone) | [telegram.org](https://telegram.org) |
| Notion | Free | After workshop | [notion.so](https://www.notion.so) |
| GoHighLevel | $97-297 USD/mo | After workshop | [gohighlevel.com](https://www.gohighlevel.com) |

**Before the workshop: 4 accounts (3 free + Claude Max)**
**Total pre-workshop cost: $100 USD/month (~$155 AUD)**

---

## Passwords — Save These Somewhere Safe

Before the workshop, make sure you have saved:

- ✅ Google email address + password
- ✅ Claude Max login (same as Google if you used "Continue with Google")
- ✅ GitHub username + password
- ✅ Telegram installed on your phone

A password manager (like 1Password or the built-in Apple/Google one) is the best place to save these.

---

*Wondr Workshop — wondragency.com.au*
