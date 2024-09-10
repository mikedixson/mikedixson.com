---
title: Copying a Sharepoint Page To Another Site
author: Mike
type: post
description: Copying a Sharepoint Page To Another Site should be this much of a pain
date: 2023-07-18T15:03:04.298Z
preview: /images/People_moving_to_new_office_illustration_concept_vector.png
tags:
  - Microsoft
  - Office365
  - Microsoft365
  - PowerAutomate
categories:
  - Tech Solutions
excerpt: A Power Automate Flow to Copy a Sharepoint page to another site
url: /Copying-a-Sharepoint-Page-To-Another-Site/
image: /images/People_moving_to_new_office_illustration_concept_vector.png
slug: copying-sharepoint-page-site
---
After much trawling of the Internet I found an interesting take on the pain of moving a Sharepoint page from one site to another, using Power Automate.

The solution that [RobElliot](https://techcommunity.microsoft.com/t5/user/viewprofilepage/user-id/174092) had [posted](https://techcommunity.microsoft.com/t5/sharepoint/move-copy-sharepoint-pages-from-one-site-to-another-in-classic/m-p/2544668) contained a few manual steps, and knowing colleagues and I had all done this more than once I refined his solution a bit.

Starting with a PowerApps V2 component enables us to capture input from the user for the soure page and destination site.
![Screenshot of the Power Automate Flow](/images/PowerApps-Get_file_metadata_using_path-Copy_file.png)

The slice expressions were created by Power Automate from examples and work for our site(s) so I'll include them in order below. However if you find these don't work in your Sharepoint update them using the expression from examples feature in Power Automate.

**Site Address**

slice(triggerBody()['text'], 0, add(nthIndexOf(triggerBody()['text'], '/', sub(sub(length(triggerBody()['text']), length(replace(triggerBody()['text'], '/', ''))), 1)), 1))

**File Path**

slice(triggerBody()['text'], add(nthIndexOf(triggerBody()['text'], '/', sub(sub(length(triggerBody()['text']), length(replace(triggerBody()['text'], '/', ''))), 1)), 1))

**Current Site Address**

slice(triggerBody()['text'], 0, add(nthIndexOf(triggerBody()['text'], '/', sub(sub(length(triggerBody()['text']), length(replace(triggerBody()['text'], '/', ''))), 1)), 1))

When you run the flow you'll be prompted for the page url which should look like this https://yousite.sharepoint.com/sites/OriginalSiteName/SitePages/Employee-Onboard-Processes.aspx **and** the destination site to copy the page too https://yoursite.sharepoint.com/sites/NewStarters..

**Note** this flow doesn't remove the original page. You can either manually delete the original page or if you like you can add that to the flow.


Image from[Moving Vectors by Vecteezy](https://www.vecteezy.com/free-vector/moving)