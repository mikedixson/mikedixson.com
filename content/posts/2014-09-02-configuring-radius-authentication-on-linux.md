---
title: Configuring Radius Authentication on Linux
author: Mike
type: post
date: 2014-09-02T08:39:39+00:00
url: /configuring-radius-authentication-on-linux/
categories:
  - How To
  - Linux
  - Security
  - Tech Solutions
tags:
  - authenticate
  - Authentication
  - Configuring
  - debian
  - linux
  - login
  - pam
  - pam_radius_auth.so
  - Radius
  - ssh
  - su
  - tutorial
  - UBUNTU

---
  1. Install libpam-radius-auth  
    `sudo apt-get install libpam-radius-auth`
  2. Configure libpam-radius-auth with your radius servers and secrets  
    `sudo pico /etc/pam_radius_auth.conf`
  3. Set permissions on /etc/pam\_radius\_auth.conf  
    `sudo chmod 0600 /etc/pam_radius_auth.conf`
  4. Add `auth sufficient pam_radius_auth.so` to `/etc/pam.d/login` and then the following as desired just **above** the line reading _@include common-auth_  
    `/etc/pam.d/sshd<br />
/etc/pam.d/sudo<br />
/etc/pam.d/su`
  5. Add try\_first\_pass to auth line in /etc/pam.d/common-auth  
    `auth [success=1 default=ignore] pam_unix.so nullok_secure try_first_pass`
  6. Make user locally with disabled password  
    `sudo useradd -m USERNAME`  
    or to add a user and add to the sudo group  
    `sudo useradd -m -G sudo USERNAME`

Ta Da!

_The one caveat that I&#8217;ve found with this is that when logging in with local users <span style="color: #000000;">to the local console</span> you are prompted for a password twice, this is fixed via step 5 but note that if you run pam-auth-update this change will be overwritten._