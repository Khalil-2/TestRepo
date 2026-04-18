## 2025-04-16 - [Aria-live Noise on Counters]
**Learning:** Adding `aria-live="polite"` to a character counter that updates on every keystroke creates excessive noise for screen reader users.
**Action:** Use `aria-describedby` to link the counter to the input instead of making it a live region, allowing users to check it when needed without constant interruptions.
## 2026-04-18 - [Semantic Forms for Keyboard Accessibility]
**Learning:** Wrapping interactive elements like inputs and buttons in a `<form>` provides native "Enter" key support for submission, which is a key keyboard accessibility expectation.
**Action:** Always prefer semantic `<form>` elements for interactions involving inputs and buttons to ensure consistent behavior across browsers and assistive technologies.
