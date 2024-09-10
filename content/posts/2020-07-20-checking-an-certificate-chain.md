---
title: Checking an Certificate Chain
author: Mike
type: post
date: 2020-07-20T15:05:16+00:00
url: /checking-an-certificate-chain/
image: /images/featured-post/security.png
categories:
  - How To
  - Tech Solutions
---
Use the following one liner to check the a certificate chain in detail:

<pre class="wp-block-code"><code>openssl crl2pkcs7 -nocrl -certfile chained.crt | openssl pkcs7 -print_certs -text -noout | less</code></pre>

Use this command to produce a simple list of the chain in order:

<pre class="wp-block-code"><code>echo "" | openssl s_client -connect www.google.com:443 2>&1 | grep -A 6 "Certificate chain"

#If your testing a local server which is listening on the same port for different headers use this:
echo "" | openssl s_client -connect 172.217.169.4:443 -servername www.google.com 2>&1 | grep -A 6 "Certificate chain"</code></pre>