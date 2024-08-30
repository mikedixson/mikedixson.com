---
title: Bash How To Find and Delete Empty Directories
author: Mike
type: post
date: 2015-04-01T13:28:10+00:00
excerpt: |
  Useful bash snippet to find empty directories
  find ROOTDIRECTORY -depth -empty -type d
  
  Useful bash snippet to find empty directories AND delete them!
  find ROOTDIRECTORY -depth -empty -type d -delete
url: /bash-how-to-find-and-delete-empty-directories/
categories:
  - Linux
  - Tech Solutions
  - Tips
  - Ubuntu

---
Useful bash snippet to find empty directories  
`find <em>ROOTDIRECTORY</em> -depth -empty -type d` 

Useful bash snippet to find empty directories **AND <span style="color: #800000;">delete</span> them!**  
`find <em>ROOTDIRECTORY</em> -depth -empty -type d -delete`