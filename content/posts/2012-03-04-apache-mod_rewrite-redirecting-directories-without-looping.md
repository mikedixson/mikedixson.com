---
title: Apache mod_rewrite Redirecting Directories Without Looping
author: Mike
type: post
date: 2012-03-04T03:55:21+00:00
url: /apache-mod_rewrite-redirecting-directories-without-looping/
categories:
  - Ideas
  - internet
  - websites

---
Wow! It&#8217;s true what they say, mod_rewrite rules are a dark art, and whilst I&#8217;ve combed the Internet to find, what I thought would be a simple redirect, I&#8217;ve found countless examples that didn&#8217;t work.  
So now I have one that does work I&#8217;m sharing.

# Goal

To redirect hits to a subdomain sshwindows.webheat.co.uk to a subdirectory (in my case cause that is the link to the page within my wiki) /display/sshwindows/

Traffic to any other domain hosted on this same server should **not** be redirected.

All **without looping**.

# Solution

Check **two** conditions not just one. Check the host header **and** the uri to ensure the root had been hit, and only then redirect.

# Code

`RewriteEngine On<br />
RewriteCond %{HTTP_HOST} ^sshwindows.webheat.co.uk$ [NC]<br />
RewriteCond %{REQUEST_URI} /$<br />
RewriteRule ^(.*)?$ http://sshwindows.webheat.co.uk/display/sshwindows [L]`  
For me I put this into my /etc/apache2/sites-enabled/000-default file, but you can equally put this into a .htaccess file. For me this was to be a global thing.

# Additional Notes

The [nc] is the no-case flag to make the host header match case-insensitive.  
The [L] is the Last flag, so after this rule no further ones will be processed. In all honesty I don&#8217;t need this here, but that part came from another source and it&#8217;s 4am so I&#8217;ll be damned if I&#8217;m going to remove it now when it&#8217;s all working 🙂