## 2026-05-30 - [Clipboard Interaction Feedback]
**Learning:** Providing immediate visual confirmation (e.g., "Copied! ✅") alongside an aria-live announcement for clipboard actions significantly improves the experience for all users.
**Action:** Always pair clipboard success states with both visual and programmatic feedback.

## 2026-05-30 - [Robust Clipboard State Management]
**Learning:** Reading success messages (like "Copied!") from the DOM can lead to state corruption if the user clicks a copy button multiple times.
**Action:** Store the source content in a dedicated JavaScript variable and use clearTimeouts to manage transient UI feedback states, ensuring the correct data is always copied and the UI resets reliably.
