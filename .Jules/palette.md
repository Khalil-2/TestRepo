## 2026-03-29 - Skip Link and ARIA-Busy feedback
**Learning:** In a clean-slate repository without a design system, a skip-link must be the first focusable element. Using `aria-busy="true"` along with a descriptive `aria-label` provides a better experience for screen reader users during async operations than just changing the button text.
**Action:** Always ensure the skip-link is functional and visible on focus when no CSS framework is present. Use `aria-busy` to communicate loading states.
