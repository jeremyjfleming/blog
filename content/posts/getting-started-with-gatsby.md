---
title: "Getting Started with Gatsby"
date: "2026-05-20"
slug: "getting-started-with-gatsby"
description: "An overview of building a blog with Gatsby and MDX."
---

Gatsby is a static site generator built on React and GraphQL. It's a great choice for a blog because it generates fast, pre-rendered HTML at build time.

## Key concepts

### GraphQL data layer

Every piece of content in Gatsby — files, markdown, API responses — gets pulled into a unified GraphQL data layer at build time. Your components query exactly what they need.

### gatsby-plugin-mdx

MDX lets you write Markdown with embedded React components. This means you can drop a custom chart, callout box, or interactive element right inside a post.

### gatsby-source-filesystem

This plugin reads files from disk and makes them available in GraphQL. Point it at your `content/posts` folder and every `.md` file becomes a queryable node.

## Building a page

Pages in Gatsby can come from two places:

1. Files in `src/pages/` are automatically turned into routes.
2. `gatsby-node.ts` can create pages programmatically — useful for blog posts where the URL comes from the content itself.
