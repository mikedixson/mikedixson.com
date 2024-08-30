---
title: Mac OS X’s Hidden FTP Server
author: Mike
type: post
date: 2014-01-27T14:51:32+00:00
url: /mac-os-xs-hidden-ftp-server/
image: /wp-content/uploads/2014/01/380px-FileZilla_logo.svg_.png
categories:
  - Security
  - Technology
tags:
  - apple
  - built in
  - file
  - free
  - ftp
  - hidden
  - mac
  - os
  - osx
  - protocol
  - server
  - transfer
  - x

---
Seeing as there is already the capability to run a built in ftp server on OS X why bother downloading and potentially paying for one?

## Starting the OS X FTP Server

<pre>sudo -s launchctl load -w /System/Library/LaunchDaemons/ftp.plist</pre>

## Stopping the OS X FTP Server

<pre>sudo -s launchctl unload -w /System/Library/LaunchDaemons/ftp.plist</pre>

You could even easily knock up an Automator app to start and stop this (sod it I might even make one myself).

Sourced from: <http://osxdaily.com/2011/09/29/start-an-ftp-or-sftp-server-in-mac-os-x-lion/>