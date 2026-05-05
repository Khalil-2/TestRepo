## 2026-05-05 - Accessible Character Counter
**Learning:** For text input fields with a length limit, including a visual character counter (e.g., '0/20') linked via `aria-describedby` provides essential context without the accessibility 'noise' of `aria-live` announcements on every keystroke.
**Action:** Use `aria-describedby` to link input fields with their character counters for better accessibility.
