---
layout: default
title: Home
permalink: /
---
<head>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=concierge" />
</head>


<section class="hero">
  <h1>Unpacking Practical Business Insights for Growing Businesses</h1>
  <p class="hero-copy">Practical analytics solutions built for growing businesses using Excel, SQL, Power BI, and Power Query.</p>
</section>

<hr />

<h2 style="color: #d4a574;"> <img width="" alt="Transparent logo" src="Assets/design_services_24dp_4D997F_FILL0_wght400_GRAD0_opsz24.svg"/>  Services</h2>

<style>
.hero {
    padding: 24px 0 16px;
}

.hero h1 {
    margin: 0;
    color: #4a9b7f;
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.05;
    max-width: 820px;
}

.hero-copy {
    margin: 16px 0 0;
    color: #4a5f75;
    font-size: 1.05rem;
    max-width: 760px;
    line-height: 1.75;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin: 24px 0;
}

.service-card {
    background: linear-gradient(135deg, #fafaf8 0%, #ffffff 100%);
    border: 2px solid #e8ddd2;
    border-radius: 12px;
    padding: 24px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
}

.service-card:hover {
    border-color: #d4a574;
    box-shadow: 0 12px 32px rgba(212, 165, 116, 0.15);
    transform: translateY(-4px);
}

.service-icon {
    font-size: 2.5rem;
    margin-bottom: 12px;
    height: 60px;
    display: flex;
    align-items: center;
}

.service-card h3 {
    margin: 0 0 8px 0;
    color: #1b3a52;
    font-size: 1.2rem;
}

.service-card p {
    margin: 0 0 16px 0;
    color: #4a5f75;
    font-size: 0.95rem;
    flex-grow: 1;
}

.service-card a {
    color: #d4a574;
    text-decoration: none;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: gap 0.2s ease;
}

.service-card a:hover {
    gap: 10px;
}
</style>

<div class="services-grid">
  <div class="service-card">
    <div class="service-icon"><img width="" alt="Transparent logo" src="Assets/design_services_24dp_4D997F_FILL0_wght400_GRAD0_opsz24.svg"/></div>
    <h3>Data Cleaning & Transformation</h3>
    <p>Turning messy data into actionable insights</p>
    <a href="{{ '/portfolio/' | relative_url }}">View projects →</a>
  </div>
  
  <div class="service-card">
    <div class="service-icon">⚙️</div>
    <h3>Report Automation</h3>
    <p>Streamlining recurring reports with Power Query and SQL</p>
    <a href="{{ '/portfolio/' | relative_url }}">View projects →</a>
  </div>
  
  <div class="service-card">
    <div class="service-icon">📊</div>
    <h3>Dashboard Development</h3>
    <p>Creating clear, interactive Power BI dashboards</p>
    <a href="{{ '/portfolio/' | relative_url }}">View projects →</a>
  </div>
  
  <div class="service-card">
    <div class="service-icon">🔧</div>
    <h3>Process Optimization</h3>
    <p>Fixing inefficient data workflows and disconnected spreadsheets</p>
    <a href="{{ '/portfolio/' | relative_url }}">View projects →</a>
  </div>
</div>

<hr />

<h2 style="color: #d4a574;">📂 Featured Projects</h2>

<p>🔗 <strong><a href="https://github.com/UnboxAnalytics/Ecommerce_Data_Analytics">Ecommerce Data Analytics</a></strong></p>
<p>Explore data cleaning, analysis, and visualization projects for real-world business scenarios.</p>

<hr />

<h2 style="color: #d4a574;">🔧 Tech Stack</h2>

<style>
.tech-stack {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin: 24px 0;
}

.tech-item {
    padding: 16px;
    background: #fafaf8;
    border-radius: 8px;
    border-left: 4px solid #d4a574;
}

.tech-item-name {
    font-weight: 600;
    color: #1b3a52;
    margin-bottom: 8px;
}

.skill-indicator {
    display: flex;
    gap: 4px;
    align-items: center;
}

.skill-bar {
    height: 8px;
    width: 28px;
    background: #e8ddd2;
    border-radius: 4px;
    overflow: hidden;
}

.skill-bar.filled {
    background: #d4a574;
}

.skill-label {
    font-size: 0.85rem;
    color: #6b7280;
    min-width: 60px;
}
</style>

<div class="tech-stack">
  <div class="tech-item">
    <div class="tech-item-name">Excel</div>
    <div class="skill-indicator">
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <span class="skill-label">Expert</span>
    </div>
  </div>
  
  <div class="tech-item">
    <div class="tech-item-name">SQL</div>
    <div class="skill-indicator">
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar"></div>
      <span class="skill-label">Advanced</span>
    </div>
  </div>
  
  <div class="tech-item">
    <div class="tech-item-name">Power BI</div>
    <div class="skill-indicator">
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar"></div>
      <span class="skill-label">Advanced</span>
    </div>
  </div>
  
  <div class="tech-item">
    <div class="tech-item-name">Power Query</div>
    <div class="skill-indicator">
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar"></div>
      <span class="skill-label">Advanced</span>
    </div>
  </div>
  
  <div class="tech-item">
    <div class="tech-item-name">Python</div>
    <div class="skill-indicator">
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar"></div>
      <div class="skill-bar"></div>
      <span class="skill-label">Intermediate</span>
    </div>
  </div>
  
  <div class="tech-item">
    <div class="tech-item-name">Data Visualization</div>
    <div class="skill-indicator">
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <div class="skill-bar filled"></div>
      <span class="skill-label">Expert</span>
    </div>
  </div>
</div>

<hr />

<h2 style="color: #d4a574;">💬 Let's Connect</h2>

<p>📧 <strong>Get in touch</strong> — Open to freelance projects and collaborations.</p>
<p>🏠 <a href="#">Home</a> | 📊 <a href="https://github.com/UnboxAnalytics?tab=repositories">Projects</a> | 💼 <a href="#">LinkedIn</a></p>

<hr />

<p align="center"><em>Practical analytics. Real results.</em></p>
