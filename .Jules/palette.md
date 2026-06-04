# Palette UX Journal

## 2026-05-30 - [Accessible Character Counters]
**Learning:** Using `aria-describedby` to link a character counter to an input provides context, but adding `aria-live="polite"` to the counter itself ensures real-time updates are announced as the user types.
**Action:** Always pair `aria-describedby` with `aria-live` for dynamic input decorations like counters or validation hints.
