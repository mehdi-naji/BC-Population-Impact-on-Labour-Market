# BC Population Impact on Labour Market Dashboard

An executive-style dashboard that analyzes population and labour-market dynamics in British Columbia using annual and monthly indicators.

## Project Purpose

This repository contains a single-page analytical dashboard designed to synthesize population trends, labour-market conditions, and program-relevant pressure indicators for decision support.

## Dashboard Scope

The dashboard currently includes three analytical pages:

1. Population Drivers
2. Labour Market Impacts
3. WorkBC Program Impacts

## Data Sources

- Government of British Columbia population statistics portal; Quarterly population and migration estimates for B.C.
- Statistics Canada, Labour Force Survey (years 2019 - 2025)
- Government of British Columbia population statistics portal; Municipal and sub-provincial areas population, 2011 - 2025
- Statistics Canada, Table 14-10-0371-01, Job vacancies, payroll employees, and job vacancy rate by provinces and territories
- Statistics Canada, Table 14-10-0287-03, Labour force characteristics by province
- Statistics Canada, Table 14-10-0023-01, Labour force characteristics by industry

## Repository Structure

```text
.
|-- index.html                # Dashboard layout and page content
|-- app/
|   `-- main.js               # Chart data and ECharts configurations
|-- Data/                     # Source data files used for analysis
`-- Design/                   # Design references and mockups
```

## How to Run

This is a static dashboard (no build step required).

1. Clone or download this repository.
2. Open `index.html` directly in a browser, or serve the folder locally.

Optional local server examples:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Confidentiality Note

Developed for a BC Government recruitment assignment. Specific details are withheld to comply with confidentiality requirements.

## Prepared By

Mehdi Naji  
Senior Policy Analyst  
Economic Strategy Branch  
Small Business & Economic Development Division  
Ministry of Jobs, Economic Development and Innovation  
mehdi.naji@gov.bc.ca
