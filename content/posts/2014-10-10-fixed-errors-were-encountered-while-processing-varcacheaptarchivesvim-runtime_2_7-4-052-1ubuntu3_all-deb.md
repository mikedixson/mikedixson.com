---
title: '[FIXED] Errors were encountered while processing:  /var/cache/apt/archives/vim-runtime_2%3a7.4.052-1ubuntu3_all.deb'
author: Mike
type: post
date: 2014-10-10T15:49:51+00:00
url: /fixed-errors-were-encountered-while-processing-varcacheaptarchivesvim-runtime_2:7-4-052-1ubuntu3_all-deb/
categories:
  - Linux
  - Tech Solutions
  - Ubuntu

---
# Problem: vim install fails during dist-upgrade and running sudo apt-get -f install gives the error below  
``syslog:/var/syslog-ng/wcs$ sudo apt-get -f install<br />
Reading package lists... Done<br />
Building dependency tree<br />
Reading state information... Done<br />
Correcting dependencies... Done<br />
The following extra packages will be installed:<br />
vim-runtime<br />
The following packages will be upgraded:<br />
vim-runtime<br />
1 to upgrade, 0 to newly install, 0 to remove and 0 not to upgrade.<br />
44 not fully installed or removed.<br />
Need to get 0 B/4,888 kB of archives.<br />
After this operation, 412 kB of additional disk space will be used.<br />
Do you want to continue? [Y/n] y<br />
(Reading database ... 64153 files and directories currently installed.)<br />
Preparing to unpack .../vim-runtime_2%3a7.4.052-1ubuntu3_all.deb ...<br />
Leaving 'diversion of /usr/share/vim/vim74/doc/help.txt to /usr/share/vim/vim74/doc/help.txt.vim-tiny by vim-runtime'<br />
Adding 'diversion of /usr/share/vim/vim74/doc/tags to /usr/share/vim/vim74/doc/tags.vim-tiny by vim-runtime'<br />
dpkg-divert: error: rename involves overwriting `/usr/share/vim/vim74/doc/tags.vim-tiny' with<br />
different file `/usr/share/vim/vim74/doc/tags', not allowed<br />
dpkg: error processing archive /var/cache/apt/archives/vim-runtime_2%3a7.4.052-1ubuntu3_all.deb (--unpack):<br />
subprocess new pre-installation script returned error exit status 2<br />
Processing /usr/share/vim/addons/doc<br />
Errors were encountered while processing:<br />
/var/cache/apt/archives/vim-runtime_2%3a7.4.052-1ubuntu3_all.deb<br />
E: Sub-process /usr/bin/dpkg returned an error code (1)``

# Fix

All of the issues seemed to be down to the doc folder, nuking it meant that the install completed successfully  
`sudo rm -fR /usr/share/vim/vim74/doc/`