## 2025-05-14 - Interactive Feedback with ARIA-Live
**Learning:** Users often feel uncertain when clicking a button that doesn't provide immediate visual or textual feedback, especially for non-navigation actions. Using `aria-live="polite"` ensures that screen reader users receive this feedback without being interrupted, matching the visual experience.
**Action:** Always include immediate visual feedback (like state changes) and accessible announcements (via `aria-live`) for interactive elements that trigger asynchronous or background processes.
