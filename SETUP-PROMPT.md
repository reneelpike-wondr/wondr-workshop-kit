# Your Business Sidekick — Setup Prompt

Paste everything below into Claude Code on your first run. It will take about 10 minutes.

---

Hi Claude. I'm setting up my Business Sidekick from the Wondr workshop kit.

Please do the following, in order:

1. **Clone the Wondr workshop kit** into my home folder:
   ```
   git clone https://github.com/reneelpike-wondr/wondr-workshop-kit.git ~/workshop-kit
   ```

2. **Install the Wondr skills library** (audited for business owners — no developer tools):
   ```
   git clone https://github.com/reneelpike-wondr/wondr-skills.git ~/wondr-skills
   ```
   Then copy every folder from `~/wondr-skills/skills/` into `~/.claude/skills/`.
   Use the correct command for my operating system — and copy real folders, never symlinks (symlinked skills break on Windows).

3. **Create my project folder** at `~/my-sidekick/` and copy:
   - `~/workshop-kit/my-sidekick/CLAUDE.md` → `~/my-sidekick/CLAUDE.md`
   - `~/workshop-kit/my-sidekick/memory/` → `~/my-sidekick/memory/`

4. **Move into that folder** and tell me when you're ready.

5. **Read `~/my-sidekick/CLAUDE.md`** and follow it from there.
   It will trigger the `first-run-setup` skill, which will:
   - Verify my skills are installed
   - Install Node.js if needed
   - Onboard me (either by reading my business docs, or by asking my setup questions)
   - Run a live demo using a skill that matches my biggest challenge

Go ahead and start. If anything fails, stop and explain it to me in plain English — I'm not technical.
