---
title: Reinstalling TCP/IP Network Stack Windows 7
author: Mike
type: post
date: 2015-01-08T16:34:28+00:00
url: /reinstalling-tcpip-network-stack-windows-7/
categories:
  - Microsoft
  - Tech Solutions
  - Tips
  - Windows
  - Windows 7

---
Taken from [https://pandapow.co/how-to/win-reset-adapter/] &#8211; These instructions were used by a colleague recently when his network stack was b0rK3n. Running both the reset for tcp4 and tcp6 seemed to be key. Just resetting 4 did not resolve his issue.

# Open the Command Prompt as an administrator

Run the commands in this document in a Command Prompt that has been started &#8220;\*as administrator\*&#8221;.

  1. Click the \*Start menu\*
  2. Type \*cmd\* in the search box,
  3. \*right-click\* the cmd item at the top and select \*Run as administrator\* from the menu

# Reset Winsock

Resets Winsock Catalog to a clean state.  
`netsh winsock reset`  
\*Restart computer\*

# Reset Firewall

This command restores the Windows Firewall with Advanced Security policy to the default policy.  
`netsh advfirewall reset`

# Reset BranchCache

Resets the BranchCache service. Flushes the local cache. Every configuration parameter of BranchCache will be reset to its default value.  
`netsh branchcache reset`

# Reset IPv4

Resets TCP/IP and related components to a clean state.  
`netsh int ip reset`

# Reset IPv6

Resets IPv6 configuration state.  
`netsh int ipv6 reset`