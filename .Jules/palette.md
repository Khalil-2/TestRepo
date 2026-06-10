## 2026-05-30 - Improving feedback and focus during async-like interactions
**Learning:** Even simulated loading states (800ms) significantly improve the perceived responsiveness of a UI. Crucially, when an element is disabled during this state, it is essential to return focus to it once it becomes interactive again to maintain the user's context, especially for keyboard and screen reader users.
**Action:** Always restore focus to the trigger element after an asynchronous state change completes if that element was disabled or if the context remained on the same page.
