## 2026-05-30 - Simulated loading states for async-style actions
**Learning:** Adding a brief simulated loading state (e.g., 800ms) for interactive buttons manages user expectations for "work" being done and prevents duplicate submissions while providing clear visual feedback.
**Action:** Implement a disabled state with "Loading..." text and ensure focus returns to the trigger element after the action completes to maintain keyboard context.
