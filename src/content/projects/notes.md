---
name: "Notes"
description: "Minimalist browser-based note-taking app with a custom TipTap editor — callouts, KaTeX math, syntax highlighting, internal note links, and nested folders. No backend, no account: everything lives in localStorage."
image: "../../assets/projects/placeholder.svg"
stack: ["Next.js", "TipTap", "TypeScript", "Zustand"]
url: "https://notes.uspiri.com"
repo: "https://github.com/USpiri/notes"
---

Notes is a web-based note editor built around a custom TipTap setup. The goal was a fast, distraction-free writing environment that works entirely in the browser — no sign-up, no sync, no server.

Everything persists in localStorage. Notes are organized in nested folders with drag-and-drop support for both the file tree and editor blocks.

## Editor Features

The editor extends TipTap's StarterKit with several custom nodes: **Callout** for highlighted blocks, **MathDisplay** and **MathInline** for KaTeX-rendered equations, syntax-highlighted code blocks, and internal note links for connecting entries within the same workspace.

A "Note Only" mode strips away the menubar entirely and hands full control to keyboard shortcuts — useful for focused writing sessions.

## Origin

Notes was the direct predecessor to [Nemos](/projects/nemos). The roadmap even had a line item: "Make a Tauri App." That became Nemos — a desktop version that took the same editing philosophy and gave it a proper local-file backend, workspaces, and a cross-platform release pipeline.
