## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-23 - Accessible Character Counter
**Learning:** Implementing a character counter with `aria-describedby` provides essential context for screen reader users, ensuring they are aware of input limits and current status without losing focus.
**Action:** Always link character counters or helper text to their respective inputs using `aria-describedby`.
