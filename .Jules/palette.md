## 2026-05-30 - [Accessible Real-time Character Counters]
**Learning:** When implementing character counters, using `aria-describedby` provides a stable association for screen readers. Avoiding `aria-live` for every keystroke prevents "announcement noise," making the experience more pleasant for assistive technology users.
**Action:** Always link the input to the counter via `aria-describedby` and ensure the counter is explicitly reset when the form clears.
