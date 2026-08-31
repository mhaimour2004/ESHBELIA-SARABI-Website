# Design QA — Home Hero at 45% Scale

## Evidence

- Source visual truth: `C:\Users\MBMH\Downloads\Codex Image Aug 31, 2026, 07_52_15 PM.jpg`
- Annotated desktop reference: `C:\Users\MBMH\AppData\Local\Temp\codex-clipboard-d42f04da-11a6-407e-b123-26c109407b46.png`
- Final mobile implementation: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-08-31_hero-45-percent-qa\implementation-mobile-45-percent-final-v2.png`
- Final desktop implementation: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-08-31_hero-45-percent-qa\implementation-desktop-45-percent-final-v2.png`
- Side-by-side comparison: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-08-31_hero-45-percent-qa\comparison-mobile-side-by-side.png`
- Requested browser viewport: 390 × 844 CSS px for mobile and 1360 × 768 CSS px for desktop.
- Captured image pixels: source 375 × 769; mobile implementation 375 × 769; desktop implementation 1345 × 760.
- Density normalization: source and final mobile capture have identical pixel dimensions; no density conversion was required for the final comparison.
- State: English home page, menu closed, page at top.

## Full-view comparison

The final mobile implementation keeps the same content, hierarchy, background image, brand colors and actions while reducing the hero from approximately 448 px in the supplied previous-state screenshot to 205 px. This is approximately 46% of the supplied visual height. The first content section now begins immediately below the compact hero.

The final desktop hero measures approximately 208 px versus approximately 464 px in the annotated previous state, which is approximately 45% of the previous height.

## Focused-region comparison

The hero itself is fully legible in the side-by-side full capture, so an additional crop was not needed. The comparison clearly shows the brand name, descriptor, headline, supporting copy and both CTAs at the requested compact scale.

## Required fidelity surfaces

- Fonts and typography: Existing brand typography is preserved. Brand name is 24.8 px on mobile and 28 px on desktop; headline is 16.8 px on mobile and 18.88 px on desktop. Text remains readable and does not overflow.
- Spacing and layout rhythm: Hero height is 205 px mobile and 208 px desktop. Vertical gaps, border rule, copy and CTA spacing were reduced proportionally. No content overflow was detected.
- Colors and visual tokens: Existing dark green, gold, white and hero overlay are unchanged.
- Image quality and asset fidelity: Existing hero photograph is unchanged. The previously empty `live-mark.png` was replaced with a clean transparent gold chandelier mark derived from the supplied company logo, and the browser reports a valid 600 × 566 image.
- Copy and content: No headline, description, CTA or navigation copy was removed or rewritten.

## Comparison history

### Iteration 1

- P1: Hero remained materially larger than the requested 45% scale.
- Fix: Reduced hero typography, vertical spacing, CTA dimensions and overall minimum height.
- P1: Header logo source was a zero-byte file and displayed as a broken image for the user.
- Fix: Rebuilt the mark from the supplied company logo, removed its background and restored it as a valid transparent asset.

### Iteration 2

- P2: Mobile reached the intended compact density, but desktop content still forced the hero to 255 px.
- Fix: Reduced desktop brand, headline, supporting text, gaps and button measurements proportionally.
- Post-fix evidence: Mobile hero 205 px; desktop hero 208 px; no overflow; no browser console errors.

## Interaction checks

- Request a Quote and Explore Products remain visible and actionable.
- Responsive header and menu remain present.
- Logo loads successfully.
- Browser console errors checked: none.

## Remaining findings

No actionable P0, P1 or P2 differences remain against the user's explicit 45% size requirement.

final result: passed
