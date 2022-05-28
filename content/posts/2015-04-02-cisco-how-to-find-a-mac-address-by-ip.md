---
title: Cisco How To Find A MAC Address By IP
author: Mike
type: post
date: 2015-04-02T11:07:31+00:00
url: /cisco-how-to-find-a-mac-address-by-ip/
categories:
  - Cisco
  - How To
  - Personal
  - Tech Solutions
  - Technology
  - Technology

---
From a switch that the device is plugged directly into (otherwise you&#8217;ll get the MAC of the next hop) first ping the IP address to ensure it&#8217;s in your ARP cache, then view the ARP cache, like so  
`ping 192.168.1.1`  
`show ip arp | i 192.168.1.1`

The _pipe i_ just ensures you only see the info you&#8217;re after. If you&#8217;re doing this on a switch with many devices it&#8217;s handy to pear it down to just what you need.