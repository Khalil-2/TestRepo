## 2026-05-16 - Simulated Loading State for Feedback
**Learning:** Even brief asynchronous actions (like form submissions or state changes) benefit from a simulated loading state. It manages user expectations and prevents duplicate submissions by providing immediate visual confirmation that the action is being processed.
**Action:** Implement a short delay (e.g., 800ms) with a "Loading..." state and disabled button for primary interactive elements.
