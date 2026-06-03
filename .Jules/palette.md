## 2026-03-10 - [Focus management after async feedback]
**Learning:** Returning focus to the trigger element after an asynchronous operation (like a simulated loading state) ensures keyboard and screen reader users maintain their context and can continue their workflow seamlessly.
**Action:** Always include `.focus()` on the original interactive element once a loading state completes and the UI updates.
