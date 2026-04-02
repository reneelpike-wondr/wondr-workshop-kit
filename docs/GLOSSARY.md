# Plain English Glossary
*Tech words translated for normal humans*

---

**AI (Artificial Intelligence)**
Software that can think, write, and learn. Trained on billions of pages of text from the internet. Not magic — just very sophisticated pattern matching at enormous scale.

**API (Application Programming Interface)**
A way for two apps to talk to each other. When your assistant connects to Gmail, it uses Gmail's API — like a special door that only apps can use, not humans. You do not need to understand APIs; your assistant handles them.

**Browser Automation**
When your AI assistant controls your web browser — opening websites, clicking buttons, filling in forms — without you having to touch anything. Like having someone sit at your computer and do things for you.

**Chrome / Chromium**
A web browser. Chrome is the version Google makes. Chromium is the open-source version it is built on. When your assistant automates your browser, it usually opens a Chromium window.

**CLI (Command Line Interface)**
A text-based way to give instructions to your computer — instead of clicking, you type. The terminal is a CLI. It feels scary at first but it is just typing instructions.

**Claude**
The AI made by Anthropic. The most capable AI for writing, research, and business tasks. Comes in different versions: Claude.ai (the website), Claude Code (runs on your computer), and Claude API (for developers building apps).

**Claude Code**
The version of Claude that runs inside your computer. Much more powerful than the website version — it can install software, connect to your apps, control your browser, and automate tasks. What you are setting up today.

**CLAUDE.md**
A file that tells Claude who it is, how to behave, and what it can do. Think of it like a job description for your AI assistant. Every time Claude Code starts, it reads this file first.

**Extension (VS Code Extension)**
An add-on for VS Code — like an app for your app. The Claude Code extension connects Claude AI directly inside VS Code so you can chat with it while looking at your files.

**Git**
A tool that tracks changes to files and lets you download collections of files from the internet. When you run `git clone`, you are downloading a collection of files — like pressing Download on an app.

**GitHub**
A website where developers store and share collections of files. Like Google Drive but for code. The workshop kit is stored on GitHub so you can always download the latest version.

**MCP (Model Context Protocol)**
A way to connect Claude Code to external tools and apps — Gmail, Calendar, Notion, your CRM, etc. When you add an MCP, you are giving Claude a new connection to the outside world. You do not need to understand the technical details; just know it is how Claude connects to your apps.

**Memory File**
A file your assistant reads at the start of every conversation to remember who you are. Stored at `~/my-assistant/memory/USER.md`. Think of it as your assistant's notepad about you.

**Node.js**
Software that lets JavaScript (a programming language) run on your computer. Claude Code needs it to run. You will never need to interact with it directly — the setup script installs it automatically.

**npm**
The tool that installs software packages for Node.js. When you see `npm install -g something`, it is downloading and installing a piece of software. The `-g` means install it everywhere on your computer.

**Playwright**
A tool that lets your AI assistant control your browser — opening pages, clicking buttons, taking screenshots. Essential for the hands-off setup experience. Once installed, your assistant can do things like "open their pricing page and screenshot it."

**Prompt**
What you type to your AI assistant. The better your prompt (the more context and detail you give), the better the output. "Write an email" is a bad prompt. "Write a 100-word follow-up email to a café owner who attended my workshop" is a great prompt.

**Script**
A file containing a list of instructions that your computer runs one by one. Like a recipe — it just executes each step in order. The `setup.sh` file in your workshop kit is a script.

**Server**
A computer that runs 24/7 in a data centre. If you want your AI assistant to work while your laptop is closed — sending emails overnight, monitoring leads while you sleep — you need a server. Not required to get started.

**Skill (Claude Skill)**
A file that teaches Claude how to do a specific type of task — writing emails, doing research, creating content, etc. Stored in `~/.claude/skills/`. Your assistant reads the relevant skill file before doing a task.

**SSH**
A way to securely connect to and control a remote computer (like a server) from your terminal. Like a phone call to your server. Not needed unless you set up a server.

**Terminal**
A text-based window on your computer where you type instructions. On Mac it is called Terminal. In VS Code, you open it by clicking Terminal → New Terminal. It is not as scary as it looks — you mostly just paste commands that your assistant or workshop guide gives you.

**Token**
A unit of text that AI processes. Also used to mean an API key or password. "Claude is running out of tokens" means the conversation is getting too long. "Enter your bot token" means enter a password-like code.

**VS Code (Visual Studio Code)**
A free app made by Microsoft. It is where you will chat with your AI assistant, see your files, and run your terminal. Think of it like a supercharged Notepad — most professional developers and AI users work in it.

**Webhook**
A way for one app to notify another app when something happens. "When a new lead comes in, send me a notification." Your assistant can set these up for you.

---

*Wondr Workshop — wondragency.com.au*
