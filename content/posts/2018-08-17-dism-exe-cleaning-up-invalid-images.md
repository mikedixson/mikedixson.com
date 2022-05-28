---
title: Dism.exe Cleaning Up Invalid Images
author: Mike
type: post
date: 2018-08-17T12:57:22+00:00
excerpt: Thanks to a post here I finally managed to resolve the issue by deleting keys under "HKLM\SOFTWARE\Microsoft\WIMMount\mounted images\"
url: /dism-exe-cleaning-up-invalid-images/
categories:
  - Personal
  - Windows
tags:
  - clean up
  - cleanup-wim
  - dism
  - dism.exe
  - images
  - invalid

---
After finishing editing and wim image using dism I was being left with Windows still thinking the image was still mounted somehow and not able to remount the image file.  
Thanks to a [post][1] [here][1] I finally managed to resolve the issue by deleting keys under &#8220;HKLM\SOFTWARE\Microsoft\WIMMount\mounted images\&#8221;

Next I just need to find how to be able to delete the folders ProgramData\Microsoft\Windows\SystemData underneath the root of a mounted image after it&#8217;s been unmounted. Windows is locking them but there are no handles open to them

 [1]: https://trueliarx.blogspot.com/2014/07/force-unmount-and-clean-up-of-wim-image.html#comment-form