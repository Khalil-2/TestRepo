## 2025-04-02 - [Initial Project Setup]
**Learning:** In a clean-slate repo, a semantic HTML structure with skip links and landmarks is the non-negotiable first step for UX.
**Action:** Always include semantic landmarks and a "Skip to content" link as a baseline.

## 2025-04-11 - [Page Metadata for UX]
**Learning:** Basic page metadata (title and viewport) is essential for browser identification and mobile accessibility, often overlooked in initial setups.
**Action:** Ensure every HTML entry point includes a descriptive title and responsive viewport tag.

## 2025-04-12 - [Asynchronous Interaction Feedback]
**Learning:** Providing immediate visual and ARIA feedback (like `aria-busy` and disabled states) for simulated or real async operations prevents duplicate actions and clarifies the app's state. Crucially, focus must be restored to the triggering element after the operation to maintain accessibility.
**Action:** Always disable buttons and set `aria-busy="true"` during async-like tasks, and explicitly restore focus once complete.
