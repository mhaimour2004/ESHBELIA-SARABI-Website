# Design QA — live frontend restoration

- Reference: `work/live-reference.png` captured from `https://www.eshbeliatrading.com/#/en/index`
- Implementation: `work/implementation-desktop.png` captured from `http://127.0.0.1:4174/index.html`
- Comparison: `work/design-comparison-final.png`
- Viewport: 1280 × 720 for both reference and implementation

## Visual findings and iterations

1. Replaced the white navigation treatment and overlapping dropdowns with the live site's dark-green flat navigation.
2. Restored the original chandelier hero photograph, gold serif company name, divider, headline treatment and two primary actions.
3. Rebuilt the header lockup from the live gold chandelier mark plus a legible company name and descriptor; this removes the undersized logo problem.
4. Matched the reference header/hero spacing, contrast, gold/green palette and desktop proportions. The implementation keeps the live visual character while using direct multi-page links.
5. Added responsive breakpoints: the flat desktop navigation becomes a single controlled menu below 980 px; hero type and actions stack below 620 px with no horizontal overflow.

## Functional checks

- 17 HTML pages checked; all local links and assets resolve.
- Navigation contains Home, About, Solutions, Products, Chandeliers, Projects, Manufacturers and Contact.
- Both WhatsApp links use the required `wa.me` numbers.
- JavaScript syntax checks pass for navigation, homepage and product catalogue scripts.
- Manufacturer page is reachable from the shared navigation.

final result: passed
