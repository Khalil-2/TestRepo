## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-11 - Simulated Loading State for Better UX
**Learning:** Adding a brief simulated loading state (e.g., 800ms) for asynchronous-style actions manages user expectations and prevents duplicate submissions.
**Action:** Implement a loading state by disabling the trigger button and updating its text during the process.
