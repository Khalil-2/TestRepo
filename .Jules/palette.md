## 2025-04-10 - [Interactive Feedback and Focus Management]
**Learning:** When a button is disabled during a process (e.g., "Loading..."), browsers may lose focus on it. Explicitly restoring focus and using `aria-busy` ensures a smoother experience for keyboard and screen reader users.
**Action:** Always restore focus after a button is re-enabled and use `aria-busy` during long-running tasks.
