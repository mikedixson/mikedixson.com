---
title: Cleaning Up Linux Headers
author: Mike
type: post
date: 2014-10-09T09:58:51+00:00
url: /cleaning-up-linux-headers/
categories:
  - Linux
  - Tech Solutions
  - Ubuntu

---
Make sure you&#8217;ve rebooted **BEFORE** running any of these commands so that you are actively using the latest kernel.

`dpkg -l 'linux-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d' | xargs sudo apt-get -y purge`

If you&#8217;ve had a previous apt-get install fail due to disk space issues and you&#8217;re trying to clean up the linux headers to free disk space run the below command which will force the purge  
`dpkg -l 'linux-*' | sed '/^ii/!d;/'"$(uname -r | sed "s/\(.*\)-\([^0-9]\+\)/\1/")"'/d;s/^[^ ]* [^ ]* \([^ ]*\).*/\1/;/[0-9]/!d' | xargs sudo apt-get -y -f purge`