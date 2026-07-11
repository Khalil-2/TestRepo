## 2026-07-11 - [Assertive Live Region for Confirmation]
**Learning:** For transient feedback like 'Copied to clipboard', a polite live region might be missed if other updates occur. Programmatically creating an assertive live region ensures immediate announcement without cluttering the persistent DOM.
**Action:** Use temporary assertive aria-live elements for transient status confirmations.
