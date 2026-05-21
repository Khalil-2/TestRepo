## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline JS in scripts improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-21 - Simulated Loading State for Feedback
**Learning:** Implementing a brief simulated loading state (e.g., 800ms) manage user expectations for asynchronous-style actions and prevents duplicate submissions. Paired with aria-live, it ensures both visual and screen reader users receive clear feedback.
**Action:** Use disabled states and transitional text (like 'Loading...') during async interactions to provide immediate feedback.
