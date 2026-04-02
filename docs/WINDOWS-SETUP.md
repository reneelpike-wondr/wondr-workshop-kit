# Windows Setup Guide — Install Git for Windows

**For Windows users attending the Wondr Workshop**

This is the one extra step Windows users need to complete before the workshop. It takes about 5 minutes, plus a restart.

---

## Why Do I Need This?

Claude Code needs Git to work properly. On Mac, Git sets itself up automatically the first time you use it. On Windows, you need to install it yourself and make sure Windows can find it.

---

## Step 1 — Download and Install Git for Windows

1. Go to: **https://git-scm.com/download/win**
2. The download should start automatically. If not, click the download link for **64-bit Git for Windows Setup**
3. Run the downloaded installer
4. Click through the installer — **all default settings are fine**, you do not need to change anything
5. Click **Install**, then **Finish**

---

## Step 2 — Fix the PATH (Important)

The Git installer is supposed to add itself to your system PATH automatically, but it does not always work. This manual fix makes sure Windows and VS Code can find Git.

Follow these steps exactly:

1. Press the **Windows key** on your keyboard
2. Type: **Environment Variables**
3. Click **Edit the system environment variables** (the one that says "Control Panel")
4. A "System Properties" window opens — click the **Environment Variables** button at the bottom
5. In the bottom section labelled **System variables**, find the row called **Path** and click on it to select it
6. Click **Edit**
7. Click **New**
8. Type exactly: **C:\Program Files\Git\cmd**
9. Click **OK** to close the Edit window
10. Click **OK** to close the Environment Variables window
11. Click **OK** to close the System Properties window

---

## Step 3 — Restart Your Computer

**This step is required, not optional.** Windows needs a full restart to pick up the PATH change.

1. Save any open work
2. Restart your computer (Start menu → Power → Restart)
3. Wait for it to fully restart and log back in

---

## Step 4 — Verify It Worked

1. Open **VS Code**
2. Open a terminal inside VS Code: press **Ctrl+`** (that is the backtick key, next to the number 1)
3. Type the following and press Enter:
   ```
   git --version
   ```
4. You should see something like: `git version 2.47.1.windows.1`

If you see a version number, you are done. If you see an error like `'git' is not recognized`, go back and double-check Step 2.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| `'git' is not recognized` after restart | Go back to Step 2 and make sure you added the PATH entry to **System variables** (bottom section), not User variables (top section). The path must be exactly `C:\Program Files\Git\cmd` |
| Cannot find "Environment Variables" in search | Try typing the full phrase: `Edit the system environment variables` |
| "Access denied" or cannot edit System variables | You need administrator access on your laptop. If this is a work laptop, you may need to ask IT for help |
| Git installed in a different location | If you changed the install location, use that path instead of `C:\Program Files\Git\cmd` |

---

## Need Help?

Reach out to your workshop facilitator before the workshop if anything does not work.

---

*Wondr Workshop — wondragency.com.au*
