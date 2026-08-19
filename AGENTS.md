# AGENTS.md

Static single-page portfolio (no framework, no build step). Preview by opening `index.html` directly or serving the folder statically (e.g. `python -m http.server`). There are no tests, linters, or package managers.

## Layout

- All content lives in `index.html`; sections are plain `<section>` blocks with hand-numbered titles (`001`–`007`).
- `assets/css/`: `style.css` base, `animation.css` scroll/typing effects, `responsive.css` mobile.
- `assets/js/`: plain global scripts (no modules), loaded in this order at end of `<body>`: `script.js`, `typing.js`, `scroll.js`.

## Gotchas

- **Reveal-on-scroll is opt-in and easy to break.** `animation.css` sets `.section-title, .skill-card, .project-card, .timeline-item, .certificate-card, .stat-card` to `opacity:0`; `script.js` `revealElement()` adds `.show` to that same selector list. If you add a new card/section class, register it in BOTH files or the content stays invisible.
- **Icons/fonts are CDN-only** (Font Awesome, Devicon, Google Fonts). Offline preview renders without icons.
- Scripts run immediately and assume their DOM elements exist — keep the end-of-body load order.
- Certificates are local PDFs under `assets/images/certificates/`, referenced by hardcoded links in `index.html`.
- Project 1 ("Financial Forecast Dashboard") still links to placeholder `github.com/USERNAME/ForecastDashboard`.
- README advertises a "Dark Mode" feature, but no dark-mode CSS or toggle exists in the codebase.

## Conventions

- Content mixes English (hero/section titles) and Indonesian (project/certificate descriptions); match surrounding text.
- Commit messages are in Indonesian (e.g. "Merevisi link github").
- Update hand-written section numbers (`001`–`007`) in `index.html` when sections change.
