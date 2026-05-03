## 2026-05-03 - Accessible Character Counters
**Learning:** For text input fields with a length limit, including a visual character counter (e.g., '0/20') linked via `aria-describedby` provides essential context to screen reader users without the accessibility 'noise' of `aria-live` announcements on every keystroke.
**Action:** Use `aria-describedby` to associate character counters with their respective inputs for a cleaner and more informative screen reader experience.
