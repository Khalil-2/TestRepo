## 2024-03-21 - [Holistic Feedback]
**Learning:** UX feedback must be consistent across different user modalities. Providing feedback solely for screen readers (via hidden ARIA-live regions) while leaving sighted users without a visual confirmation creates a fragmented experience. Interactive elements should always provide a visible state change or confirmation.
**Action:** Always ensure that when an action triggers feedback, it is both visually represented in the UI and announced by assistive technologies.
