---
title: Linux CP Making a Backup of a file with a user defined suffix
author: Mike
type: post
date: 2017-02-09T20:34:10+00:00
excerpt: |
  cp haproxy.cfg{,.20170209}
  
  The above command copies haproxy.cfg into a file called haproxy.cfg.20170209
  Anything after the comma can be changed as you wish.
url: /linux-cp-making-a-backup-of-a-file-with-a-user-defined-suffix/
categories:
  - Personal

---
I use this handy command so often that I&#8217;d forgotten to make a note of it here for everyone.

If you want to make a copy of a file with the same filename and a predetermined suffix of your choice then run this command replaceing the YYYYMMDD date with anything you want:

`cp haproxy.cfg{,.20170209}`

The above command copies haproxy.cfg into a file called haproxy.cfg.20170209  
Anything after the comma can be changed as you wish.