Editing guide

- Layout: `_layouts/default.html` — header, navigation, page sections, and page content wrapper.
- Sections: `_includes/sections/*.html` — render section structure and data-driven page components.
- Content blocks: `_includes/sections_md/*.md` — edit section text in plain Markdown.
- Projects: `_data/projects.yml` — data for portfolio cards.
- Tech categories: `_data/tech_categories.yml` — data for tool / platform groups.
- Articles: `_data/articles.yml` — data for article cards.
- Styles: `assets/css/main.css` — all site styling and variables.
- Scripts: `assets/js/main.js` — mobile navigation and active section highlighting.

Local preview

1. Install Ruby and Bundler if needed.
2. From the site root:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` to preview.

Notes

- This is a single-page site with anchor navigation.
- To edit the home, portfolio, articles, about, or contact content, update the Markdown files in `_includes/sections_md/`.
- To add a new project card, add an entry to `_data/projects.yml`.
- To add a new article card, add an entry to `_data/articles.yml`.
