## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-20 - Simulated Loading Feedback
**Learning:** Providing immediate visual feedback via a 'Loading...' state for asynchronous-style actions prevents duplicate clicks and manages user expectations.
**Action:** Use a brief (800ms) simulated loading state and disable trigger buttons to improve perceived performance and prevent race conditions.
