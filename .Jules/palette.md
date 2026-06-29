## 2026-05-30 - [Clipboard Feedback Accessibility]
**Learning:** For actions like "Copy to Clipboard", providing immediate visual feedback (changing button text to "Copied!") is helpful, but ensure the resulting change is also accessible or follows an expected pattern. In this case, the visual change is sufficient for most users, but for screen readers, the focused element changing its label is generally announced.
**Action:** Use transient button text changes for immediate feedback on simple actions.

## 2026-05-30 - [Interactive State Feedback]
**Learning:** Explicit hover and focus states (using `:focus-visible`) significantly improve keyboard discoverability and interaction confidence. Combining `filter: brightness()` for hover and a high-contrast outline for focus-visible provides a clean, consistent UI across browsers.
**Action:** Always include `:focus-visible` styles and hover feedback for interactive elements.
