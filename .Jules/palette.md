## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-22 - Simulated Loading Feedback
**Learning:** Implementing a brief (800ms) simulated loading state manages user expectations for asynchronous-style actions and prevents duplicate submissions. Paired with clearing the `aria-live` region, it ensures screen reader users receive a clear, updated announcement once the action completes.
**Action:** Use disabled states and transitional text (e.g., 'Loading...') for interactive buttons to provide immediate tactile feedback, even for fast or simulated operations.
