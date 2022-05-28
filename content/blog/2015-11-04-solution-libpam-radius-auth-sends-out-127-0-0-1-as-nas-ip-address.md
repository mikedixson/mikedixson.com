---
title: 'Solution: libpam-radius-auth: Sends out 127.0.0.1 as NAS-IP-Address'
author: Mike
type: post
date: 2015-11-04T14:37:36+00:00
url: /solution-libpam-radius-auth-sends-out-127-0-0-1-as-nas-ip-address/
categories:
  - Linux
  - Tech Solutions
  - Ubuntu

---
#### Symptom

When authentication linux to radius using libpam-radius-auth: Sends out 127.0.0.1 as NAS-IP-Address

#### Cause

/etc/hosts file contains the local machine&#8217;s hostname with 127.0.0.1

#### Solution

Either remove the offending line, or before this line place the correct ip address with the hostname (note that order is important).  
10.0.0.5 computerName  
127.0.0.1 computerName