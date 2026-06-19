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
    <div class="project-card-top">
      <div class="project-icon">🛒</div>
      <div>
        <span class="project-tag">DATA ENGINEERING • REVENUE GENERATION</span>
        <h2>Cart Abandonment Recovery System</h2>
      </div>
    </div>
    <p class="project-summary">Sophisticated multi-stage data pipeline system that identifies cart abandoners across multiple product lines, then orchestrates targeted email campaigns through marketing automation platforms to recover lost revenue.</p>
    <ul class="project-features">
      <li><span class="feature-icon">💰</span>Significant revenue recovery through intelligent customer journey orchestration and targeted email campaigns</li>
      <li><span class="feature-icon">🧠</span>Complex SQL logic with consent management, duplicate prevention, and multi-brand customer identification</li>
      <li><span class="feature-icon">⚙️</span>Automated batch processing with cloud data warehouse to marketing platform integration and daily alerting</li>
    </ul>
    <div class="project-tech-list">
      <span>CLOUD DATA WAREHOUSE</span>
      <span>MARKETING AUTOMATION PLATFORM</span>
      <span>CLOUD WORKFLOWS</span>
      <span>INFRASTRUCTURE AS CODE</span>
      <span>PYTHON</span>
    </div>
  </article>

  <article class="project-card">
    <div class="project-card-top">
      <div class="project-icon">📧</div>
      <div>
        <span class="project-tag">BUSINESS INTELLIGENCE • REVENUE ATTRIBUTION</span>
        <h2>Email Campaign Attribution Dashboard</h2>
      </div>
    </div>
    <p class="project-summary">Comprehensive revenue attribution system tracking customer journeys from email campaigns to purchases across multiple brands with sophisticated product revenue calculations.</p>
    <ul class="project-features">
      <li><span class="feature-icon">📊</span>Multi-brand revenue attribution with 7-day attribution windows and complex product pricing logic</li>
      <li><span class="feature-icon">🔗</span>Cross-platform data integration linking email events, clickstream data, and purchase transactions</li>
      <li><span class="feature-icon">📈</span>Powers executive Looker Studio dashboards for real-time campaign performance monitoring</li>
    </ul>
    <div class="project-tech-list">
      <span>BIGQUERY</span>
      <span>SQL</span>
      <span>LOOKER STUDIO</span>
      <span>CLOUD SCHEDULER</span>
      <span>REVENUE ATTRIBUTION</span>
    </div>
  </article>

  <article class="project-card">
    <div class="project-card-top">
      <div class="project-icon">🛡️</div>
      <div>
        <span class="project-tag">DATA ENGINEERING • MONITORING & ALERTING</span>
        <h2>AJO Campaign Anomaly Detection System</h2>
      </div>
    </div>
    <p class="project-summary">Automated anomaly detection system monitoring marketing automation campaigns with intelligent alerting for proactive campaign management.</p>
    <ul class="project-features">
      <li><span class="feature-icon">🤖</span>Automated anomaly detection with containerized Python scripts and batch job orchestration</li>
      <li><span class="feature-icon">🔔</span>Daily alerting system for anomaly notifications</li>
      <li><span class="feature-icon">🛡️</span>Proactive campaign monitoring preventing revenue loss through early anomaly detection</li>
    </ul>
    <div class="project-tech-list">
      <span>PYTHON</span>
      <span>DOCKER</span>
      <span>CLOUD WORKFLOWS</span>
      <span>CLOUD SCHEDULER</span>
      <span>SECRET MANAGER</span>
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

.project-card {
  background: #ffffff;
  border: 1px solid rgba(212, 165, 116, 0.18);
  border-radius: 28px;
  padding: 32px;
  box-shadow: 0 22px 40px rgba(18, 35, 44, 0.07);
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;
  display: grid;
  gap: 24px;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(18, 35, 44, 0.12);
  border-color: rgba(212, 165, 116, 0.32);
}

.project-card-top {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 18px;
  align-items: center;
}

.project-icon {
  width: 56px;
  height: 56px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  background: rgba(212, 165, 116, 0.14);
  color: #d4a574;
  font-size: 1.45rem;
  transition: transform 0.28s ease, background 0.28s ease;
}

.project-card:hover .project-icon {
  transform: scale(1.06);
  background: rgba(212, 165, 116, 0.22);
}

.project-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 10px;
  color: #4a5f75;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.project-card h2 {
  margin: 0;
  color: #1b3a52;
  font-size: clamp(1.35rem, 2vw, 1.75rem);
  line-height: 1.1;
}

.project-summary {
  margin: 0;
  color: #4a5f75;
  font-size: 1rem;
  line-height: 1.75;
}

.project-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 14px;
}

.project-features li {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: flex-start;
  color: #4a5f75;
  font-weight: 500;
}

.feature-icon {
  width: 30px;
  min-width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  font-size: 0.95rem;
  color: #d4a574;
}

.project-tech-list {
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.project-tech-list span {
  display: inline-flex;
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(212, 165, 116, 0.14);
  color: #5c4a3d;
  font-size: 0.82rem;
  font-weight: 700;
}

@media (max-width: 900px) {
  .project-card {
    padding: 28px;
  }
}

@media (max-width: 640px) {
  .portfolio-hero {
    padding: 22px 0 16px;
  }

  .project-card {
    padding: 22px;
  }
}
</style>
