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
- [ ] Optional: add project screenshots to `images/` and swap in `<img>` for the gradient headers

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
