---
title: 'SOLVED: False cursor position when entering and editing text in a cell in Excel'
author: Mike
type: post
date: 2017-12-28T15:46:09+00:00
excerpt: "Changing the cell's font back to the default Calibri resolved the issue!"
url: /solved-false-cursor-position-when-entering-and-editing-text-in-a-cell-in-excel/
categories:
  - MS Office
  - Tech Solutions

---
Similar to <a href="https://answers.microsoft.com/en-us/msoffice/forum/msoffice_excel-mso_mac-mso_mac2016/false-cursor-position-when-entering-and-editing/519774b7-726e-40cd-bbf6-305abd7c8af0" target="_blank" rel="noopener">this article</a> I was experiencing a false cursor position and the cursor position and text shifting when editing versus when viewing the cell

I played with the formatting and found that enabled LTR (Left to right formatting) helped, at least made it usable to edit the cell.

However I found the solution for me was to change the font!! Somehow the font the problem cell had become formatted as MS Shell DG font (a font I can&#8217;t actually see in the font browser now).  
Changing the cell&#8217;s font back to the default Calibri resolved the issue!

I&#8217;m running Version 1708 (Build 8431.2131 Click-to-Run)