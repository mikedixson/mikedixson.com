---
title: Posting on the go with Hugo
description: "With Front Matter CMS, publish your blog post anytime, anywhere! Learn how to write and deploy blog posts with ease using Github Actions and Hugo. Let your ideas flow while on the move. Check out the step-by-step guide. #blogging #Hugo #GithubActions"
date: 2024-09-08T11:46:45.255Z
preview: /images/Designer (1).png
draft: false
tags:
  - Blogging
  - Deployment
  - GitHub Actions
  - Hugo
  - Markdown
  - Mobile
  - S3
  - Workflow
categories:
  - Blogging
  - CICD
  - How To
  - Hugo
  - Technology
author: Mike Dixson
type: featured
excerpt: |-
  After getting the site back up I made a blog post about my use of AI/ML. 

  It got me thinking I'd like to be able to  work on posts whenever the ideas come to me, including when out and about.
url: ""
image: /images/Designer (1).png
---
It's been on my Todo list to give my site some attention for a while, and Google moving my DNS hosting to square space, who don't support a cname on the naked domain (i.e. mikedixson.com ) meant the site went down, which gave me the kick up the bum I needed. 

After getting the site back up I made a blog post it had been on my mind to about my day to day use of AI/ML. 

It got me thinking though, that I'd like to be able to more easily work on posts whenever the ideas come to me, including when out and about. 

This site is a static site generated using the Hugo site generator hosted on S3. In order to write a new post from a mobile device there would need to be some kind of process involved. 

Articles are written in MarkDown (not my favourite simplified mark up language but it's everywhere so necessary) and then the Hugo site generator uses templates and the markdown files to generate the html and upload them to S3. 

Writing posts on the move isn't too much hassle as the Markor app does the job pretty nicely. I've even made a [FrontMatter](https://www.markdowntoolbox.com/blog/common-front-matter/) template so I've got all the relevant [FrontMatter](https://www.markdowntoolbox.com/blog/common-front-matter/) fields ready to go.

Publishing them though, that needs the real workflow.

The easiest way to approach this was to create a github workflow. I already had a github repo for the contents of the site so it was a no brainer.

There was already a Hugo action, but this was to deploy to Github pages. As a little proof of concept I implemented this. I tested the files were published in Github pages. Bingo.

I gave the response speed a test to see if maybe I should remove aws from the equation completely.
Alas there was enough of a speed drop that I thought I'd leave it where it was on AWS S3.

Sooooo I needed to customise the workflow to upload the Hugo deploy files to my S3 bucket.

I modified the build section to use a generic upload to artifacts and then created a deploy section that downloads the build artifacts, the runs the hugo deploy command to deploy to the target defined in my hugo.toml configuration.
Thankfully my user of Gitlab CI/CD yaml meant I was able to get a handle on the GitHub Actions pretty easily. Getting up to speed on pre-made actions that you could use, such as the artifacts upload and download, too a little research to find what action I needed but it wasn't a speed bump for me.

I use environment variable to handle the credentials so that the credentials are securely stored in my Github account and not in code :) 

Now I all I need to do is either edit or upload a markdown file, with the relevant FrontMatter, to my GitHub repository, the action runs and the post is published.

Here's the working git hub action below.
When I get a chance I'll tidy it up a bit more and then I can share as a ready to go github action for others to use.

```
# Sample workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ["main"]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    env:
      HUGO_VERSION: 0.128.0
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb
      - name: Install Dart Sass
        run: sudo snap install dart-sass
      - name: Checkout
        uses: actions/checkout@v4
        with:
          submodules: recursive
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Build with Hugo
        env:
          HUGO_CACHEDIR: ${{ runner.temp }}/hugo_cache
          HUGO_ENVIRONMENT: production
        run: |
          hugo \
            --minify
      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: public
          path: ./public
          
# Deployment job
  deploy:
    runs-on: ubuntu-latest
    needs: build
    env:
      AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
      AWS_REGION: ${{ secrets.AWS_REGION }}
      S3_BUCKET_NAME: ${{ vars.S3_BUCKET_NAME }}
      HUGO_ENVIRONMENT: production
      HUGO_VERSION: 0.128.0
    steps:
    - name: Install Hugo CLI
      run: |
        wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-amd64.deb \
        && sudo dpkg -i ${{ runner.temp }}/hugo.deb
    - name: Checkout
      uses: actions/checkout@v4
    - name: Download artifact
      uses: actions/download-artifact@v4
      with:
        name: public
        path: ./public
    - name: Deploy Site to S3
      run: |
        hugo \
        deploy
  ```
  
