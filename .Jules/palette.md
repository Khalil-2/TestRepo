## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-04-29 - Loading States for Interactive Feedback
**Learning:** Providing immediate visual feedback (e.g., "Processing...") and disabling interactive elements during asynchronous-style operations prevents duplicate clicks and reduces user uncertainty.
**Action:** Always implement a loading state for interactions that don't result in an immediate UI change to improve perceived responsiveness.
