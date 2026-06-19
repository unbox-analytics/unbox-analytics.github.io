Editing guide

- Main layout: `_layouts/default.html` — contains the header, navigation, and includes the editable sections.
- Edit content: `_includes/sections/` — edit `home.html`, `portfolio.html`, `articles.html`, `about.html`, `contact.html` to change page content.
- Styles: `assets/css/main.css` — all site styles live here. Change colors and fonts using CSS variables at the top of the file.
  - Example variables: `--color-accent`, `--color-brand`, `--font-sans`, `--font-heading`.
- Scripts: `assets/js/main.js` — site behavior (mobile nav, active section highlighting).

Local preview

1. Install ruby and bundler (if not installed).
2. From the site root:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` to preview.

Notes

- The site is now single-page: navigation links point to anchors (e.g., `#portfolio`).
- To add another editable section, create a new include in `_includes/sections/` and add an include to `_layouts/default.html`.
