---
name: "Indiario"
order: 1
description: "Live news publishing platform built for a real editorial team — CMS backend, public web frontend, and a mobile app with push notifications."
image: "../../assets/projects/indiario.png"
stack: ["Next.js", "Payload CMS", "React Native", "Expo"]
url: "https://indiario.com/"
links:
  - label: "Play Store"
    url: "https://play.google.com/store/apps/details?id=com.indiario.app"
  - label: "App Store"
    url: "https://apps.apple.com/us/app/indiario/id6746705730"
---

Indiario is a full-stack news platform built for a live editorial team. It covers the complete publishing lifecycle: journalists write and manage content through a Payload CMS backend, readers access the public site, and subscribers receive breaking news through a React Native mobile app with push notifications. It's a full stack distributed system I've worked on as part of the team at [Honra.io](https://honra.io).

## Production Migrations

The project's most demanding work happened in production — twice.

**Payload v2 → v3.** The CMS backbone was migrated from Payload v2 to v3 while the newsroom kept publishing. This involved adapting schema definitions, migration scripts, and the API layer without any editorial downtime. Any gap in availability would have meant missed publishing windows.

**Slate → Lexical editor.** The rich-text editor was replaced across the entire CMS. Every piece of existing content had to be migrated to Lexical's format, and the public frontend had to render it correctly — no broken layouts, no missing embeds, no formatting regressions across hundreds of articles.

Both migrations were delivered with zero downtime.
