## 2026-08-04 - [Accessible Progress Bar ARIA Attributes and Zero-Width Opacity]
**Learning:** Progress bars need `role="progressbar"` and dynamic ARIA attributes, and hiding them when empty (`opacity: 0`) prevents subpixel artifacts.
**Action:** Include ARIA progressbar attributes and toggle opacity when character count is zero.
