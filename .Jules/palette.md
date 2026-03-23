## 2025-03-23 - Accessible Skip-to-Content Pattern
**Learning:** For a clean-slate repository, implementing a 'Skip to main content' link as the first focusable element is crucial for keyboard accessibility. Using absolute positioning (`left: -10000px`) to hide it until focused prevents layout shifts while ensuring it's discoverable.
**Action:** Always include a skip link targeting the `<main>` element with `tabindex="-1"` in initial page structures.
