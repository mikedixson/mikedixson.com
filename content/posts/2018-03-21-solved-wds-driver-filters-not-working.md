---
title: '[Solved] WDS Driver Filters Not Working'
author: Mike
type: post
date: 2018-03-21T11:32:01+00:00
url: /solved-wds-driver-filters-not-working/
categories:
  - Powershell
  - Tech Solutions
  - Windows
tags:
  - filters
  - matching
  - not matching
  - wds

---
Like many people it seems I&#8217;ve been scratching my head as to why  WDS&#8217;s Driver Package Filters were not matching my hardware when imaging a machine that I&#8217;d created a driver package group for.

After looking at [Greg Shields technet post][1] I was convinced I just needed to grab the model name straight off of the machine type beforehand via a powershell WMI get and I&#8217;d be laughing. Alas this still did not work.

I found the best way was to enable the Debug log on WDS, then pull the info directly from what WDS was seeing and use that to create the filters.  
I&#8217;ve also written a powershell script to pull the details from the debug log as otherwise it takes a fair bit of time.  
I&#8217;ve posted this here:  
<https://github.com/mikedixson/Get-SMBios-Strings-From-WDS>

 [1]: https://technet.microsoft.com/en-us/library/hh241327.aspx