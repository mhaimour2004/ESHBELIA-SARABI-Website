# Design QA — Product-first homepage, horizontal menus, mobile product feed

## Evidence

- Source visual truth 1: `C:\Users\MBMH\AppData\Local\Temp\codex-clipboard-e931ba87-b66a-46d6-8f5e-336acb149520.png`
- Source visual truth 2: `C:\Users\MBMH\AppData\Local\Temp\codex-clipboard-44d96360-07b5-4ac7-adf0-a8fb546cba1a.png`
- Desktop implementation: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-09-02_Product_Feed_UI_Update\products-desktop-1365x768.png`
- Mobile product implementation: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-09-02_Product_Feed_UI_Update\products-mobile-390x844.png`
- Mobile project implementation: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-09-02_Product_Feed_UI_Update\projects-mobile-390x844.png`
- Desktop side-by-side comparison: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-09-02_Product_Feed_UI_Update\comparison-desktop-category-rail.jpg`
- Mobile side-by-side comparison: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-09-02_Product_Feed_UI_Update\comparison-mobile-project-rail.jpg`

## Viewport and normalization

- Desktop source: 1304 × 603 pixels. Desktop implementation: 1365 × 768 pixels at a 1365 × 768 CSS viewport and device density 1.
- Mobile source: 475 × 544 pixels. Mobile implementation: 390 × 844 pixels at a 390 × 844 CSS viewport and device density 1.
- The references communicate the interaction and layout target rather than an exact branded page. Comparisons were normalized into equal-size labelled panels without stretching; each image was proportionally contained.
- State: default product catalogue, default project list, English, no search query, `All` category active.

## Full-view comparison evidence

- Desktop: the implementation matches the reference's important structure—a single compact classification row immediately above a dense product grid. The ESHBELIA green/gold identity is intentionally preserved instead of copying the reference retailer's palette.
- Mobile projects: the former wrapped multi-row filter block is replaced by a single scrollable row, matching the direction marked in the supplied reference while preserving the project cards below it.
- Mobile products: the product catalogue is a dedicated vertical feed with one complete product card per scroll position, retaining product image, ID, details, price request, basket and WhatsApp actions.

## Focused comparison evidence

- Horizontal product menu: one rendered row; client width 345 px and scroll width 5,019 px on mobile. Horizontal test moved the rail to `scrollLeft: 561` and revealed later categories.
- Horizontal project menu: one rendered row; client width 345 px and scroll width 2,284 px on mobile.
- Vertical feed: `overflow-y: auto` and `scroll-snap-type: y mandatory`; one 580 px gesture moved from `ESH-FL-0002` to `ESH-FL-0003` and settled at `scrollTop: 644`.
- Focused crops were not required beyond the labelled side-by-side comparisons because the filter labels, product controls and rail behavior remain readable in the full captures.

## Required fidelity surfaces

- Fonts and typography: existing ESHBELIA type hierarchy and weights are preserved; pills remain readable without wrapping or truncating inside each control.
- Spacing and layout rhythm: category controls use one compact row; mobile product cards occupy one feed viewport; desktop retains six dense columns. No unintended main-content side offset remains.
- Colors and visual tokens: final green `#145845` / `#0e503e` and gold `#dba62f` / `#e2b84f` tokens are retained for active states, scrollbars and actions.
- Image quality and asset fidelity: existing product assets are used with `object-fit: contain`; no product image was stretched, regenerated or replaced for this UI change.
- Copy and content: product names, ESHBELIA IDs, technical details, classifications, project names and commercial actions are unchanged.

## Findings

- No remaining P0, P1 or P2 mismatch in the requested product-first routing, horizontal classification menus or mobile vertical product feed.
- P3: the mobile projects hero remains intentionally more descriptive than the compact reference crop; this is inherited content outside the requested filter-menu change.

## Comparison history

1. Initial mobile product capture showed the floating basket overlapping the product action area and the WhatsApp action falling below the viewport. Classified P2.
2. Fix: hid the redundant floating basket on mobile, reduced feed height to the actual visible space, and forced basket/WhatsApp actions into two visible columns.
3. Post-fix evidence: `products-mobile-390x844.png` shows both actions visible at the bottom of the first product card; measured WhatsApp bounds are 803–843 px within the 844 px viewport.

## Interaction and runtime checks

- `/` redirects to `/products.html`.
- Category swipe/scroll works horizontally on desktop and mobile.
- Category selection clears the search field, resets the feed to the top and updates the count (`Solar Floodlights`: 7 products).
- Vertical feed scroll advances to the next product.
- Product dialog opens; Next changed `ESH-FL-0002` to `ESH-FL-0003`.
- Browser console: zero errors and zero warnings after primary interactions.

## Implementation checklist

- [x] Product catalogue is the root entry experience.
- [x] Product categories stay in one horizontally scrollable row.
- [x] Project types stay in one horizontally scrollable row.
- [x] Mobile products scroll vertically one product at a time.
- [x] Existing product details and actions remain available.
- [x] Desktop and mobile behavior verified.

## Menu repair verification — 2026-09-02

- Reported source: `C:\Users\MBMH\AppData\Local\Temp\codex-clipboard-40c54a61-7e58-48d4-b5ff-b92e2bdc9c71.png`.
- Repaired desktop capture: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-09-02_Product_Menu_Fix\menu-controls-desktop-1365x768.png`.
- Root cause: pointer capture on the complete category rail intercepted ordinary button clicks, so visible categories could appear unresponsive.
- Fix: category buttons now receive direct clicks; drag capture is limited to empty rail space. Explicit Previous and Next controls were added while wheel, touch and scrollbar movement remain available.
- Desktop Next test: category rail moved from `scrollLeft: 0` to `scrollLeft: 804` (maximum 3,989).
- Desktop category test: `Street Lighting` became active, the result count changed to 12, and the first product changed to `SEVILLA · Street Lighting`.
- Desktop Products navigation test: submenu opened and exposed Product Catalogue, Chandeliers, Cables & Wires, Datasheet Downloads and Basket.
- Mobile navigation test: Menu opened `#siteNav`; category Next moved the rail from `scrollLeft: 0` to 308 (maximum 4,786); `Bulkhead Lights` became active with 47 results.
- Cache-busting was advanced for the repaired stylesheet and product script so the offline/hosted copy loads the fix rather than an older cached menu.
- No remaining P0, P1 or P2 issue in the top navigation or product classification menu.

## Persistent menu verification — 2026-09-02

- Reported source: `C:\Users\MBMH\AppData\Local\Temp\codex-clipboard-df547292-900f-4642-8762-8ab3db7f44fc.png`.
- Scrolled implementation: `C:\Users\MBMH\Documents\Codex\2026-08-27\referenced-chatgpt-conversation-this-is-an-3\outputs\2026-09-02_Sticky_Product_Menu_Fix\sticky-menu-after-scroll-desktop.png`.
- Root cause: the earlier `inset: auto !important` declaration overrode the non-important sticky `top` value, so the category row computed to `top: auto` and scrolled away.
- Fix: sticky offsets are now explicit and important, with responsive spacing matched to the actual header and search-toolbar heights.
- Desktop at `scrollY: 1,968`: header remains at 0–101 px, search at 101–156.34 px and the category row at 157–227.22 px.
- Desktop interaction while pinned: Next scroll and `Street Lighting` selection worked; the row remained visible at 157 px and the count updated to 12 products.
- Mobile product-feed test: header bottom 73 px, search 73–162.61 px and categories 163–229.38 px. After the feed moved to `ESH-FL-0003`, the category row remained visible at 163 px.
- Browser console: zero errors and zero warnings.
- No remaining P0, P1 or P2 issue in persistent product navigation.

## Product-first entry with preserved Home page — 2026-09-02

- `index.html` remains the website-address entry and redirects to `products.html` as requested.
- The complete former homepage is restored as `home.html`; it was not reduced or replaced.
- The main Home navigation link and ESHBELIA SARABI logo now open `home.html` rather than returning through the product redirect.
- Homepage runtime check: Home active state correct; 10 solution classifications, 36 chandelier records and 48 project records rendered.
- Cross-page links formerly pointing to `index.html` or its section anchors now point to `home.html` and the corresponding Home sections.
- Browser verification: `/` opened `/products.html`; selecting Home opened `/home.html` with the full hero heading “Lighting & cable solutions built around the projects —”.
- Browser console: zero errors and zero warnings.
- No remaining P0, P1 or P2 routing issue between the product-first entry and the preserved Home page.

final result: passed
