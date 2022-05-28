---
title: 'Fixed – Jira: An internal server error occurred when requesting resource'
author: Mike
type: post
date: 2013-07-24T09:15:23+00:00
url: /jira-an-internal-server-error-occurred-when-requesting-resource-fixed/
image: /wp-content/uploads/2013/07/logoJIRAPNG.png
categories:
  - Tech Solutions
tags:
  - An internal server error occurred when requesting resource
  - atlassian
  - error
  - internal
  - jira
  - occurred
  - requesting
  - resource
  - server

---
# Jira Gadget Error

At work we use Atlassian&#8217;s Jira as our support ticket tracking tool.  
Recently we experienced an issue where all Gadgets on the dashboards gave the error: An internal server error occurred when requesting resource

# &#8220;An internal server error occurred when requesting resource&#8221; Solution &#8211; for us

The solution for us was to extend the drive that housed the home directory for Jira. This has become full and this was adversely affecting gadget rendering. Likely because the temporary working directory is within the home directory.

Hope that helps some other Jira users out there.