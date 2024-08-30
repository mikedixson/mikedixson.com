---
title: Skype for Business Launch At Start Up Minimized Group Policy GPO
author: Mike
type: post
date: 2018-09-17T11:11:52+00:00
url: /skype-for-business-launch-at-start-up-minimized-group-policy-gpo/
categories:
  - Personal
tags:
  - gpo
  - group policy
  - s4b
  - skype
  - Skype 4 Business
  - Skype for Business
  - skype4b

---
You think that having Skype launch minimized at start up would be an easy and well known Group Policy ADMX file or such&#8230; but no no no.  
No easy life for you Mr Sysadmin.

Well for you yes, cause I&#8217;m writing how I managed to achieve it so you don&#8217;t have to bang your head against the desk too much.

<p class="has-large-font-size">
  Configures Skype&#8217;s Own AutoStart
</p>

This might be a bit belt and braces and the order 3 item below starts Skype4B on Windows start up already.

  * User Configuration
      * Preferences
          * Windows Settings
              * Registry
                  * AutoOpenMainWindowOnStartUp (Order:1)

<table class="wp-block-table">
  <tr>
    <td>
      Hive
    </td>
    
    <td>
      HKEY_CURRENT_USER
    </td>
  </tr>
  
  <tr>
    <td>
      Key path
    </td>
    
    <td>
      Software\Microsoft\Office\16.0\Lync
    </td>
  </tr>
  
  <tr>
    <td>
      Value name
    </td>
    
    <td>
      AutoOpenMainWindowWhenStartup
    </td>
  </tr>
  
  <tr>
    <td>
      Value type
    </td>
    
    <td>
      REG_DWORD
    </td>
  </tr>
  
  <tr>
    <td>
      Value data
    </td>
    
    <td>
      0x0 (0)
    </td>
  </tr>
</table>

All Common option set to **No**

<p class="has-large-font-size">
  Minimize Skype
</p>

  * User Configuration
      * Preferences
          * Windows Settings
              * Registry
                  * MinimizeWindowToNotificationArea (Order: 2)

<table class="wp-block-table">
  <tr>
    <td>
      Hive
    </td>
    
    <td>
      HKEY_CURRENT_USER
    </td>
  </tr>
  
  <tr>
    <td>
      Key path
    </td>
    
    <td>
      Software\Microsoft\Office\16.0\Lync
    </td>
  </tr>
  
  <tr>
    <td>
      Value name
    </td>
    
    <td>
      MinimizeWindowToNotificationArea
    </td>
  </tr>
  
  <tr>
    <td>
      Value type
    </td>
    
    <td>
      REG_DWORD
    </td>
  </tr>
  
  <tr>
    <td>
      Value data
    </td>
    
    <td>
      0x1 (1)
    </td>
  </tr>
</table>

<p class="has-large-font-size">
  Start Skype with Windows
</p>

Again this is a bit belt and braces, I&#8217;d go with this option over the first as the only method of starting Skype.

Also note that lync.exe is in the path, so the value data could just be lync/lync.exe so that the officeXX in the path doesn&#8217;t matter, for a bit of future proofing.

  * User Configuration
      * Preferences
          * Windows Settings
              * Registry
                  * Lync (Order: 3)
                  * Action: Replace

<table class="wp-block-table">
  <tr>
    <td>
      Hive
    </td>
    
    <td>
      HKEY_CURRENT_USER
    </td>
  </tr>
  
  <tr>
    <td>
      Key path
    </td>
    
    <td>
      Software\Microsoft\Windows\CurrentVersion\Run
    </td>
  </tr>
  
  <tr>
    <td>
      Value name
    </td>
    
    <td>
      Lync
    </td>
  </tr>
  
  <tr>
    <td>
      Value type
    </td>
    
    <td>
      REG_SZ
    </td>
  </tr>
  
  <tr>
    <td>
      Value data
    </td>
    
    <td>
      %ProgramFiles(x86)%\Microsoft Office\root\Office16\lync.exe
    </td>
  </tr>
</table>

This should then be applied to the OU that the users exist in and Domain Computers be given read access.