## 2026-05-30 - Real-time Character Counter and Form Feedback
**Learning:** Combining `aria-describedby` for context and `aria-live="polite"` for real-time updates ensures that screen reader users are kept informed of their input progress without interrupting their workflow. Resetting auxiliary status displays (like character counters) after form submission is crucial for maintaining programmatic consistency.
**Action:** Always link character counters to their inputs using `aria-describedby` and ensure they are updated during both input and form reset events.
