---
title: 'SOLVED: Windows does not have enough information to verify the certificate'
author: Mike
type: post
date: 2018-09-21T12:27:08+00:00
excerpt: 'Move the intermediate certificate to the Intermediate Certificate Authority>Certificates store'
url: /solved-windows-does-not-have-enough-information-to-verify-the-certificate/
categories:
  - Tech Solutions
  - Windows
tags:
  - active directory
  - ad federation services
  - ad fs
  - adfs
  - certificate
  - certificates
  - solution
  - solved
  - verify

---
# Problem

When moving from one ADFS server to another I imported a full certificate chain and private key into Machine certs on the new Windows 2016.  
The certificate displayed fine and chain is complete.

**However** viewing the certificate properties via ADFS the certificate information gives the error &#8220;Windows does not have enough information to verify the certificate&#8221;

# Solution

Move the intermediate certificate to the Intermediate Certificate Authorities > Certificates store

It seems stupidly obvious in retrospect but Windows itself could view the cert fine, and the import was done via Machine Certificates so you&#8217;d think it would put things in the right place.