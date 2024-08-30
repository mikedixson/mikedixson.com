---
title: Powershell Script to Check if a Website is Up and if Not Restart a service
author: Mike
type: post
date: 2015-10-05T10:53:49+00:00
excerpt: "The below powershell script check the website is responding AND doesn't returns a certain string, if either test is failed then a Windows service is restarted, forcefully if necessary after a grace period."
url: /powershell-script-to-check-if-a-website-is-up-and-if-not-restart-a-service/
categories:
  - Microsoft
  - Tech Solutions
  - Windows

---
The below PowerShell script check the website is responding AND **doesn&#8217;t** returns a certain string, if either test is failed then a Windows service is restarted, forcefully if necessary after a grace period.

**Please note** that I have modified this script to make it more easily customisable and not had the opportunity to test with the strings switched out for the variables. The logic is sound and works.

**Also note** that this is one code block (word press isn&#8217;t a fan of it being one though :-/  
You can download the file here <a href="http://mikedixson.com/2015/10/powershell-script-to-check-if-a-website-is-up-and-if-not-restart-a-service/checkwebsiteisup-ps1/" rel="attachment wp-att-594">CheckWebsiteIsUp.ps1</a>

`$webClient = new-object System.Net.WebClient<br />
$webClient.Headers.Add("user-agent", "PowerShell Script")`

`<br />
#Initialising<br />
$webClient = new-object System.Net.WebClient<br />
$webClient.Headers.Add("user-agent", "PowerShell Script")`

`#Variables to modify<br />
$output = "" #Define output variable<br />
$serviceName = "confluence" #Short windows service name<br />
$smtpServerName = "smtp.website.com" #SMTP Server name<br />
$fromEmailAddress = "servername@website.com" #Email address for mail to come from/reply address<br />
$stringToCheckFor = "The service is unavailable" #String to check for. Note that this will be searched for with wildcards either side<br />
$startTime = get-date<br />
$output = $webClient.DownloadString("http://www.website.com/") #Modify this url to be the url you want to test<br />
$endTime = get-date`

``#Main workload<br />
#The below checks for the string "The service is unavailable" from your website and if found forcefully restarts the defined service<br />
if ($output -And $output -notlike "*$stringToCheckFor*") {<br />
"Site Up`t`t" + $startTime.DateTime + "`t`t" + ($endTime - $startTime).TotalSeconds + " seconds"<br />
} else {<br />
"Fail`t`t" + $startTime.DateTime + "`t`t" + ($endTime - $startTime).TotalSeconds + " seconds"<br />
stop-service $serviceName -force<br />
"Stop Service Command Sent"<br />
$svc = Get-Service $serviceName<br />
$svc.WaitForStatus('Stopped','00:05:00') #Waits for service to enter stopped state or 5 mins has passed, whichever is first<br />
get-service $serviceName | where-object {$_.Status -eq "Stopped"} | restart-service #Belt and braces but only restarts the service if it's stopped.<br />
$svc.WaitForStatus('Running','00:01:00') #Waits for service to enter Running state or 1 minute to pass, whichever is first<br />
Send-MailMessage -From “intranet@rave.ac.uk” -To “$fromEmailAddress” -SmtpServer “$smtpServerName” -Subject "$serviceName Service Restarted" -Body "$serviceName Service Restarted" #Sends an email alert that the service was restarted<br />
}``