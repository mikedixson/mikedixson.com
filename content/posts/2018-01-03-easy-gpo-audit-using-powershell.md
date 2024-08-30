---
title: Easy GPO Audit Using Powershell
author: Mike
type: blog
date: 2018-01-03T08:25:44+00:00
excerpt: >
  By using the following powershell I was able to within minutes provide useful
  information on the state of the GPOs.


  get-gpo -all | select Displayname,ID,Description,GPOStatus,CreationTime,ModificationTime,@{Label="ComputerVersion";Expression{$_.computer.dsversion}},@{Label="UserVersion";Expression={$_.user.dsversion}}| export-csv gpo-audit.csv
url: /easy-gpo-audit-using-powershell/
categories:
  - Microsoft
  - Powershell
  - Tech Solutions
  - Windows
tags:
  - computerversion
  - csv
  - export-csv
  - gpo
  - gpos
  - group policy
  - power
  - power shell
  - powershell
  - shell
  - userversion
  - windows
preview: /GPO.png
image: /GPO.png
---
After poking around the Group Policy Objects (GPO) of an infrastructure that was new to me I needed a decent way of producing a quick and useful report on the state of the GPOs.

Because the ComputerVersion and UserVersion numbers are listed as two figures, one for AD and one for Sysvol just an export-csv of get-gpo left me with blank ComputerVersion and UserVersion.

I found this post: <https://community.spiceworks.com/topic/551588-get-gpo-userversion-and-computerversion-troubles>

By using the following powershell I was able to within minutes provide useful information on the state of the GPOs.

`get-gpo -all | select Displayname,ID,Description,GPOStatus,CreationTime,ModificationTime,@{Label="ComputerVersion";Expression={$_.computer.dsversion}},@{Label="UserVersion";Expression={$_.user.dsversion}}| export-csv gpo-audit.csv`

A small bit of conditional formatting later and we can see that the Domain GPO has a large amount of user setting edits and should be split into a user only GPO and a computer GPO (I won&#8217;t go into where these GPOs should be linked at this stage).<a href="http://mikedixson.com/2018/01/easy-gpo-audit-using-powershell/gpo_audit_snip/" rel="attachment wp-att-720"><br /> <img loading="lazy" class="aligncenter size-large wp-image-720" src="http://mikedixson.com/wp-content/uploads/2018/01/GPO_audit_snip-1024x128.png" alt="A snipping of an excel spreadsheet with colour coding providing meaning to the figures" width="604" height="76" srcset="/wp-content/uploads/2018/01/GPO_audit_snip-1024x128.png 1024w, /wp-content/uploads/2018/01/GPO_audit_snip-300x38.png 300w, /wp-content/uploads/2018/01/GPO_audit_snip-768x96.png 768w, /wp-content/uploads/2018/01/GPO_audit_snip.png 1111w" sizes="(max-width: 604px) 100vw, 604px" /></a>

<a href="https://www.vecteezy.com/free-vector/policy">Policy Vectors by Vecteezy</a>