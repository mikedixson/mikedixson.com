---
title: Allowing Apple App Store Access Through a Firewall
author: Mike
type: post
date: 2014-01-29T11:19:20+00:00
url: /allowing-apple-app-store-access-through-a-firewall/
image: /wp-content/uploads/2014/01/Apple-App-Store.png
categories:
  - Security
  - Tech Solutions
  - Technology
tags:
  - app store
  - apple
  - firewall
  - ip
  - ports
  - ranges

---
If you allow port 80 and 443 access out of your network then accessing the Apple App Store from behind your firewall it&#8217;s a doddle.

However if you have a more locked down area of a network but have iPads etc that need App Store access here&#8217;s what you need to allow port 80 and 443 access to:

<pre>17.154.0.0/16 Apple's Class B Subnet includes phobos.apple.com address(es)
23.63.98.0/23 Akamai Technologies <abbr title="Content Distribution Network">CDN</abbr></pre>

I appreciate this is a bit of a wide range of addresses, but unless you want to be having to packet capture and analyze where the App store is heading too that week it&#8217;s a reasonable. I doubt anyone would give up a class B IPv4 range nowadays.

Hope that helps some of you out!