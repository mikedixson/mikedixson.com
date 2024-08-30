---
title: "Solved: RKHunter Useful information in emails"
author: Mike
type: post
date: 2019-11-25T16:41:52+00:00
url: /solved-rkhunter-useful-information-in-emails/
image: /wp-content/uploads/2019/11/8706521946_b98be03a21_z.jpg
categories:
  - Tech Solutions
slug: solved-rkhunter-information-emails
---
I was trying to get this working by configuring the MAIL\_CMD like so: echo -e &#8220;Subject: [rkhunter] Warnings found for ${HOST\_NAME}\n\n&#8221; $(egrep -x &#8220;^\[.\*\] Warning:.\*&#8221; /var/log/rkhunter.log) | sendmail  
It works but included a little extra part of the egrep command for some reason. 

I couldn&#8217;t get around this but then I remembered we were going to be calling this using cronic ( https://habilis.net/cronic/ )  
So I just changed my crontab to: cronic rkhunter &#8211;check &#8211;rwo &#8211;no-mail-on-warning  
Now I get the warnings in a beautiful emails like so: ============================================  


Cronic detected failure or error output for the command:  
rkhunter &#8211;check &#8211;rwo &#8211;no-mail-on-warning

RESULT CODE: 1

ERROR OUTPUT:

STANDARD OUTPUT:  
Warning: The file properties have changed:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; File: /usr/bin/mail  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current inode: 18331&nbsp;&nbsp;&nbsp; Stored inode: 18308  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current file modification time: 1574699160 (25-Nov-2019 16:26:00)  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Stored file modification time : 1574686593 (25-Nov-2019 12:56:33)  
Warning: The file properties have changed:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; File: /usr/bin/mail.mailutils  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Current inode: 18320&nbsp;&nbsp;&nbsp; Stored inode: 18297

START TIME: Mon Nov 25 16:28:01 UTC 2019  
END TIME:&nbsp;&nbsp; Mon Nov 25 16:28:34 UTC 2019 

=========================================