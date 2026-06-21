## 2026-05-30 - Focus Restoration in Async Interactions
**Learning:** When a button is disabled during an asynchronous operation (like a simulated loading state), it loses focus in most browsers. If the button is re-enabled, focus must be explicitly returned to it to ensure a continuous and predictable experience for keyboard and screen reader users.
**Action:** Always include `element.focus()` after re-enabling a previously focused interactive element following an async state change.
