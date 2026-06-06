## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-30 - Accessible Character Counter & Loading States
**Learning:** Using `aria-describedby` paired with `aria-live="polite"` for character counters provides real-time accessibility without being intrusive.
**Action:** Always link counters to inputs via `aria-describedby` and ensure `aria-live` is present.
