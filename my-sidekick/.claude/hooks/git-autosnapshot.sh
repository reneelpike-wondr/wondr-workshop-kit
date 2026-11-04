#!/bin/bash
# Restore point: a private, local snapshot of this workspace at the start of
# every session, so any mistake is easy to undo. Nothing leaves this computer.
cd "${CLAUDE_PROJECT_DIR:-$(pwd)}" 2>/dev/null || exit 0
command -v git >/dev/null 2>&1 || exit 0
[ -d .git ] || git init -q >/dev/null 2>&1 || exit 0
if git rev-parse HEAD >/dev/null 2>&1 && git diff --quiet && git diff --cached --quiet && \
   [ -z "$(git ls-files --others --exclude-standard)" ]; then
  exit 0
fi
git add -A >/dev/null 2>&1
git -c user.name="Sidekick" -c user.email="sidekick@localhost" \
  commit -q -m "auto-snapshot: session start $(date '+%Y-%m-%d %H:%M')" >/dev/null 2>&1
exit 0
