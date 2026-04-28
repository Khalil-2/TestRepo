## 2026-04-28 - Accessible Clipboard Feedback
**Learning:** When implementing 'Copy to Clipboard', providing immediate visual feedback ('Copied! ✅') alongside a temporary `aria-label` ensures all users receive confirmation of the action. Using the `hidden` attribute manages UI state without custom CSS.
**Action:** Always pair visual state changes with ARIA updates for asynchronous user actions.
