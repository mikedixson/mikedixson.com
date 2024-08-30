---
title: Finally Solved – Nextcloud SMB Not Working on Ubuntu 20.04
author: Mike
type: post
date: 2020-10-26T00:28:22+00:00
excerpt: |
  php-smbclient has been dropped from the officially repositories and so can only be installed via a PPA.
  Details below:
url: /finally-solved-nextcloud-smb-not-working-on-ubuntu-20-04/
image: /wp-content/uploads/2020/10/pexels-photo-3758105.jpeg
categories:
  - Linux
  - Tech Solutions
  - Ubuntu

---
 

After banging my head against this problem from a different server, as WSL is not there yet for running as personal production services, I finally managed to hit the right keywords to google fu the answer. php-smbclient has been dropped from the officially repositories and so can only be installed via a PPA.

Installing using the following commands finally sorted it for me, credit to Markus (linked below for this solution)

<pre class="wp-block-code"><code>echo "deb http://ppa.launchpad.net/ondrej/php/ubuntu $(lsb_release -cs) main" | tee /etc/apt/sources.list.d/php.list
apt-key adv --recv-keys --keyserver hkps://keyserver.ubuntu.com:443 4F4EA0AAE5267A6C        
apt-get update && apt-get install php-smbclient
phpenmod smbclient
service apache2 restart </code></pre>

  
<a href="https://markus-blog.de/index.php/2020/06/10/how-to-install-nextcloud-19-on-ubuntu-20-04-with-postgresql-12-php7-4-fpm-apache2-and-http-2/" target="_blank" rel="noreferrer noopener">https://markus-blog.de/index.php/2020/06/10/how-to-install-nextcloud-19-on-ubuntu-20-04-with-postgresql-12-php7-4-fpm-apache2-and-http-2/</a>