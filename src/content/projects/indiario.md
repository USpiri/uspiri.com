---
name: "Indiario"
description: "Live news publishing platform built for a real editorial team — CMS backend, public web frontend, and a mobile app with push notifications. Shipped two zero-downtime production migrations: Payload v2→v3 and the Slate→Lexical editor swap."
image: "../../assets/projects/indiario.png"
stack: ["Next.js", "Payload CMS", "React Native", "Expo"]
url: "https://indiario.com/"
---

Indiario is a full-stack news platform built for a live editorial team. It covers the complete publishing lifecycle: journalists write and manage content through a Payload CMS backend, readers access the public site, and subscribers receive breaking news through a React Native mobile app with push notifications. It's a client project I've worked on as part of the team at [Honra.io](https://honra.io).

## Production Migrations

The project's most demanding work happened in production — twice.

**Payload v2 → v3.** The CMS backbone was migrated from Payload v2 to v3 while the newsroom kept publishing. This involved adapting schema definitions, migration scripts, and the API layer without any editorial downtime. Any gap in availability would have meant missed publishing windows.

**Slate → Lexical editor.** The rich-text editor was replaced across the entire CMS. Every piece of existing content had to be migrated to Lexical's format, and the public frontend had to render it correctly — no broken layouts, no missing embeds, no formatting regressions across hundreds of articles.

Both migrations were delivered with zero downtime.

## Mobile App

The Expo-based mobile app handles content delivery and reader engagement. Push notifications are triggered from the CMS on publish and deep-link directly into the relevant article on the client. Keeping the notification pipeline reliable while the CMS was being migrated in parallel added an extra layer of coordination to both projects.
