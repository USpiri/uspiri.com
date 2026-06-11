---
name: "Nemos"
order: 2
description: "Local-first desktop note-taking app built with Tauri — no cloud, no account, no subscription."
image: "../../assets/projects/nemos-01.png"
stack: ["React", "Tauri", "TipTap", "Zustand", "TanStack Router"]
repo: "https://github.com/USpiri/nemos"
blogPost: "/blog/nemos-v1"
---

Nemos is my longest-running personal project — a local-first, privacy-first desktop note-taking app built with Tauri. Notes live on disk as files, there's no cloud, no account, and no subscription.

The project went through a complete ground-up rewrite for v1.0. The rewrite replaced the router, the state manager, the editor integration, and introduced workspaces, a full tab system and many improvements.

## The Rewrite

Switching to TanStack Router (file-based) and tightening the lazy-loading strategy cut the main bundle from **~2.3 MB to ~490 KB**. Features only load when you use them, so the app launches fast regardless of how many extensions are enabled.

The build pipeline runs on GitHub Actions: every time a new version tag is pushed, it cross-compiles for macOS, Linux, and Windows and publishes the release automatically. The in-app updater checks for new versions on launch and handles the download and install without leaving the app.

Here is a detaled post about current project status: [Nemos v1.0](/blog/nemos-v1).
