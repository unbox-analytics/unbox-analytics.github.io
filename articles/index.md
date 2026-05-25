---
layout: default
title: Articles
permalink: /articles/
---

<section class="portfolio-hero">
  <div>
    <p class="eyebrow">Articles</p>
    <h1>Data insights and practical case studies</h1>
    <p class="hero-copy">Explore articles on analytics best practices, quick case studies, and data insights to help you make better business decisions with the tools you already use.</p>
  </div>
</section>

<div class="articles-grid">
  <article class="article-card">
    <span class="article-tag">Getting Started</span>
    <h2>Building Your First Excel Analytics Workflow</h2>
    <p>A step-by-step guide to creating a reliable data pipeline in Excel without complex formulas. Learn how to structure data, validate inputs, and automate reporting in ways that scale with your business.</p>
    <p class="article-date">Coming soon</p>
  </article>

  <article class="article-card">
    <span class="article-tag">Power Query</span>
    <h2>5 Power Query Patterns That Save Hours Each Week</h2>
    <p>Discover the most effective Power Query techniques for cleaning and transforming data. These patterns handle common data issues automatically and work across multiple Excel workbooks.</p>
    <p class="article-date">Coming soon</p>
  </article>

  <article class="article-card">
    <span class="article-tag">Dashboard Design</span>
    <h2>Creating Dashboards That Actually Get Used</h2>
    <p>Why do some dashboards collect dust? Learn how to design dashboards that answer the questions your team actually asks, with the right level of detail and visual hierarchy.</p>
    <p class="article-date">Coming soon</p>
  </article>

  <article class="article-card">
    <span class="article-tag">SQL Basics</span>
    <h2>SQL Queries for Business Analysts</h2>
    <p>A practical introduction to SQL for people who work with data but don't consider themselves developers. Query multiple tables, aggregate data, and uncover insights without memorizing syntax.</p>
    <p class="article-date">Coming soon</p>
  </article>
</div>

<style>
.articles-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    margin: 32px 0;
}

.article-card {
    background: linear-gradient(135deg, #fafaf8 0%, #ffffff 100%);
    border: 2px solid #e8ddd2;
    border-radius: 8px;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.article-card:hover {
    border-color: #d4a574;
    box-shadow: 0 8px 24px rgba(212, 165, 116, 0.12);
    transform: translateY(-4px);
}

.article-tag {
    display: inline-block;
    background: #f0ebe3;
    color: #4a9b7f;
    padding: 6px 12px;
    border-radius: 4px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    width: fit-content;
}

.article-card h2 {
    margin: 0;
    font-size: 1.35rem;
    color: #1b3a52;
    line-height: 1.3;
}

.article-card p {
    margin: 0;
    color: #4a5f75;
    font-size: 0.95rem;
    line-height: 1.6;
}

.article-date {
    margin-top: auto;
    font-size: 0.85rem !important;
    color: #8b9db0;
    font-style: italic;
}

@media (max-width: 768px) {
    .articles-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .article-card {
        padding: 20px;
    }

    .article-card h2 {
        font-size: 1.15rem;
    }
}
</style>
