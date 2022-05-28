---
title: Adding Syntax Highlighting To Nano
image: /images/featured-post/coding.png
type: featured
author: Mike
categories:
  - Tech Solutions
slug: adding-syntax-highlighting-nano
date: 2020-06-25T15:05:16+00:00
---

Run the following shell command to add all installed syntax files to your .nanorc file.

<pre class="wp-block-code"><code>ls -d /usr/share/nano/*.nanorc | awk '{print "include "$1}' >> ~/.nanorc</code></pre>

There is also a greatly expanded syntax library here  
<a href="https://github.com/scopatz/nanorc" target="_blank" rel="noreferrer noopener">https://github.com/scopatz/nanorc </a>