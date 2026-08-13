# Palette's Journal - Critical UX Learnings

## 2026-05-30 - Accessible Character Counters
**Learning:** When implementing a character counter, using `aria-describedby` provides a stable association for screen readers, while `aria-live="polite"` ensures updates are announced without interrupting the user's typing flow.
**Action:** Always link counter elements to their inputs using `aria-describedby` and ensure the counter remains visible and programmatically accessible.
