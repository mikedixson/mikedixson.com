---
title: 'FIXED: Varnish Caching Proxy Expected an action, ‘if’, ‘{‘ or ‘}’'
author: Mike
type: post
date: 2017-02-10T23:57:25+00:00
url: /fixed-varnish-caching-proxy-expected-an-action-if-or/
categories:
  - Linux
  - Ubuntu

---
So it seems Varnish 4.0 and 4.1 (more may be affected this is the limit of my testing presently) has a bug where some whitespace can through it from recognising valid configuration such as below  
`# ACLs to control who can access this caching proxy server<br />
acl local {<br />
"127.0.0.0"/8; /* loopback range */<br />
"192.168.1.0"/29; /* local network range 192.168.1.0-192.168.1.7 */<br />
"10.0.0.0"/8; /* For testing on own hown network - REMOVE FOR PRODUCTION */<br />
}`

######################  
\# Urls to cache  
\# /api/3.0/artists/  
\# /api/3.0/venues/  
#####################

sub vcl_recv {  
\# Happens before we check if we have this in cache already.  
#  
\# Typically you clean up the request here, removing cookies you don&#8217;t need,  
\# rewriting the request, etc.

if (client.ip !~ local ) {  
{error 403 &#8220;Access denied&#8221;;}  
}  
return (lookup);

\# We only want to cache GET request  
if (req.request == &#8220;GET&#8221;) {  
return(hash);  
}  
}

&nbsp;

This was due to a bad code merge cited here <https://github.com/nexcess/magento-turpentine/pull/1311>

You can resolve this by manually removing the whitespace by using the command below

`cat default-withWhiteSpace.vcl | tr -d " \t\n\r" > default.vcl`