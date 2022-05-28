---
title: Remove comments and empty lines with grep
author: Mike
type: post
date: 2015-11-03T17:00:17+00:00
url: /remove-comments-and-empty-lines-with-grep/
categories:
  - Linux
  - Tech Solutions
tags:
  - bash
  - grep
  - linux
  - text

---
Remove comments and empty lines with grep

<pre class="wp-block-code"><code>grep -v -e ^# -e ^$ filename</code></pre>