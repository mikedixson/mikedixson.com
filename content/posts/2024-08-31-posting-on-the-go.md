---
title: Posting on the go
description: ""
date: 2024-08-30T23:32:34.686Z
preview: ""
draft: true
tags: []
categories: []
author: ""
type: default
excerpt: ""
url: ""
image: ""
---
It's been on my Todo list to give my site some attention for a while, and Google moving my DNS hosting to square space, who don't support a cname on the naked domain (i.e. mikedixson.com ) meant the site went down, which gave me the kick up the bum I needed. 

After getting the site back up I made a blog post it had been on my mind to about my day to day use of AI/ML. 

It got me thinking though, that I'd like to be able to more easily work on posts whenever the ideas come to me, including when out and about. 

This site is a static site generated using the Hugo site generator hosted on S3. In order to write a new post from a mobile device there would need to be some kind of process involved. 

Articles are written in MarkDown (not my favourite simplified mark up language but it's everywhere so necessary) and then the Hugo site generator uses templates and the markdown files to generate the html and upload them to S3. 

Writing posts on the move isn't too much hassle as the Markor app does the job pretty nicely. 

Publishing them though, that needs the real workflow.

The easiest way to approach this was to create a github workflow. I already had a github repo for the contents of the site so it was a no brainer.

There was already a Hugo action, but this was to deploy to Github pages. As a little proof of concept I implemented this. I tested the files were published in Github pages. Bingo.

I gave the response speed a test to see if maybe I should remove aws from the equation completely.
Alas there was enough of a speed drop that I thought I'd leave it where it was.

Sooooo I needed to customise the workflow to upload the Hugo deploy files to my S3 bucket.

