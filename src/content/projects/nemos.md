---
name: "Nemos"
description: "Local-first desktop note-taking app rebuilt from scratch with workspaces, tabbed editing, and a rich TipTap editor. The v1.0 rewrite cut the main bundle from 2.3 MB to 490 KB and ships with an auto-updater driven by a GitHub Actions release pipeline."
image: "../../assets/projects/nemos-01.png"
stack: ["React", "Tauri", "TipTap", "Zustand", "TanStack Router"]
repo: "https://github.com/USpiri/nemos"
blogPost: "/blog/nemos-v1"
---

Nemos is my longest-running personal project — a local-first, privacy-first desktop note-taking app built with Tauri. Notes live on disk as files, there's no cloud, no account, and no subscription.

The project went through a complete ground-up rewrite for v1.0. The previous version worked, but the architecture couldn't support where the app was heading. The rewrite replaced the router, the state manager, and the editor integration, and introduced workspaces and a full tab system.

## What's in v1.0

**Workspaces** let you point Nemos at any folder on your machine. Each workspace has its own file tree, its own recent notes view, and stays completely separate from your other workspaces.

**Tabbed editing** means you can keep multiple notes open at once. Tab state persists across sessions — reopen the app and you're right back where you left off.

**The editor** is built on TipTap v3 and goes well beyond basic rich text: slash commands (`/`), syntax-highlighted code blocks, Mermaid diagrams, KaTeX math, SMILES chemical notation, resizable images, and interactive tables — all accessible without leaving the keyboard.

## The Rewrite

Switching to TanStack Router (file-based) and tightening the lazy-loading strategy cut the main bundle from **~2.3 MB to ~490 KB**. Features only load when you use them, so the app launches fast regardless of how many extensions are enabled.

The build pipeline runs on GitHub Actions: every time a new version tag is pushed, it cross-compiles for macOS, Linux, and Windows and publishes the release automatically. The in-app updater checks for new versions on launch and handles the download and install without leaving the app.

You can read more about the v1.0 release and what's planned next in [the blog post](/blog/nemos-v1).
