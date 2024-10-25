---
title: Bulk Clearing Scheduled Downtime in Nagios
description: It's a pain to clear Nagios scheduled downtime via the web console for many services. This bash script clears them all for you.
date: 2024-10-25T11:41:07.210Z
preview: /images/Nagios Scheduled Downtime.webp
draft: true
tags: []
categories:
    - Tech Solutions
author: Mike Dixson
type: "post"
excerpt: |-
    When you schedule downtime for all services of a host, there's a Nagios button for that. But not for removing scheduled downtime.
    I've created a bash script to clear the scheduled downtime for the services and host
url: ""
image: /images/Nagios Scheduled Downtime_thumbnail.webp
format: ""
keywords:
    - downtime
    - nagios
    - scheduled downtime
    - nagios.cmd
slug: bulk-clearing-scheduled-downtime-nagios
---
# The problem with removing Nagios scheduled downtime

When you schedule downtime for all services of a host, there's a Nagios button for that. A simple few clicks and you're done.

However, if you finish your downtime quicker than expected and want to clear the scheduled downtime then you have to click thru to each service, click on the trash can of the downtime, then click confirm on the next page. If you have a server with 10 services, that's 20 clicks right there to clear downtime for one server!

# The Solution

You can send commands to the nagios.cmd named pipe which will then be processed by the Nagios service.

I've created a bash script to grab the names off all of the hosts services and then sends the commands to clear the scheduled downtime for the services and host

I've shared this script here:

[https://github.com/mikedixson/useful-shell-scripts/blob/main/nagios-clear-servce-downtime-for-host.cmd](https://github.com/mikedixson/useful-shell-scripts/blob/main/nagios-clear-servce-downtime-for-host.cmd)

*The user you run it as will need to be in the www-data group as that has permission on the nagios.cmd pipe file.
Check External commands also needs to be enabled in your nagios config: check_external_commands=1*