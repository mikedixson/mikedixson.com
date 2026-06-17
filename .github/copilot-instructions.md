# Copilot Instructions for mikedixson.com

This is a [Hugo](https://gohugo.io/) static site deployed to AWS S3. Hugo version: **0.128.0 extended**.

## Repository Layout

```
content/posts/   – Blog post markdown files
static/images/   – Images referenced in posts
archetypes/      – Post templates
hugo.toml        – Hugo configuration
```

## Creating a New Blog Post

### File naming
`content/posts/YYYY-MM-DD-slug-with-hyphens.md`

### Required frontmatter (copy and adapt this exactly)

```yaml
---
title: Human Readable Title
description: One-sentence SEO description.
date: YYYY-MM-DDTHH:MM:SS.000Z
preview: /images/<banner-image>.webp
draft: false
tags:
  - tag1
  - tag2
categories:
  - Category Name
author: Mike Dixson
type: post           # use "featured" for featured posts
excerpt: A one or two sentence summary shown in post listings.
image: /images/<thumbnail-image>.webp
slug: short-url-slug
keywords:
  - keyword1
  - keyword2
---
```

### Images
- Banner/preview image: 1200×630px, saved as `/static/images/<name>.webp`
- Thumbnail image: 400×210px, saved as `/static/images/<name>_thumbnail.webp`
- Free-to-reuse sources: Pixabay (CC0), Unsplash (free licence), Devicons (MIT), Wikimedia Commons (check licence per file)
- Convert SVGs to WebP: `rsvg-convert -w 1200 -h 630 input.svg | convert - output.webp`

## Building & Validating

Hugo must be installed first (see `copilot-setup-steps.yml`).

```bash
hugo --minify          # full build
hugo server            # local dev server
```

## Style Notes
- Posts use Markdown with `##` and `###` headings.
- Code blocks use triple backticks with the language name.
- Link to related posts using relative paths: `[text](/posts/slug/)`.
- Always attribute image sources at the bottom of the post.
