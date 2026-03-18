## 2024-03-18 - [Accessibility: Non-disruptive Skip Links]
**Learning:** A 'Skip to main content' link must be positioned absolutely even when visible to prevent layout shifts. Mouse users should not see it, and keyboard users should see it pop into view over existing content.
**Action:** Use absolute positioning with high z-index and top/left offsets for focused skip links.
