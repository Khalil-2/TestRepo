# Palette's Journal - UX & Accessibility Learnings

## 2026-03-10 - [Character Counter Accessibility]
**Learning:** Using `aria-live="polite"` on a real-time character counter is excessively noisy for screen reader users. A better pattern is to use `aria-describedby` for a stable association and only announce significant milestones (like reaching the limit) or let the user check the status manually.
**Action:** Use `aria-describedby` to link inputs to their character counters and avoid putting `aria-live` directly on the counter text.
