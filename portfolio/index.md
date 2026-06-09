---
layout: default
title: Portfolio
permalink: /portfolio/
---

<section class="portfolio-hero">
  <div>
    <p class="eyebrow">Portfolio</p>
    <h1>Practical analytics projects designed to move businesses forward</h1>
    <p class="hero-copy">Explore curated project summaries that showcase data transformation, reporting automation, and dashboard-driven insights—all built with the same focus on clarity, speed, and business value.</p>
  </div>
</section>

<div class="projects-grid">
  <article class="project-card">
    <div class="project-copy">
      <span class="project-tag">Ecommerce Analytics</span>
      <h2>Revenue growth through cleaner data</h2>
      <p>Delivered a cross-platform analytics workflow that brought sales, customer, and inventory data into one reliable reporting source with faster refresh cycles and better decision visibility.</p>
      <ul>
        <li>Data cleaning across CSV, Excel, and SQL sources</li>
        <li>Automated weekly sales reports</li>
        <li>Revenue insights surfaced in dashboard visuals</li>
      </ul>
    </div>
    <div class="project-images">
      <img src="{{ '/Assets/project-1a.svg' | relative_url }}" alt="Ecommerce analytics dashboard" />
      <img src="{{ '/Assets/project-1b.svg' | relative_url }}" alt="Ecommerce data workflow" />
    </div>
  </article>

  <article class="project-card">
    <div class="project-copy">
      <span class="project-tag">Process Optimization</span>
      <h2>Faster reporting with automated workflows</h2>
      <p>Created templates and process improvements that reduced manual report preparation time, improved data accuracy, and gave the leadership team a single view of operational performance.</p>
      <ul>
        <li>Power Query automation</li>
        <li>Error-resistant validation checks</li>
        <li>Reusable reporting templates</li>
      </ul>
    </div>
    <div class="project-images">
      <img src="{{ '/Assets/project-2a.svg' | relative_url }}" alt="Process optimization dashboard" />
      <img src="{{ '/Assets/project-2b.svg' | relative_url }}" alt="Automated workflow example" />
    </div>
  </article>

  <article class="project-card">
    <div class="project-copy">
      <span class="project-tag">Dashboard Development</span>
      <h2>Actionable executive views for decision makers</h2>
      <p>Designed dashboard summaries that turn complex KPIs into simple, actionable information so stakeholders can quickly understand performance and take the next step.</p>
      <ul>
        <li>Clear KPI storytelling</li>
        <li>Executive-ready visuals</li>
        <li>Flexible filtering for business teams</li>
      </ul>
    </div>
    <div class="project-images">
      <img src="{{ '/Assets/project-2b.svg' | relative_url }}" alt="Dashboard project sample" />
      <img src="{{ '/Assets/project-1a.svg' | relative_url }}" alt="Executive metrics overview" />
    </div>
  </article>
</div>


<hr />

<h2 style="color: #d4a574;">📂 Featured Projects</h2>

<p>🔗 <strong><a href="https://github.com/unbox-analytics/ipl_player_auction_analysis">IPL Players auction analysis</a></strong></p>
<p>Explore data cleaning, analysis, and visualization projects for real-world business scenarios.</p>

<p>🔗 <strong><a href="https://github.com/unbox-analytics/ecommerce">Ecommerce Data Analytics</a></strong></p>
<p>Explore data cleaning, analysis, and visualization projects for real-world business scenarios.</p>

<hr />

<style>
.portfolio-hero {
  padding: 28px 0 18px;
  border-bottom: 1px solid #f0ebe3;
  margin-bottom: 32px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #4a9b7f;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.82rem;
}

.portfolio-hero h1 {
  margin: 16px 0 12px;
  line-height: 1.05;
  color: #1b3a52;
  font-size: clamp(2rem, 4vw, 3rem);
  max-width: 820px;
}

.portfolio-hero .hero-copy {
  max-width: 760px;
  color: #4a5f75;
  font-size: 1.05rem;
  line-height: 1.75;
}

.projects-grid {
  display: grid;
  gap: 32px;
}

.project-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
  background: linear-gradient(180deg, #ffffff 0%, #fafaf8 100%);
  border: 1px solid #f0ebe3;
  border-radius: 22px;
  padding: 28px;
  box-shadow: 0 18px 42px rgba(18, 35, 44, 0.06);
}

.project-tag {
  display: inline-block;
  margin-bottom: 12px;
  color: #4a9b7f;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.78rem;
}

.project-card h2 {
  margin: 0 0 14px;
  color: #1b3a52;
  font-size: 1.45rem;
}

.project-card p {
  margin: 0 0 20px;
  color: #4a5f75;
}

.project-card ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}

.project-card ul li {
  padding-left: 28px;
  position: relative;
  color: #4a5f75;
}

.project-card ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  color: #d4a574;
}

.project-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.project-images img {
  width: 100%;
  height: 100%;
  min-height: 220px;
  object-fit: cover;
  border-radius: 18px;
  border: 1px solid #f0ebe3;
  background: #ffffff;
}

@media (max-width: 900px) {
  .project-card {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .portfolio-hero {
    padding: 22px 0 16px;
  }

  .project-card {
    padding: 22px;
  }

  .project-images {
    grid-template-columns: 1fr;
  }
}
</style>
