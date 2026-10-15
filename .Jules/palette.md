## 2026-10-15 - Live Feedback on Input Clear Actions
**Learning:** Announcing form resets via an `aria-live` polite announcer when triggered by keybindings or clear buttons provides clear confirmation to screen-reader users.
**Action:** Always route input clearing actions through a helper function that resets state and announces status.