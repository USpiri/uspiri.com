---
name: "Maps Scraper"
order: 5
description: "Chrome extension that extracts structured business data from Google Maps search results and exports it as CSV or JSON for market research and lead generation."
image: "../../assets/projects/map-scraper.png"
stack: ["React", "TypeScript", "Vite"]
repo: "https://github.com/USpiri/maps-scrapper-extension"
---

Maps Scraper is a Chrome extension that automates the tedious part of Google Maps research. Run a search, open the extension, and it pulls all visible results into a structured dataset ready for export.

## What It Captures

Each result includes: name, address, category, average rating, review count, opening hours, phone number, accessibility info, website URL, GPS coordinates (latitude and longitude), a direct Google Maps link, and Google's internal `dataId` — useful for deduplication when scraping across multiple queries.

## Export

Results export as `.csv` (for spreadsheets) or `.json` (for programmatic use). The format is straightforward and column-consistent, so it drops into any analysis workflow without transformation.
