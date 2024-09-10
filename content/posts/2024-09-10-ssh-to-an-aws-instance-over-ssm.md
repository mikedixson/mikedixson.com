---
title: SSH to an AWS Instance over SSM
description: SSH to an AWS Instance over SSM - Learn how to securely connect to your AWS EC2 instances without needing to expose SSH ports.
date: 2024-09-10T22:09:05.453Z
preview: /images/ssh terminal-lrg (Small).png
draft: false
tags:
  - aws
  - ssh
  - powershell
categories:
  - AWS
  - How To
  - Security
author: Mike Dixson
type: featured
excerpt: While you can use an SSH proxy command to connect over SSM to your AWS EC2 instances, you lose the ability to log the session properly
url: ""
image: /images/ssh terminal-sm.png
slug: ssh-aws-instance-ssm
---

## The problem with SSHing to EC2 Instances

### A console by any other name

While you can use an SSH proxy command to connect over SSM to your AWS EC2 instances, if you do, you lose the ability to log the session properly (should you need to) as you're pushing SSH encryption over the SSM encryption and your AWS set up won't be able to decrypt that.

You also need to ensure you have the SSH port open to whereever you're remoting in from.

However, I put together a [PowerShell script](https://github.com/mikedixson/aws-ssm-cli) that makes creating a SSM session connection to your instances just as each as ssh hostname!

## The Solution

The script, located on my GitHub https://github.com/mikedixson/aws-ssm-cli performs the following actions:

1. It looks up the instance ID based on the hostname you provide as an argument i.e. ssm host1 ➡️ get's looked up and the host's instance ID comes back.

2. Connects you to the instance via SSM.

It sounds fairly simple and to the end user it should be. Behind there scenes there's some error handling that going on if you are authenticated in one region and the instance is in another region.

It's a really easy way of making your AWS set up more secure by not having to have port 22 open to hosts from anywhere, not needing to manage key rotation manually and if you have MFA enabled on your IAM/SSO accounts (and you ruddy well should!) then you've also got MFA on your console sessions too.

## Future developments

- I'd like to make a bash version at some point.
- I'd like to look into making the instance ID search global