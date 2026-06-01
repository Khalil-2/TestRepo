## 2026-05-30 - [Accessible Character Counters]
**Learning:** When an element is referenced by `aria-describedby` for accessibility context (like a character counter), do not apply `aria-hidden="true"` to it, as this may cause assistive technologies to ignore the description.
**Action:** Always ensure descriptive elements linked via ARIA are discoverable by screen readers.
