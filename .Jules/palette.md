## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-30 - Interactive Feedback and Loading States
**Learning:** Providing immediate visual feedback for asynchronous actions (even simulated ones) significantly improves perceived performance and reduces user uncertainty. A short delay (800ms) with a "Loading..." state and a disabled button prevents accidental double-submissions and keeps the user informed.
**Action:** Always include loading states for interactive elements that trigger asynchronous feedback or state changes.
