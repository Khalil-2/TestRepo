## 2026-05-30 - Accessible Character Counter Pattern
**Learning:** `aria-live="polite"` on real-time character counters is noisy. Use `aria-describedby` for association and reserve `aria-live` for final results.
**Action:** Link counters via `aria-describedby`; use `aria-live` only for high-impact feedback.
