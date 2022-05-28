---
title: 'SOLVED: Windows DHCP – Search for a MAC Address'
author: Mike
type: post
date: 2018-11-27T13:14:06+00:00
excerpt: Get-DhcpServerv4Scope | Get-DhcpServerv4Lease -EA SilentlyContinue -ClientId xx-xx-xx-xx-xx-xx
url: /windows-dhcp-search-for-a-mac-address/
categories:
  - Microsoft
  - Powershell
  - Tech Solutions
  - Windows
tags:
  - dhcp
  - mac
  - mac address
  - server
  - windows
  - windows server

---
This is a super succinct method of finding a mac address on a Window s DHCP server: <https://thewayeye.net/2016/10/8/find-a-mac-microsoft-dhcp>

<pre class="wp-block-code"><code>Get-DhcpServerv4Scope | Get-DhcpServerv4Lease -EA SilentlyContinue -ClientId xx-xx-xx-xx-xx-xx</code></pre>