# ESHBELIA SARABI Dynamic Website

## Branch
Development is isolated on `dynamic-v1`. The live `main` branch is unchanged until the new version is approved and merged.

## Structure
- `index.html` — page structure and SEO metadata
- `assets/styles.css` — visual identity, responsive layout, mobile rules
- `assets/app.js` — bilingual switching, project search/filter, RFQ interaction
- `data/content.js` — editable company, solutions, projects, contact and process data
- `CNAME` — existing custom domain configuration

## Updating website content
Most routine content changes should be made only in `data/content.js`. This means products, projects, company contacts, regional locations and solution descriptions can be updated without touching the page layout.

## Current dynamic features
- English default with Arabic/English switch
- Responsive desktop/tablet/mobile layout
- Dynamic solution cards
- Searchable/filterable project register
- RFQ email enquiry workflow
- Central company/contact data model
- SEO title, description and canonical URL

## Next recommended CMS step
For secure browser-based editing without GitHub code access, connect a hosted CMS/backend or a published data source. GitHub Pages itself is static hosting, so a secure admin login requires an external authenticated service.
