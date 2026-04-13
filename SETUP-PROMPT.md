# Wondr AI Business Assistant — Setup Prompt

Paste everything below into Claude Code on your first run. It will take about 10 minutes.

---

Hi Claude. I'm setting up my AI Business Assistant from the Wondr workshop kit.

Please do the following, in order:

1. **Clone the Wondr workshop kit** into my home folder:
   ```
   git clone https://github.com/WONDR-AGENCY-GITHUB/wondr-workshop-kit.git ~/wondr-workshop-kit
   ```
   (Renee: replace `WONDR-AGENCY-GITHUB` with the real org name once the repo is live.)

2. **Copy skills** from `~/wondr-workshop-kit/skills/` into `~/.claude/skills/`.
   Use the correct command for my operating system (Mac or Windows).

3. **Create my project folder** at `~/my-sidekick/` and copy:
   - `~/wondr-workshop-kit/my-sidekick/CLAUDE.md` → `~/my-sidekick/CLAUDE.md`
   - `~/wondr-workshop-kit/my-sidekick/memory/` → `~/my-sidekick/memory/`

4. **Move into that folder** and tell me when you're ready.

5. **Read `~/my-sidekick/CLAUDE.md`** and follow it from there.
   It will trigger the `first-run-setup` skill, which will:
   - Verify all 72 skills are installed
   - Install Node.js if needed
   - Onboard me (either by reading my business docs, or by asking 7 questions)
   - Run a live demo using a skill that matches my biggest challenge

Go ahead and start. If anything fails, stop and explain it to me in plain English — I'm not technical.
