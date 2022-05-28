---
title: Finding out why an Ubuntu reboot is required
author: Mike
type: post
date: 2019-12-16T09:58:45+00:00
url: /finding-out-why-an-ubuntu-reboot-is-required/
image: /wp-content/uploads/2020/07/pexels-photo-1181354.jpeg
categories:
  - Tech Solutions

---
<p class="has-drop-cap">
  You could check for the existence of /var/run/reboot-required just to see if a reboot is needed but it&#8217;s more useful to check the existence and contents of <br /><strong>/var/run/reboot-required.pkgs</strong><br />This will show you a list of the packages that are requiring the reboot so you can triage how important it is.<br />This was found here:
</p><figure class="wp-block-embed-wordpress wp-block-embed is-type-wp-embed is-provider-linux-audit">

<div class="wp-block-embed__wrapper">
  <blockquote class="wp-embedded-content" data-secret="BBpUE0Uftd">
    <a href="https://linux-audit.com/check-required-reboot-on-debian-ubuntu-systems/">Check for a required reboot on Debian and Ubuntu systems</a>
  </blockquote>
</div></figure>