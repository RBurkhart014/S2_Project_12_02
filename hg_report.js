"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Ryan Burkhart
   Date: 2-28-19  
   
   Filename: hg_report.js
	
*/

var gameReport = "<h1>" + itemTitle + "</h1>" + "<h2>By:" + itemManufacturer + "</h2>" + "<img src='hg_" + itemID + ".png' alt='id' id='gameImg'/>" + "<table>" + "<tr><th>Product ID</th><td>" + itemID + "</td></tr>" + "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>" + "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>" + "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>" + "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>" + "<tr><th>Release</th><td>" + itemRelease + "</td></tr>" + "</table>" + itemSummary;

document.getElementsByTagName("article")[0].innerHTML = gameReport;

//These 2 above display the image & table twoards the nav area on the webpage

var ratingSum = 0;
var ratingCount = ratings.length;

//this for loop made it so therefore the ratings display properly with the correct length & value

for (var i = 0; i < ratingCount; i++) {
    ratingSum += ratings[i];
}

var ratingsAvg = ratingSum / ratingCount;

var ratingReport = "<h1>Customer Review</h1><h2>" + ratingsAvg + "out of 5 stars (" + ratingCount + " reviews)</h2>";

//The for loop & 2 values above help the ratings section display by adding more count & value to correct the display

for(var i = 0; i<=2; i++) {
    ratingReport += "<div class='review'><h1>" + ratingTitles[i] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>" + "<tr><th>Review Dates</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
    for(var j = 1; j <= 5; j++) {
        ratingReport += "<img src='hg_star.png'>";
    }
    ratingReport += "</td></tr></table>" + ratingSummaries[i] + "</div>"
}

document.getElementsByTagName("aside")[0].innerHTML = ratingReport;

//This placed everything inside the aside tag in HTML & displayed the final code