---
title: How to fix Mac bluetooth audio quality
author: Mike
type: post
date: 2014-01-15T16:03:12+00:00
url: /how-to-fix-mac-bluetooth-audio-quality/
image: /wp-content/uploads/2014/01/bluetooth_headphones.jpg
categories:
  - Personal
  - Tech Solutions

---
Anyone who&#8217;s tried to use a decent pair of bluetooth headphones with a Mac knows that it sucks the big one. In spite of Apple&#8217;s affiliations with the music industry it sounds like listening to an FM radio that you made yourself. In fact you could do better.This simple command (below) has resolved the issue for me and now I can enjoy beautiful music from my laptop whilst I work.

<pre>sudo defaults write com.apple.BluetoothAudioAgent "Apple Bitpool Min (editable)" 40</pre>

source: <a href="http://danwarne.com/fix-bluetooth-a2dp-audio-quality-mac-os/" target="_blank" rel="noopener">http://danwarne.com/fix-bluetooth-a2dp-audio-quality-mac-os/</a>