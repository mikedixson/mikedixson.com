---
title: AWS EC2 Lookup & Connectivity Toolkit for PowerShell
description: A PowerShell toolkit for your profile that lets you find EC2 instances by name and connect via SSH, RDP or SSM with a single short command.
date: 2026-06-17T09:00:00.000Z
preview: /images/aws-ec2-powershell-toolkit.webp
draft: false
tags:
  - aws
  - powershell
  - ec2
  - ssm
  - ssh
  - rdp
categories:
  - AWS
  - How To
  - PowerShell
author: Mike Dixson
type: post
excerpt: Tired of hunting down instance IDs before you can SSH or start an SSM session? This PowerShell toolkit lets you do `ssh2 myserver` or `ssm2 myserver` and handles the rest.
image: /images/aws-ec2-powershell-toolkit_thumbnail.webp
slug: aws-ec2-powershell-toolkit
keywords:
  - aws ec2 powershell
  - ssm session manager powershell
  - ec2 ssh powershell
  - ec2 rdp powershell
  - aws cli powershell profile
---

## The Problem with Connecting to EC2 Instances

If you manage AWS EC2 instances day-to-day, you'll be familiar with the dance:

1. Open the AWS console (or run `aws ec2 describe-instances ...` with a wall of JSON)
2. Hunt for the instance ID
3. Copy it somewhere
4. Run `aws ssm start-session --target i-0abc123...`

Even with a previous post on [SSHing to EC2 instances over SSM](/posts/ssh-aws-instance-ssm/), you still need to know the instance ID upfront. I wanted something closer to just typing `ssh hostname`.

## The Solution

I've published a PowerShell toolkit as a Gist:

👉 [AWS EC2 Lookup & Connectivity Toolkit](https://gist.github.com/mikedixson/50322267a295f9d7b684c533bd4b8e8d)

Add it to your PowerShell profile and you get four short commands:

| Command | What it does |
|---------|-------------|
| `ec2 <name>` | Look up instances matching a name (partial match supported) |
| `ssh2 <name>` | SSH to the instance (falls back to SSM if SSH fails) |
| `ssm2 <name>` | Start an SSM Session Manager session |
| `rdp2 <name>` | Open Remote Desktop to the instance |

### Example Usage

```powershell
# Find instances with "web" in their Name tag
ec2 web

# SSH to an instance called "ukwebserver01"
ssh2 ukwebserver01

# SSH as a non-default user
ssh2 ukwebserver01 -User ubuntu

# Start an SSM session
ssm2 ukwebserver01

# Search across all your configured AWS CLI profiles
ec2 web -AllAccounts

# Force a fresh lookup (skip the in-session cache)
ec2 web -NoCache

# Open RDP to a Windows instance
rdp2 winserver01
```

## How It Works

### Instance Lookup

The core `Get-EC2Instance` function queries EC2 using `aws ec2 describe-instances` with a wildcard filter on the `Name` tag, so `ec2 uk` will match `ukwebserver01`, `uk-bastion`, and anything else with "uk" in the name.

It searches across multiple regions by default (`eu-west-2` and `eu-west-1`) and can optionally loop through all your configured AWS CLI profiles with `-AllAccounts`.

Results are cached in memory for the duration of your PowerShell session, so repeated lookups are fast.

### Multiple Matches

If more than one instance matches your search, you get an interactive picker. On Windows with PowerShell 5+ you'll get an `Out-GridView` popup. On other platforms (or if Out-GridView isn't available) you get a numbered CLI menu instead.

### AWS SSO Support

Before querying, the toolkit checks whether your SSO session is still valid. If it isn't, it automatically runs `aws sso login` for you rather than failing silently.

### SSH with SSM Fallback

`ssh2` tries a normal SSH connection first. If that fails (e.g. port 22 isn't open, or you're connecting via a private IP), it automatically falls back to an SSM session — no manual intervention needed.

## Setup

1. Copy the script from the [Gist](https://gist.github.com/mikedixson/50322267a295f9d7b684c533bd4b8e8d) into your PowerShell profile (`$PROFILE`).
2. Update the default `$Profile` parameter in `Get-EC2Instance` and `ec2ssm`/`ec2ssh` to match your AWS CLI profile name.
3. Optionally update the default `$Regions` array to match the regions you use most.
4. Reload your profile (`. $PROFILE`) or open a new PowerShell window.

You'll need the [AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) installed and configured with SSO or standard credentials.

---

*PowerShell icon from [Devicons](https://devicon.dev/) — MIT licensed.*
