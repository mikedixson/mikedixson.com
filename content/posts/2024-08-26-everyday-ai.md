---
title: Everyday AI in IT
description: "AI in IT: Explore AI applications in everyday IT tasks. Learn prompt techniques for optimal results. #AI #technology"
date: 2024-08-27T13:04:16.366Z
preview: /images/_a14e4e69-3e7e-4090-8c98-49892ffc8d93.jpeg
draft: false
tags:
  - Artificial Intelligence
  - AWS
  - Code Generation
  - Code Troubleshooting
  - Everyday AI
  - Image Generation
  - IT
  - Machine Learning
  - Meta Search
  - Prompt Techniques
categories:
  - Artificial Intelligence
  - Everyday AI
  - IT
  - Lifehacks
  - Machine Learning
  - Modern Living
  - Technology
author: Mike Dixson
type: featured
excerpt: I'm often on the cutting edge of technology and constantly trying to stay ahead of new technology
url: ""
image: /images/_a14e4e69-3e7e-4090-8c98-49892ffc8d93.jpeg
keywords:
  - AI
  - Artificial Intelligence
  - Machine Learning
slug: everyday-ai-ml-artificial-intelligence-machine-learning
---

### Summary
As an IT engineer I'm often on the cutting edge of technology and constantly trying to stay ahead of new technology so that I can make informed strategic decisions.
With the massive rise of "Artificial Intelligence" and Machine Learning there's been an awful lot to test and assess, including what usefulness can it actually provide.

### Where I Use ML aka AI
#### Image Generation
As someone who produces art, design, and photography products for hobbies, I am very aware of the concerns within the artistic community regarding the use of generative AI to create images. I have experimented with tools like Stable Diffusion, Dall-E 3, and Midjourney to explore how prompts can shape the output. It is an interesting tool, but the fact that it builds upon the work of artists who have dedicated their lives to studying art, subverting forms, and bringing innovation raises ethical questions. I don't have any definitive answers for this ongoing debate.

That being said, I do utilize image generation as a practical tool. My most frequent use of image generation is to create header images for Sharepoint pages that I create at work for documentation purposes. I strive to document regularly, and therefore, I have a pre-saved prompt starter that I simply need to add a topic to, and I can obtain a consistently themed image from Copilot, powered by Dall-E 3.

#### Code Generation
I work in Terraform code daily at the moment as two new projects use Terraform as the IaC tool. Since doing so I've needed a proper IDE instead of working on PowerShell, Bash and Batch files in PowerShell ISE, Nano or Notepad.
As it was trending so hard and 'free' I went for VSCode. The Terraform and Gitlab extensions made it easy to get up and running with.

I didn't jump on the Gitlab CoPilot bandwagon right away, but the fact that it was potentially available in so many parts of VSCode got me curious, and for aroud £100 per year I thought it was worth a punt.
Within a couple of days I definitely had got my £100s worth!

There are 3 main ways I use Github CoPilot in my workflow
##### Git Commit Messages
It's a small thing but I'm very much a commit often person. I work between two different machines so Gitlab is also my method of making sure I'm in sync on both locations.
Github CoPilot's ability to appriase the changes and summarize with a commit message is super handy and in the last month or two have even improved massively.

It's not always spot on, sometimes if there are a couple of changes within the code it might favour, what I'd consider, a smaller change over the more functional change. Say a commented out code removal over a change of a Terraform resource name.

##### Creating Code
###### Auto Code Complete
Once I had Github CoPilot installed/enabled this took the Terraform auto code complete from 0 to 60.
This was a big improvement and meant that the auto code complete was, largley, instantly usable.

The downside of this was that I could quickly generate code with errors too, and more code means more errors to troubleshoot.

Additionally, when the code was generated for you, you're not as consciously familiar with the code, and so when an error comes up, you don't necessarily know the area of code that might have caused the error.
If the code itself is the error this is fine, maybe something syntactically or such. But when a reference being parsed in is causing an error in the later resource you have to start tracing the error without an naturally insight into the chain of code.

###### Code from Prompt
The second way I use Github CoPilot is to use either the prompt (via ctrl+i) or in the Chat extension and create a well formed prompt to create the resource(s) that I need.
For instance "Create the resources for a S3 bucket hosting a website on https://mikedixson.com, favour using modules over individual resources"

###### Code Troubleshooting
Github CoPilot having access to the full code, and not just the blob you can paste into a chat boxes maximum character count gives it a big advantage over just using a chatgpt-a-like.

This enables troubleshooting across areas of code that you might not hav initially thought to be the issue, but also, the solutuons provided might be alternate methods of implementation to the route you'd gone down so can provide a different perspective.

##### Down Sides of AI Code Creation
Along with amount of code that is generated and the troubleshooting issues that provides the is still a non-zero chance that the generate code will be bad code.

The autocompleted bucket_id when referencing the output of a bucket module, which should be s3_bucket_id is a consistent pain in the rear, with no way for me to retrain the model out of this.

There's also been times when a Terraform resource type or function will be halucinated.
terraform fmt and validate pick these up, but if you've been working for ages on writing some code centered around some functionality that doesn't exist that can be an annoying pill to swallow.

#### Meta Search
Web search is broken, is gamified and corrupted by advertising trying to lure you to their site over others by using money instead of the best content.

Using CoPilot as my "search engine" means that I get the literal answer* rather than a website laden with adverts, conversational prose, incorrect answers to come thru.

A good example of this is recipe blogs. It's lovely that you've posted your life story with a recipe, but I'm literally trying to cook dinner right now and I just need the ingredients and the instructions.

*Answer might be a strong word as AI is not beyond giving incorrect answers.


### Prompt Tips
When using a general generative AI like CoPilot, ChatGTP etc. I often front load the context.
So if I'm asking an AWS specific question I might start with "Answer an an AWS export....."

I occassionally use tricks I've seen online that I've found to yield good results like "Take a deep breath and ...."

One of the most useful prompt techniques I've found is to give the model a chance to clarify.

For example "Answer as an aws expert. What is the optimal way to set up a new VPC for ECS containers to run in at large scale. Ask up to 3 questions to clarify"

This approach often gives better answers but also, some of the questions asked back can be things you may not have thought about.

I'll do a full post just focussed on investigating prompt engineering in the future.

Mike
