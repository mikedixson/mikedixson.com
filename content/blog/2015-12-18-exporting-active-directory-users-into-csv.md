---
title: Exporting Active Directory Users Into CSV
author: Mike
type: post
date: 2015-12-18T19:03:06+00:00
url: /exporting-active-directory-users-into-csv/
categories:
  - Tech Solutions
tags:
  - active
  - active directory
  - ad
  - directory
  - security

---
It took far too long to find this very very useful command online so I thought I&#8217;d repost to help others find it.  
The below command exports as follows:  
Connection to server: domain.local  
Exporting attributes: whenChanged,whenCreated,cn,sAMAccountName,givenName,sn  
From DN Root: DC=domain,DC=local  
Into File: domain.local-users.csv  
`csvde -s domain.local -l "whenChanged,whenCreated,cn,sAMAccountName,givenName,sn" -d "DC=domain,DC=local" -f domain.local-users.csv`