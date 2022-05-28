---
title: How to clean up after removing a package via apt-get
author: Mike
type: post
date: 2014-08-14T14:14:31+00:00
excerpt: "Say you install a package via apt-get like lubuntu-desktop. There's a ton of dependencies and apps that get installed because of one simple meta-package install."
url: /how-to-clean-up-after-removing-a-package-via-apt-get/
categories:
  - Linux
  - Tech Solutions
  - Ubuntu

---
Say you install a package via apt-get like lubuntu-desktop. There&#8217;s a ton of dependencies and apps that get installed because of one simple meta-package install.  
If you remove lubuntu-desktop only a small amount of that gets removed. I wanted to dejunk a server and so used the following commands to check what else was installed and to remove them all.

Look at the dependencies to make sure those are what you want to remove  
`sudo apt-cache depends lubuntu-desktop`  
Remove these dependencies  
`sudo apt-cache depends lubuntu-desktop | awk 'NF && /Depends:/ {print "sudo apt-get -y remove "$2}' | sh`  
Clean up the related dependencies  
`sudo apt-get autoremove`