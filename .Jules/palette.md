## 2026-05-07 - Copy to Clipboard Feedback
**Learning:** For asynchronous interactions like 'Copy to Clipboard', providing both visual confirmation (changing button text) and accessible confirmation (via aria-live) significantly improves the user's confidence that the action succeeded.
**Action:** Always pair a visual state change with an aria-live announcement for off-screen/system-level results like clipboard operations.
