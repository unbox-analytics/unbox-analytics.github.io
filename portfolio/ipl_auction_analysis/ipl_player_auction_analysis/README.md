# ipl_player_auction_analysis

# IPL Auction Analysis Using SQL

## Project Overview

This project analyzes IPL player auction data using SQL Server. The objective is to demonstrate practical SQL skills commonly used in business analytics projects, including:

- Aggregations
- Window Functions
- Common Table Expressions (CTEs)
- Ranking Functions
- Conditional Logic
- Correlated Subqueries
- Business-Oriented Analysis

The analysis focuses on team spending patterns, player valuations, budget allocation, and role-based pricing.

---

## Dataset

**Table:** IPLPlayers

### Key Fields

| Column      | Description                               |
| ----------- | ----------------------------------------- |
| Player      | Player Name                               |
| Team        | IPL Team                                  |
| Role        | Batter, Bowler, Wicketkeeper, All-rounder |
| Type        | Indian / Overseas                         |
| Price_in_cr | Auction Price (Crores INR)                |

---

# Business Questions

## 1. Which teams spent the most during the auction?

**Objective:** Identify franchises with the largest auction budgets.

**SQL Concepts Used:**

- GROUP BY
- Aggregation
- ORDER BY

````sql
/**************************************************************************
    1. Total Spending by Team
    Calculate the total amount spent by each franchise.
**************************************************************************/

SELECT
    Team,
    SUM(Price_in_cr) AS Total_Spend_Cr
FROM IPLPlayers
GROUP BY Team
ORDER BY Total_Spend_Cr DESC;
---

## 2. Who are the highest-paid all-rounders?

**Objective:** Find premium all-rounders in the auction.

**SQL Concepts Used:**

- Filtering
- Sorting
- TOP N Analysis


/**************************************************************************
    2. Top 3 Highest-Paid All-Rounders
**************************************************************************/

SELECT TOP 3
    Player,
    Price_in_cr
FROM IPLPlayers
WHERE Role = 'All-rounder'
ORDER BY Price_in_cr DESC;

---

## 3. Who is the highest-priced player in each team?

**Objective:** Identify the marquee signing of every franchise.

**SQL Concepts Used:**

- Window Functions
- RANK()

/**************************************************************************
    3. Highest-Priced Player in Each Team
**************************************************************************/

WITH RankedPlayers AS
(
    SELECT
        Team,
        Player,
        Price_in_cr,
        RANK() OVER
        (
            PARTITION BY Team
            ORDER BY Price_in_cr DESC
        ) AS PriceRank
    FROM IPLPlayers
)

SELECT
    Team,
    Player,
    Price_in_cr
FROM RankedPlayers
WHERE PriceRank = 1
ORDER BY Team;

---

## 4. Who are the top two most expensive players for each team?

**Objective:** Analyze concentration of spending within teams.

**SQL Concepts Used:**

- ROW_NUMBER()
- Conditional Aggregation
/**************************************************************************
    4. Top Two Highest-Priced Players per Team
**************************************************************************/
```
WITH RankedPlayers AS
(
    SELECT
        Team,
        Player,
        Price_in_cr,
        ROW_NUMBER() OVER
        (
            PARTITION BY Team
            ORDER BY Price_in_cr DESC
        ) AS PriceRank
    FROM IPLPlayers
)

SELECT
    Team,

    MAX(CASE
            WHEN PriceRank = 1
            THEN Player
        END) AS Most_Expensive_Player,

    MAX(CASE
            WHEN PriceRank = 1
            THEN Price_in_cr
        END) AS Most_Expensive_Price,

    MAX(CASE
            WHEN PriceRank = 2
            THEN Player
        END) AS Second_Most_Expensive_Player,

    MAX(CASE
            WHEN PriceRank = 2
            THEN Price_in_cr
        END) AS Second_Most_Expensive_Price

FROM RankedPlayers
WHERE PriceRank <= 2
GROUP BY Team
ORDER BY Team;
```
---

## 5. What percentage of a team's budget is allocated to each player?

**Objective:** Measure player-level contribution to total spending.

**SQL Concepts Used:**

- Window Aggregates
- Percentage Calculations
/**************************************************************************
    5. Percentage Contribution of Each Player
    to Team Spending
**************************************************************************/
```
SELECT
    Team,
    Player,
    Price_in_cr,

    ROUND(
        Price_in_cr * 100.0
        / SUM(Price_in_cr) OVER (PARTITION BY Team),
        2
    ) AS Contribution_Percentage

FROM IPLPlayers
ORDER BY Team, Contribution_Percentage DESC;

---

## 6. How are players distributed across price brackets?

### Classification

| Category | Price Range |
| -------- | ----------- |
| High     | > 15 Cr     |
| Medium   | 5 - 15 Cr   |
| Low      | < 5 Cr      |

**Objective:** Understand auction spending distribution.

**SQL Concepts Used:**

- CASE Statements
- Aggregation
```
/**************************************************************************
    6. Player Price Classification
**************************************************************************/

WITH PlayerClassification AS
(
    SELECT
        Team,
        Player,
        Price_in_cr,

        CASE
            WHEN Price_in_cr > 15 THEN 'High'
            WHEN Price_in_cr BETWEEN 5 AND 15 THEN 'Medium'
            ELSE 'Low'
        END AS Price_Bracket

    FROM IPLPlayers
)

SELECT
    Team,
    Price_Bracket,
    COUNT(*) AS Number_Of_Players
FROM PlayerClassification
GROUP BY
    Team,
    Price_Bracket
ORDER BY
    Team,
    Number_Of_Players DESC;
---

## 7. Are overseas players more expensive than Indian players?

**Objective:** Compare average auction prices across player types.

**SQL Concepts Used:**

- CTEs
- UNION ALL
- Aggregations
```
/**************************************************************************
    7A. Average Price Comparison
    Indian vs Overseas Players
**************************************************************************/

WITH PlayerResidency AS
(
    SELECT
        Player,
        Price_in_cr,

        CASE
            WHEN Type LIKE 'India%' THEN 'Indian'
            WHEN Type LIKE 'Overseas%' THEN 'Overseas'
        END AS Player_Type

    FROM IPLPlayers
)

SELECT
    Player_Type,
    AVG(Price_in_cr) AS Average_Price
FROM PlayerResidency
GROUP BY Player_Type;
---

## 8. Which players earn more than their team's average?

**Objective:** Identify above-average investments.

**SQL Concepts Used:**

- Window Functions
- Correlated Subqueries
```
/**************************************************************************
    8A. Players Above Team Average
    Window Function Approach
**************************************************************************/

WITH TeamAveragePrice AS
(
    SELECT
        Team,
        Player,
        Price_in_cr,

        AVG(Price_in_cr) OVER
        (
            PARTITION BY Team
        ) AS Team_Average_Price

    FROM IPLPlayers
)

SELECT
    Team,
    Player,
    Price_in_cr,
    Team_Average_Price
FROM TeamAveragePrice
WHERE Price_in_cr > Team_Average_Price
ORDER BY Team;
---

## 9. Who is the highest-paid player in each role?

**Objective:** Compare market value across player roles.

**SQL Concepts Used:**

- RANK()
- Partitioning
```
/**************************************************************************
    9. Highest-Priced Player by Role
**************************************************************************/

WITH RankedPlayers AS
(
    SELECT
        Player,
        Role,
        Price_in_cr,

        RANK() OVER
        (
            PARTITION BY Role
            ORDER BY Price_in_cr DESC
        ) AS PriceRank

    FROM IPLPlayers
)

SELECT
    Role,
    Player,
    Price_in_cr
FROM RankedPlayers
WHERE PriceRank = 1
ORDER BY Role;
---

# Key SQL Skills Demonstrated

- Common Table Expressions (CTEs)
- Window Functions
- RANK()
- ROW_NUMBER()
- Aggregations
- Conditional Logic
- Correlated Subqueries
- Data Segmentation
- Business Analytics

---

# Potential Dashboard Visualizations

- Team Spending Comparison
- Top Purchased Players
- Spending Distribution by Role
- Indian vs Overseas Analysis
- Team Budget Allocation
- Price Bracket Distribution

---

# Tools Used

- SQL Server
- SSMS
- Power BI (optional dashboard layer)

---

# Business Value

This analysis demonstrates how SQL can be used to answer real-world business questions related to:

- Budget allocation
- Resource optimization
- Performance investment
- Market pricing analysis
- Executive reporting


-- Freelancer-Level Questions (Much Better Than IPL Trivia)

-- These mimic what a small business client would actually ask.

-- Revenue & Spending Analysis
-- Which teams spent above the league average?
-- What percentage of total league spending belongs to each team?
-- Which team has the most balanced spending distribution?
-- Which team depends most heavily on one player?
-- Which team has the highest average player cost?
-- Cost Optimization Analysis
-- Which teams have more than 30% of their budget tied up in their top 2 players?
-- Which teams have the highest concentration risk?
-- Which teams spread spending most evenly across players?
-- Calculate the Gini coefficient of player spending by team.
-- Rank teams from most diversified to least diversified.
-- Workforce Analytics Style Questions

-- (These are directly transferable to HR analytics projects)

-- What is the average salary by role?
-- Which role commands the highest market premium?
-- What percentage of spending goes to all-rounders?
-- Which role shows the greatest salary variation?
-- Which role has the highest median price?
-- Executive Dashboard Questions
-- Create a spending scorecard for every team.
-- Build a Top-10 highest-paid player report.
-- Create role-wise spending summaries.
-- Build team KPI cards.
-- Build auction budget allocation dashboards.
-- Data Automation Questions

-- These are gold for freelancing.

-- Generate a weekly automated spending report.
-- Flag players whose price exceeds team average by more than 50%.
-- Automatically identify teams exceeding a budget threshold.
-- Generate a Top-N player report dynamically.
-- Create an automated PDF summary of auction results.
-- Export team-level KPIs to Excel.
-- Generate role-wise summary tables automatically.
-- Produce exception reports for unusually high-priced players.
-- Refresh Power BI dashboards automatically.
-- Email reports to stakeholders automatically.

-- These questions start moving you from analyst to analytics automation consultant, which is where the better freelance opportunities tend to be.

-- Suggested Report Outline

-- If you were delivering this to a client:

-- Executive Summary
-- Total auction spending
-- Highest spending team
-- Highest priced player
-- Key observations
-- Team Spending Analysis
-- Total spend by team
-- Average spend per player
-- Spending concentration
-- Player Valuation Analysis
-- Top 10 highest paid players
-- Most expensive player by team
-- Most expensive player by role
-- Role-Based Analysis
-- Average price by role
-- Total spend by role
-- Distribution of spending
-- Indian vs Overseas Analysis
-- Average price comparison
-- Total spending comparison
-- Share of auction budget
-- Budget Allocation Analysis
-- Player contribution %
-- Team concentration risk
-- Top 2 player dependency
-- Key Findings

-- Example:

-- Team A spent 40% of budget on two players.
-- All-rounders commanded the highest premiums.
-- Overseas players were priced 18% higher on average.
-- Three teams showed unusually concentrated spending.
-- Recommendations
-- Diversify player investment.
-- Reduce concentration risk.
-- Benchmark spending against league averages.
-- Monitor role-based inflation.