## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live. Avoiding inline event handlers (like onclick) in favor of addEventListener improves maintainability and security.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2024-04-20 - Simulated Loading State for Better Interaction
**Learning:** Adding a brief simulated loading state to interactive buttons prevents double-clicks and provides immediate visual feedback that the system is processing the request.
**Action:** Implement disabled states and textual feedback (e.g., "Processing...") for asynchronous or simulated actions.
