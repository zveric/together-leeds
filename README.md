# Together Leeds

A two-page static website built from the Figma design *Together Leeds* written by Isabel Hair. The original designs are her's. I used claude to quickly package them into a Github pages site for her project. 

- `index.html`: support homepage
- `understand.html`: understand hate crime & your rights

It's plain HTML, CSS and a small amount of JavaScript. There's no build step.

## Project layout

```
index.html
understand.html
css/styles.css         design tokens + all styles (responsive)
js/site.js             quick exit + language links (optional enhancement)
assets/brand-mark.svg  logo (exported from Figma)
assets/neighbours.svg  hero illustration (exported from Figma)
assets/icons/*.svg     signpost icons (exported from Figma)
assets/fonts/*.woff2   Inter + Noto Sans Arabic, self-hosted
.nojekyll              tells GitHub Pages to serve files as-is
```

## Run it locally

```bash
python -m http.server 8000
# open http://localhost:8000
```

(Opening the HTML file directly also works, but the fonts only load over http.)

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Together Leeds site from Figma design"
git branch -M main
git remote add origin https://github.com/<your-username>/together-leeds.git
git push -u origin main
```

Then on GitHub, go to **Settings → Pages → Build and deployment**, set **Source: Deploy from a branch**, and choose **Branch: main / (root)**.
After about a minute the site will be live at `https://<your-username>.github.io/together-leeds/`.

## Notes

- **Quick exit** replaces the page with BBC Weather, so the Back button doesn't return here. Pressing Shift three times does the same thing. To change where it goes, edit `SAFE_URL` in `js/site.js`.
- **Language buttons** open the current page through Google Translate. This only works once the site is live on the web.
- Fonts are self-hosted, so the site makes no third-party requests (Google Fonts, analytics and so on). That matters for a support site.
- External links, phone numbers and the council/police form URLs come from the Figma file. Check them before you use the site for real.
