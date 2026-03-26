## 2024-03-26 - [Accessible "Skip to Main Content" Link]
**Learning:** A "Skip to main content" link is a critical first focusable element for keyboard and screen reader users. It should be visually hidden but become visible on focus, and its target should have `tabindex="-1"` to ensure programmatic focus is handled correctly.
**Action:** Always include this pattern in new projects to meet WCAG 2.4.1 (Bypass Blocks).
