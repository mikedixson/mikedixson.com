---
title: Exporting your Google Stars to CSV or KML
author: Mike
type: post
date: 2015-10-08T14:33:15+00:00
url: /exporting-your-google-stars/
categories:
  - Tips
tags:
  - google
  - maps

---
I&#8217;m part of the Google Local Guides and a question came up amongst our cohort about being able to export your Stars from Google maps into something useful you can then import elsewhere. For example being able to import by Name, longitude and latitude would allow you to import into Google My Maps.

You can visit Google Bookmarks and download an html file of your bookmarks, but it&#8217;s a relatively useless Netscape Bookmark format. So to convert this to a useful CSV file I&#8217;ve devise this linux script using sed and awk:

## CSV Export

``for i in `sed -ne 's/.*\(http[^"]*\).*/\1/p' < GoogleBookmarks.html`; do curl -sL $i | awk '{split($0,a,"[")}; {split(a[21],b,","); printf b[2]}; {split(a[4],c,","); print ",",c[2],",",c[3]}' | sed 's/\"//g' | sed 's/\]//g' | awk '!/, , /' >> googbook.csv; done``  
This will output the Name, Longitude and Latitude to a CSV file.

To spit out the full address too use the following:

``for i in `sed -ne 's/.*\(http[^"]*\).*/\1/p' < GoogleBookmarks.html`; do curl -sL $i | awk '{split($0,a,"[")}; {split(a[21],b,","); printf b[2]; printf "\",\""; printf b[3]; printf b[4]}; {split(a[4],c,","); print ",",c[2],",",c[3]}' | sed 's/\]//g' | awk '!/\",\", ,/' >> googbook.csv;; done;``

## KML Export

Visit <a href="http://gexport.somee.com/" target="_blank" rel="noopener">http://gexport.somee.com/</a> upload your GoogleBookmarks.html file and then download the KML file (easy peasy).