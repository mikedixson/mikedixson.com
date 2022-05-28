---
title: Reverse Timesheeting
author: Mike
type: post
date: 2012-01-10T09:54:11+00:00
url: /reverse-timesheeting/
categories:
  - Productivity
  - Technology
tags:
  - Timesheet time productivity

---
I&#8217;m lazy and forgetful, not in a bad way, but I don&#8217;t like to do more than I have to if I can simplify something and streamline it, and I have a bad memory for the more mundane things.

So when I was asked to keep a work log I cited some problems. I&#8217;ve no issue with keeping a work log or time sheeting but if I try ad start a timer at the start of a task, or make note of the time, when I remember I&#8217;ve already been doing some other task too and don&#8217;t know how long for.  
And if I keep a sheet next to me or a text file to log what I&#8217;m working in I&#8217;ll forget to fill it out after a while so the data becomes useless.

So I figured there must be a way to passively capture that data, like maybe I could record my screen all day. The problem with that is it&#8217;s going to be a nightmare to scrub thru and take up loads of hard disk space.  
I thought, what if I could just capture my screen every once in a while, a snapshot of what I was doing.

A quick check and sure enough Mac OS X has a screencapture command to do just that.

Here&#8217;s the script

<pre>picdate="whatIworkedOnAt-"$(date +%Y%m%d%H%M)".png"
outputdir="/Users/Mike/Documents/WorkCapture/WorkCapture-"$(date +%Y%m%d)
if [ -d $outputdir ]; then
/usr/sbin/screencapture -xS $outputdir/$picdate
else
mkdir -p $outputdir
/usr/sbin/screencapture -xS $outputdir/$picdate
fi</pre>

&nbsp;