## 2026-05-30 - Real-time Feedback via ARIA-Live
**Learning:** Using `aria-live="polite"` on a character counter provides essential real-time feedback for screen reader users without interrupting their typing flow, especially when paired with `aria-describedby` for initial context.
**Action:** Always link input fields to their respective counters or helper text using `aria-describedby` and ensure status updates are announced via `aria-live`.
