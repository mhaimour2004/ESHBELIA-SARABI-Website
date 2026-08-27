# ESHBELIA SARABI Dynamic Website

## Main pages
- `index.html` - home and classification index
- `about.html` - company profile
- `services.html` - services and project workflow
- `products.html` - searchable classified product register
- `projects.html` - searchable project references
- `contact.html` - validated RFQ form and WhatsApp contacts

## Deployment

### GitHub Pages
Publish the `dynamic-v1` branch from **Repository Settings → Pages**. Keep the included `CNAME` file when the domain should point to GitHub Pages. All links and assets use relative paths.

### cPanel
Upload the contents of this folder directly into `public_html`. The static site works without a build step. GitHub Pages and cPanel are separate hosting services; use DNS to choose the public host. A server-side form handler can be added on cPanel later if required.

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
