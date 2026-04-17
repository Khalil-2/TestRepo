## 2025-04-16 - [Aria-live Noise on Counters]
**Learning:** Adding `aria-live="polite"` to a character counter that updates on every keystroke creates excessive noise for screen reader users.
**Action:** Use `aria-describedby` to link the counter to the input instead of making it a live region, allowing users to check it when needed without constant interruptions.
