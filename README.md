# Esperer Global — Static Corporate Website

A responsive, single-page static company website based on the supplied 2024 Esperer Global corporate profile.

## Run locally

No build step is required. Open `index.html` directly, or run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Add the company's gallery images

Put the provided images in `assets/gallery/` and wire them into the `image-slot` elements in `index.html` by replacing the placeholder background blocks with `<img>` tags, or use the `data-label` slots as visual guides.

Recommended filenames:
- gallery-01.jpg — rice production/facility
- gallery-02.jpg — lentil production/facility
- gallery-03.jpg — construction materials
- gallery-04.jpg — construction project
- gallery-05.jpg — facilities/operations

You can also replace the hero and business-card placeholders with company photographs.

## Content basis

The copy and business structure are based on the supplied Esperer Global Corporate Profile (2024), including the business scopes, values, facilities, future plans, clients, five-year targets and contact details. Sensitive identification documents shown in the profile are intentionally not exposed on the public website.

## New homepage messaging
- Headline: “We are Esperer Global, Building Farm to Fork procurement automation.”
- AI description focused on processing data from farmers, transporters and large-scale buyers.
- Impact numbers: 1,087 farmers connected; 6,731 tons of agro commodity delivered.
