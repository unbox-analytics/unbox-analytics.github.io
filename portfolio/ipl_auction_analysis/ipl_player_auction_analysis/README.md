# ipl_player_auction_analysis

# IPL Auction Analysis Using SQL

## Project Overview

This project analyzes IPL player auction data using SQL Server. The objective is to demonstrate practical SQL skills commonly used in business analytics projects, including:

* Aggregations
* Window Functions
* Common Table Expressions (CTEs)
* Ranking Functions
* Conditional Logic
* Correlated Subqueries
* Business-Oriented Analysis

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

* GROUP BY
* Aggregation
* ORDER BY
```
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
``` 
---

## 2. Who are the highest-paid all-rounders?

**Objective:** Find premium all-rounders in the auction.

**SQL Concepts Used:**

* Filtering
* Sorting
* TOP N Analysis

---

## 3. Who is the highest-priced player in each team?

**Objective:** Identify the marquee signing of every franchise.

**SQL Concepts Used:**

* Window Functions
* RANK()

---

## 4. Who are the top two most expensive players for each team?

**Objective:** Analyze concentration of spending within teams.

**SQL Concepts Used:**

* ROW_NUMBER()
* Conditional Aggregation

---

## 5. What percentage of a team's budget is allocated to each player?

**Objective:** Measure player-level contribution to total spending.

**SQL Concepts Used:**

* Window Aggregates
* Percentage Calculations

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

* CASE Statements
* Aggregation

---

## 7. Are overseas players more expensive than Indian players?

**Objective:** Compare average auction prices across player types.

**SQL Concepts Used:**

* CTEs
* UNION ALL
* Aggregations

---

## 8. Which players earn more than their team's average?

**Objective:** Identify above-average investments.

**SQL Concepts Used:**

* Window Functions
* Correlated Subqueries

---

## 9. Who is the highest-paid player in each role?

**Objective:** Compare market value across player roles.

**SQL Concepts Used:**

* RANK()
* Partitioning

---

# Key SQL Skills Demonstrated

* Common Table Expressions (CTEs)
* Window Functions
* RANK()
* ROW_NUMBER()
* Aggregations
* Conditional Logic
* Correlated Subqueries
* Data Segmentation
* Business Analytics

---

# Potential Dashboard Visualizations

* Team Spending Comparison
* Top Purchased Players
* Spending Distribution by Role
* Indian vs Overseas Analysis
* Team Budget Allocation
* Price Bracket Distribution

---

# Tools Used

* SQL Server
* SSMS
* Power BI (optional dashboard layer)

---

# Business Value

This analysis demonstrates how SQL can be used to answer real-world business questions related to:

* Budget allocation
* Resource optimization
* Performance investment
* Market pricing analysis
* Executive reporting
