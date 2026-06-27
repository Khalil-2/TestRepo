## 2026-05-30 - [Stable Character Counter Association]
**Learning:** When using `aria-describedby` to provide context for an input field (like a character counter), do not apply `aria-hidden="true"` to the referenced element. This ensures that assistive technologies can correctly announce the description. Additionally, resetting the counter state visually and programmatically after form submission is crucial for maintaining a consistent user experience.
**Action:** Always link character counters via `aria-describedby` and ensure they are reset during form cleanup.
