---
title: 'Fixed: LXDE-core startlxde gives Gtk-WARNING **: cannot open display: error message'
author: Mike
type: post
date: 2014-08-14T14:44:46+00:00
url: /fixed-lxde-core-startlxde-gives-gtk-warning-cannot-open-display-error-message/
image: /wp-content/uploads/2014/08/Lubuntu_first_logo.svg_.png
categories:
  - Linux
  - Tech Solutions
  - Ubuntu

---
I&#8217;d be tasked with installing a GUI on a server for someone else to use. I opted for LXDE as it&#8217;s so lightweight and I just wanted the core, no extra gumph. I ran into an issue launching lxde once I&#8217;d installed it. Here&#8217;s how I fixed it:

# Installed LXDE Core  
`sudo apt-get install lxde-core`

I then went to try startx, how I&#8217;d normally start a shell if I&#8217;d installed gnome or such, startx didn&#8217;t exist, so I tired startlxde. It came back with the error &#8220;_Gtk-WARNING **: cannot open display:_&#8221;  
After a bit of searching online I found some people were saying about .xinitrc, but I didn&#8217;t have an xinit&#8230;. neither did it seem that I had xinit. So I tried the following with instant success

# The Fix

## Install xinit  
`sudo apt-get install xinit`

## Start X  
`startx`