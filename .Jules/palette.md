## 2024-03-31 - Initial Accessible Landing Page
**Learning:** For a clean-slate project, the primary UX win is an accessible index.html with 'Skip to main content' and aria-live.
**Action:** When initializing a repo, prioritize high-impact accessibility while maintaining a small code footprint (<50 lines).

## 2026-05-30 - Accessible Character Counter Pattern
**Learning:** Real-time character counters should use `aria-live="polite"`. Linking the counter via `aria-describedby` provides context upon focus.
**Action:** Always pair `maxlength` with a live visual counter that is programmatically associated with the input field.
