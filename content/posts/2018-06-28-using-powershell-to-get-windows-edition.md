---
title: Using Powershell To Get Windows Edition
author: Mike
type: post
date: 2018-06-28T09:02:09+00:00
excerpt: |
  Powershell: (Get-WmiObject -class Win32_OperatingSystem).Caption
  Results in output like: Microsoft Windows Server 2016 Datacenter
url: /using-powershell-to-get-windows-edition/
categories:
  - Personal

---
Powershell: `(Get-WmiObject -class Win32_OperatingSystem).Caption`

Results in output like: `Microsoft Windows Server 2016 Datacenter`

Thanks to: <a href="https://stackoverflow.com/users/67392/richard" target="_blank" rel="noopener">Stackoverflow User Richard</a>