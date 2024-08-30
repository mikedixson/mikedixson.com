---
title: Powershell list all properties of an object
author: Mike
type: post
date: 2018-03-08T09:35:22+00:00
excerpt: 'To get all properties of an object you can pipe to format-list *'
url: /powershell-list-all-properties-of-an-object/
categories:
  - Exchange
  - Powershell
tags:
  - exchange
  - exchange online
  - powershell

---
Some powershell get commands only output a handful of the object properties get-CalendarProcessing being one such command, than returns just one property.

To get all properties of an object you can pipe to format-list *  
`get-CalendarProcessing -identity room1@domain.com | Format-List *`

If you know the specific attribute you are after you can still access this variable using select-object.  
`get-CalendarProcessing -Identity room1@domain.com | Select-Object AllowConflicts`