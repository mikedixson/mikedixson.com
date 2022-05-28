---
title: Google Hangouts Firewall Ports
author: Mike
type: post
date: 2013-01-16T14:28:40+00:00
url: /google-talk-firewall-ports/
categories:
  - Android
  - Personal
  - Technology
tags:
  - firewall
  - google
  - google talk
  - ports
  - talk

---
Our firewall was configured as per Google&#8217;s documentation to allow the Google Hangouts nee Talk client and the Android Google Hangouts app to connect. but to no avail.  
With a little bit of troubleshooting I found that an additional port needed to be opened too. So here&#8217;s the firewall ports you need to open for Google Talk:

  * 80 TCP
  * 443 TCP
  * 19302 &#8211; 19309 TCP and UDP
  * Additional Ports for various clients  
    <table>
      <tr>
        <td>
          Ports
        </td>
        
        <td>
          Clients
        </td>
      </tr>
      
      <tr>
        <td>
          5222, 5223, 5224
        </td>
        
        <td>
          XMPP clients
        </td>
      </tr>
      
      <tr>
        <td>
          5228 and 5229
        </td>
        
        <td>
          Android phones
        </td>
      </tr>
      
      <tr>
        <td>
          5269
        </td>
        
        <td>
          XMPP federation
        </td>
      </tr>
    </table>

This information was taken from  <a title="Optimize your network for Hangouts" href="https://support.google.com/a/answer/1279090?hl=en" target="_blank" rel="noopener">Optimize your network for Hangouts </a>

I hope that helps some of you out there.

Mike

&nbsp;