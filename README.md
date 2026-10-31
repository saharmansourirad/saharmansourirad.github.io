# Sahar Mansourirad: portfolio

Next.js 14 (App Router, static export) + React + Tailwind CSS. Serif headings (Source Serif 4), rose accent, light/dark toggle that follows the system by default.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # outputs static site to ./out
```

## Edit content
Everything (about, skills, experience, education, publications, teaching, links) is in `data/content.js`.
- Replace the GitHub URL in `profile.github`.
- Add a photo: put `photo.jpg` in `/public` and set `photo: "/photo.jpg"`.
- Rose accent / colors: CSS variables at the top of `app/globals.css`.

## Deploy to GitHub Pages (https://saharmansourirad.github.io)
1. On GitHub, create a repository named exactly **saharmansourirad.github.io** (public).
2. Push this project to its `main` branch:
   ```bash
   git init && git add . && git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/saharmansourirad/saharmansourirad.github.io.git
   git push -u origin main
   ```
3. In the repo go to **Settings → Pages → Source** and choose **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push. The site goes live at https://saharmansourirad.github.io after the first run.

No `basePath` is needed because this is a user site. If you ever deploy to a project repo instead (e.g. `/portfolio`), add `basePath: "/portfolio"` in `next.config.mjs`.
