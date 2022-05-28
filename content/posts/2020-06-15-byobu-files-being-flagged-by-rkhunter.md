---
title: BYOBU files being flagged by rkhunter
author: Mike
type: post
date: 2020-06-15T13:53:43+00:00
url: /byobu-files-being-flagged-by-rkhunter/
image: /wp-content/uploads/2020/07/pexels-photo-3662579.jpeg
categories:
  - Tech Solutions

---
 

Add the following to your /etc/rkhunter.conf file

<pre class="wp-block-code"><code>#Config to add byobu files to your allow list
ALLOWHIDDENDIR=/dev/shm/byobu-*-????????/.last.tmux
ALLOWDEVFILE=/dev/shm/byobu-*-????????/.last.tmux/*
ALLOWDEVFILE=/dev/shm/byobu-*-????????/*/*
ALLOWDEVFILE=/dev/shm/byobu-*-????????/*
ALLOWDEVFILE=/dev/shm/sem.*</code></pre>

[Ref: https://bugs.launchpad.net/ubuntu/+source/rkhunter/+bug/1776632][1]

 [1]: https://bugs.launchpad.net/ubuntu/+source/rkhunter/+bug/1776632