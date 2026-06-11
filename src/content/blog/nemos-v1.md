---
title: "Nemos v1.0 Is Here — And It Feels Different"
description: "Nemos v1.0 is here — a ground-up rewrite with workspaces, tabbed editing, a powerful editor, and a roadmap toward AI-powered notes."
tags: ["tauri", "projects"]
pubDate: 2026-02-20
---

Nemos v1.0 marks the biggest change in the project's history. Over the past months, the application has been rewritten almost entirely from scratch, laying the foundation for features that weren't possible with the previous architecture.

Nemos v1.0.0 isn't just an update. It's a complete rewrite — rebuilt from scratch (mostly) with a clear architecture and an eye on where this app is going.

---

## Why a Full Rewrite?

The previous version achieved its goals, but it had started to show its limitations. There was no workspace concept, no proper route and content validation, and the codebase was harder to extend than it should've been.

The rewrite wasn't just about cleaning things up. It was about building a base that could support what Nemos is meant to become: a local-first, private, and eventually AI-assisted thinking environment.

---

## What's New in v1.0.0

### Workspaces — Finally! Organized Notes

One of the biggest changes is the introduction of **workspaces**. You can now create multiple workspaces, each pointing to its own folder on your computer. Each workspace has its own file tree and its own view.

This means you can keep your work notes, personal journal, and side project ideas completely separate — without mixing files or juggling folder conventions manually.

### Tabbed Editing — Multiple Notes, One Workspace

Nemos now has a full tab system. Open multiple notes at once, switch between them with keyboard shortcuts, right-click for a context menu, and pick up right where you left off — tab state is saved across sessions.

### A More Powerful Editor

The editor has been significantly upgraded and rewritten with all of its features, all accessible without leaving the keyboard.

### Redesigned Sidebar & File Tree

The sidebar is fully rebuilt. You get a hierarchical file tree with drag-and-drop for moving notes and folders, and rich context menus for renaming, deleting, copying, or opening a note in a new tab — and coming very soon, a resizable sidebar that can collapse entirely.

### Performance Improvements

The old app loaded everything upfront. v1.0 is smarter. A lot of features are now lazy loaded. The result:

> **Main bundle down from ~2.3 MB to ~490 KB.**

The app launches faster, and you only pay the cost of a feature when you actually use it.

---

## What's Coming Next

v1.0 is the foundation. Here's a look at what's planned for upcoming releases.

### Settings, Themes & a Resizable Sidebar

The "Unreleased" section of the changelog already has several features queued up: a full Settings dialog, themes support that can sync with your OS, and a resizable, collapsible sidebar. These are ready to drop into the next release.

### Smarter Notes (Nemos & AI)

One of the most important upcoming changes is moving notes from their current format to **Markdown files**. This makes notes readable in any editor, easier to search, and — crucially — ready for AI.

Once notes are stored as Markdown, it becomes much easier to build AI-powered workflows around them. By default, everything runs locally on your device — no cloud, no subscription, no data leaving your machine. But if you prefer, you'll also be able to connect an external model. *It's your choice*.

### Full-Text Search

Search is also coming. The planned architecture uses **Tantivy** — a full-text search engine library written in Rust — running natively in Nemos' backend.

---

## The Bigger Picture

Nemos is built on a simple premise: **your notes should live on your device, in open formats, and work for you.**. That philosophy is heavily influenced by Steph Ango's "File over App" idea:

> The files you create are more important than the tools you use to create them.
> 
> [Steph Ango](https://stephango.com/file-over-app)

Nemos is designed around that principle.

That's one of the reasons the move to Markdown is so important. Your notes shouldn't be trapped inside Nemos. They should remain readable, editable, and useful even if you decide to use a different editor in the future.

The roadmap points toward AI integrations — not as a cloud feature, but as a local tool that understands your notes and helps you think. That's still a few releases away, but every decision in v1.0 was made with that destination in mind.

---

If you want to try it, you can [**download the latest release on GitHub**](https://github.com/USpiri/nemos/releases/latest). It's free, open-source, and runs on macOS, Linux, and Windows.
