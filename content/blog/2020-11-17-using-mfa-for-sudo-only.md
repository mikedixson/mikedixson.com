---
title: Using MFA for Sudo Only
author: Mike
type: post
date: 2020-11-17T11:25:40+00:00
url: /using-mfa-for-sudo-only/
image: /images/pincode-login.png
categories:
  - Tech Solutions

---
Passwords are weak, we know this and so often methods such as key based authentication is used for connections like SSH. However once SSH&#8217;d in to the system using a password to elevate to root seems like a weak point just where you want to be more secure.

<pre class="wp-block-code"><code># sudo apt-get install libpam-google-authenticator</code></pre>

<pre class="wp-block-code"><code># sudo google-authenticator</code></pre>

This will then prompt you with a number of choices. The first you should answer yes to enable TOTP.

To enable MFA codes to be used for authentication for sudo add the following line to /etc/pam.d/sudo just before the @ includes.

<pre class="wp-block-code"><code># nano /etc/pam.d/sudo
Comment out these lines:
#@include common-auth
#@include common-account
#@include common-session-noninteractive

And add these
auth       required pam_google_authenticator.so nullok
auth       required pam_permit.so</code></pre>

Once set up and tested you can disable the password on your account using

<pre class="wp-block-code"><code># passwd -l</code></pre>

Make sure you think thru the possible scenarios for using this technology and securely take a copy of your backup keys incase you lose your MFA device etc.

You can remove the nullok once all users have been set up with a secret key via google-authenticator.


Image Source: <a href="https://iconscout.com/icons/pincode-login" target="_blank">Pincode login Icon</a> by <a href="https://iconscout.com/contributors/chanut-is-industries" target="_blank">Chanut Is Industries</a>