---
title: Display content of files with filenames
author: Mike
type: post
date: 2017-03-11T17:33:16+00:00
url: /display-content-of-files-with-filenames/
categories:
  - Linux
tags:
  - cat
  - contents
  - file handling
  - files
  - linux
  - tail

---
Use the following linux command to display the contents of several files with their filenames prepended.

`tail -n +1 file1.txt file2.txt file3.txt`

Displays as

`<span class="s1">==> file1.txt <==</span>`

File 1 contents

==> file2.txt <==

File 3 contents

==> file3.txt <==

File 3 contents