---
title: Running Byobu by Default on Zsh
author: Mike
type: post
date: 2019-11-24T22:21:55+00:00
url: /running-byobu-by-default-on-zsh/
image: /wp-content/uploads/2020/07/pexels-photo-207580.jpeg
categories:
  - Tech Solutions

---
## To make Byobu default on your local machine

Byobu-enable only currently modifies your .bashrc and .bash_profile, to get byobu launching by default with Zsh you need to follow these instruction

<pre class="wp-block-code"><code>Add the following line to the bottom of your ~/.zshrc</code></pre>

<pre class="wp-block-preformatted">_byobu_sourced=1 . /usr/bin/byobu-launch 2&gt;/dev/null || true</pre>

## To make Byobu default when SSH&#8217;ing into a machine

Add the same line to the bottom of ~/.zprofile

Update: I&#8217;ve not been able to get this working on AWS. I&#8217;m using Ubuntu&#8230; anyone got any additional tips