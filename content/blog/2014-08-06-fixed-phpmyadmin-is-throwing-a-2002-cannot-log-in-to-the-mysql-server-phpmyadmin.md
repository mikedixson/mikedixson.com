---
title: 'Fixed: phpMyAdmin is throwing a #2002 cannot log in to the mysql server phpmyadmin'
author: Mike
type: post
date: 2014-08-06T14:48:46+00:00
excerpt: |
  This one had me going round the houses a bit until I the wrong permissioned confirmed something to me.
  Firstly the /etc/phpmyadmin/config.inc.php file is crud.
url: /fixed-phpmyadmin-is-throwing-a-2002-cannot-log-in-to-the-mysql-server-phpmyadmin/
categories:
  - Linux
  - Technology
  - Tips
  - Web
  - websites
tags:
  - 2002
  - mysql
  - phpmyadmin
  - server

---
This one had me going round the houses a bit until I the wrong permissions confirmed something to me.  
Firstly the `/etc/phpmyadmin/config.inc.php` file is crud. For some reason this file doesn&#8217;t resemble the actual config file that you should use.  
The file `/usr/share/phpmyadmin/config.sample.inc.php` is the format that you need for a correct phpMyAdmin configuration, so copy it to `/etc/phpmyadmin/config.inc.php`

Next you need to edit this config file. This isn&#8217;t the hardest of the things in the world to do if you just want the basics. You just need to edit the value for `$cfg['Servers'][$i]['host']`

Once you&#8217;ve done that you can then login to phpMyAdmin using your mySQL credentials and get started.  
It will bitch about not having the advanced features enabled. To do this follow the blog post I did at [INSTALLING PHPMYADMIN ADVANCED FEATURES ON UBUNTU][1]

Make sure you log out and back in to pick up the changes.

Enjoy,  
Mike

 [1]: http://mikedixson.com/2014/08/installing-phpmyadmin-advanced-features-on-ubuntu/ "INSTALLING PHPMYADMIN ADVANCED FEATURES ON UBUNTU"