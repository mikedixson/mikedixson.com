---
title: 'FIXED: Ubuntu Not Seeing More Than 2TB of a Disk'
author: Mike
type: post
date: 2014-08-04T10:16:42+00:00
excerpt: "If Ubuntu/Linux isn't seeing all of a disk over 2TB it may be because the partition table is not set to GTP. This post shows how to change the partition table and resize the disk."
url: /fixed-ubuntu-not-seeing-more-than-2tb-of-a-disk/
categories:
  - Linux
  - Tech Solutions
  - Tips
tags:
  - 2tb
  - disk
  - gpt
  - guid
  - linux
  - partition
  - resize
  - tb
  - UBUNTU

---
# WARNING! Backup your data before proceeding!

For me this process didn&#8217;t destroy the data. I completely expected it to, but it didn&#8217;t. Make sure you backup in case you&#8217;re not as fortunate.

Move into Single Users Mode  
`sudo init 1`

Unmount partition in question  
`sudo umount /mnt/disk1`

Launch PartEd pointing at the disk in question  
`sudo parted /dev/sdb<br />
`  
Make the Partition Table GPT  
`mklabel gpt<br />
`  
Accept the warning and quit PartEd  
`Warning: The existing disk label on /dev/sdb will be destroyed and all data on this disk will be lost. Do you want to continue?<br />
Yes/No? yes<br />
(parted)<br />
quit`

Check the disk (resize2fs required this before it would resize the partition)  
`sudo e2fsck -f /dev/sdb1`

Resize the partition to fill the total available disk space  
`sudo resize2fs /dev/sdb1`

Mount the disk again  
`sudo mount /mnt/disk1`

## And hey presto!