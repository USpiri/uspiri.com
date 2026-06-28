<a name="readme-top"></a>

# ✍️ Personal Blog & Portfolio

<p align="center">
  <!-- Hero screenshot placeholder -->
  <!-- <img src="" alt="Blog screenshot" width="800" /> -->
  <br>
  <em>Minimal personal blog and portfolio built with Astro 6. Fast, accessible, and SEO-optimized — with dark mode, syntax highlighting, RSS feed, and Open Graph image generation.</em>
  <br>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white" />
  •
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  •
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
  •
  <img src="https://img.shields.io/badge/Shiki-F7DF1E?style=for-the-badge&logo=shiki&logoColor=black" />
</p>

<p align="center">
  <strong><a href="https://uspiri.com" target="_blank">Live site</a></strong>
</p>

## About

A minimal, performance-focused personal blog and portfolio site built with [Astro](https://astro.build/) 6. It features a blog with tag filtering and an RSS feed, a projects section with dedicated detail pages, automatic Open Graph image generation, and full structured data (JSON-LD) for SEO. Syntax highlighting is powered by [Shiki](https://shiki.style/) with dual light/dark themes.

<!-- Screenshot placeholder -->
<!-- ![blog-preview]() -->

## ✨ Features

- **Blog** — Markdown posts with tag system, per-tag index pages, draft support, and share button
- **Portfolio** — Project pages with image, tech stack, and external links
- **Dark / Light mode** — System preference detection with manual toggle, persisted to localStorage
- **Syntax highlighting** — Shiki dual-theme (`vitesse-light` / `kanagawa-dragon`) with a copy-code button
- **Open Graph images** — Auto-generated OG images via `astro-og-canvas`
- **SEO** — Structured data (Schema.org), canonical URLs, Open Graph, Twitter Cards, sitemap, and RSS feed
- **View Transitions** — Native browser fade-up animations between pages
- **Accessible** — Semantic HTML, skip-to-content link, ARIA labels, and focus-visible outlines

## 🗃️ Folder structure

```bash
src/
├── components/
│   ├── Footer.astro
│   └── Metadata.astro
├── content/
│   ├── blog/          # Markdown blog posts
│   └── projects/      # Markdown project entries
├── layouts/
├── pages/
│   ├── index.astro    # Home (intro, experience, projects, latest posts)
│   ├── blog/
│   │   ├── index.astro        # All posts by year
│   │   ├── [slug].astro       # Individual post
│   │   └── tag/[tag].astro    # Posts filtered by tag
│   ├── projects/
│   │   └── [slug].astro       # Individual project detail
│   ├── rss.xml.ts
│   └── 404.astro
└── styles/
```

## 🛠️ Tech Stack

- **Framework**: Astro 6
- **Language**: TypeScript
- **Styling**: Vanilla CSS with CSS custom properties
- **Syntax highlighting**: Shiki (dual theme)
- **Image optimization**: Astro Assets + Sharp
- **OG images**: astro-og-canvas + canvaskit-wasm
- **Fonts**: Source Sans 3, Cormorant Garamond, Cascadia Code (via Fontsource)
- **Feeds**: @astrojs/rss, @astrojs/sitemap
- **Package manager**: pnpm

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/USpiri/new-blog.git
   ```

2. **Go to the project folder:**

   ```bash
   cd new-blog
   ```

3. **Install dependencies:**

   ```bash
   pnpm install
   ```

4. **Start the development server:**

   ```bash
   pnpm dev
   ```

5. **Open** [http://localhost:4321](http://localhost:4321) in your browser.

## 🧞 Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm dev`     | Start local dev server at `localhost:4321`   |
| `pnpm build`   | Build production site to `./dist/`           |
| `pnpm preview` | Preview the production build locally         |
| `pnpm astro`   | Run Astro CLI commands                       |

<p align="right"><a href="#readme-top">Back to top ⬆️</a></p>
