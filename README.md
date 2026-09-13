# Mahrane AMOR — Portfolio

A single-page personal portfolio built with plain HTML, CSS and JavaScript. No build step,
no dependencies, no framework — open `index.html` and it runs.

## Structure

```
index.html          all page content (edit your text here)
styles/main.css     design tokens + all styling
js/script.js        theme toggle, mobile nav, scroll spy, counters, reveal animations
assets/             put Mahrane_AMOR_CV.pdf here for the "Download CV" button
images/             optional project screenshots
```

## Run locally

```bash
npx serve .
# or
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Editing

Everything is in `index.html`, grouped by clearly-labelled section comments:
`Navigation`, `Hero`, `Projects`, `Experience`, `Skills`, `Education`,
`Certifications`, `Activities`, `Contact`, `Footer`.

**Change the accent colour:** edit `--accent` and `--accent-2` in `styles/main.css`
(there are three blocks: light, `[data-theme="dark"]`, and the `prefers-color-scheme`
fallback — update the dark ones too).

**Add a project:** copy an existing `<article class="project-card reveal">` block and
change the title, description, bullet points and tags.

## Still to do

- [ ] Drop your CV PDF at `assets/Mahrane_AMOR_CV.pdf`
- [x] GitHub profile link (github.com/MahranAmor)
- [x] Repo links for 5G Anomaly Detection, Road Accident Severity, GlioScan, Tayara Scraper
- [ ] Repo link for Breast Cancer Detection (no matching repo on the profile yet)
- [ ] Optional: live demo links for GlioScan's FastAPI UI
- [x] Project cover art in `images/` (generated SVGs - see below)

## Project cover images

Each project card shows the cover file below if it exists in `images/`, and
falls back to the gradient + icon header if the file is missing. The shipped
covers are hand-written SVGs, so they stay sharp at any size and cost a few KB
each. Replace any of them with a real screenshot by dropping in a file of the
same name:

| File | Card |
|---|---|
| `images/youri.svg` | YouRi - Agentic RAG Medical Assistant |
| `images/glioscan.svg` | GlioScan - 3D Brain Tumor Segmentation |
| `images/5g-monitoring.svg` | Real-Time Anomaly Detection in 5G Networks |
| `images/breast-cancer.svg` | Breast Cancer Detection with CNNs |
| `images/road-accident.svg` | Prediction of Road Accident Severity |
| `images/tayara-scraper.svg` | Tayara.tn Vehicle Scraper |

Landscape images work best (roughly 2:1, at least 800px wide). `.png` and
`.jpg` work too - just change the extension in that card's `<img src>`.

## Technology logos

Tag pills carry real brand marks, vendored as SVGs in `images/icons/` (~147 KB
for 38 logos) rather than hot-linked, so the site has no third-party runtime
dependency. Sources: [Simple Icons](https://simpleicons.org) (CC0) and
[Devicon](https://devicon.dev) (MIT) for marks Simple Icons has retired.

The label -> slug mapping lives in the `has-logo` tag markup in `index.html`.
Tags without a real logo (RAG, MLOps, CNN, ETL, Deep Learning ...) stay as plain
text pills by design. To add a logo to one, drop `images/icons/<slug>.svg` in and
change that tag to:

```html
<span class="tag has-logo"><img class="tag-logo" src="images/icons/<slug>.svg"
      alt="" aria-hidden="true" loading="lazy" onerror="this.remove()">Label</span>
```

A few marks are stored in a lightened tone (GitHub, Flask, Next.js, Kafka,
LangChain, pandas, NumPy, OpenAI) because their true brand colour is near-black
and would disappear against the dark theme.

## Deploy to GitHub Pages

1. Create a repo on GitHub (e.g. `portfolio`).
2. Push this folder:

   ```bash
   git remote add origin https://github.com/<username>/portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / `(root)`**.
4. The site goes live at `https://<username>.github.io/portfolio/` within a minute or two.

To use the shorter `https://<username>.github.io/` URL, name the repo `<username>.github.io`.
