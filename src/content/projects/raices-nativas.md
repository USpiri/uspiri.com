---
name: "Raices Nativas"
description: "Angular web app built in collaboration with Biology students from the Universidad Nacional de Córdoba to promote care of native tree species. An interdisciplinary project at the intersection of ecology and web."
image: "../../assets/projects/placeholder.svg"
stack: ["Angular", "Material", "Bootstrap"]
url: "https://raices-nativas.vercel.app"
repo: "https://github.com/USpiri/raices-nativas"
---

Raíces Nativas was a collaboration with students from the Faculty of Biological Sciences at the Universidad Nacional de Córdoba (UNC). The project's goal was to promote awareness and care of native tree species in the Córdoba region.

Working with non-technical collaborators on a domain I knew nothing about was genuinely fun. The biology students brought the knowledge — which species are native, where they grow, why they matter ecologically — and I built the interface to present it clearly and accessibly.

## What It Does

The app is organized around three sections: a home, a garden guide, and a sidewalk planting guide. Each section helps users understand which native trees are appropriate for different urban contexts — parks, private gardens, street planting — and how to care for them.

## Stack

Built with Angular 16, Angular Material, and Bootstrap 5. Feature modules are lazy-loaded, keeping the initial bundle small. The typed data model (courtesy of Angular's DI and TypeScript) made it easy to keep the content structure consistent across sections even as the domain evolved.

The project was a good reminder that domain expertise is the hard part. The web layer is just the packaging.
