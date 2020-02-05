"use strict";

// console.log("Hello from external JavaScript");

// alert("Welcome to my website!");

// var userPrompt = prompt("What is your favorite color?");
// alert ('Great, ' + userPrompt + ' is my favorite color too!');



// 3.1 movie rental question
//  1. Ask user how long they would like to rent each movie -> prompt & variable
//  2. Ask user what the rental fee is -> prompt & variable
//  3. Calculate total price -> total days * rental fee
//  4. Alert the total cost

// var littleMermaid = Number(prompt("How long would you like to rent The Little Mermaid for?"));
// var brotherBear = Number(prompt("How long would you like to rent Brother Bear for?"));
// var hercules = Number(prompt("How long would you like to rent Hercules for?"));
// var rentalPrice = Number(prompt("How much is each rental per day?"));
// var rentalTotal = Number((littleMermaid + brotherBear + hercules) * rentalPrice);
// alert('Wonderful! Your total is $' + rentalTotal + ' .');



// 3.2 contractor question
//  1.Ask user for rate of pay for each company
//  2.Ask user for the number of hours worked for each company
//  3.Calculate the total of pay from each company
//  4.Alert the user of total pay after combining the total from each company


// var gPay = Number(prompt("How much are you being paid by Google per hour?"));
// var gHours = Number(prompt("How many hours did you work for Google this week?"));
// var gTotal = Number(gPay * gHours);
// var aPay = Number(prompt("How much are you being paid by Amazon per hour?"));
// var aHours = Number(prompt("How many hours did you work for Amazon this week?"));
// var aTotal = Number(aPay * aHours);
// var fbPay = Number(prompt("How much are you being paid by Facebook per hour?"));
// var fbHours = Number(prompt("How many hours did you work for Facebook this week?"));
// var fbTotal = Number(fbPay * fbHours);
// var totalPay = Number(gTotal + aTotal + fbTotal);
// alert("Congratulations! Your total pay for the week is $" + totalPay + ".");



//3.3 class schedule question

// var classFull = confirm("Class is not full");
// var classSchedule = confirm("Does not conflict with current schedule");
// var studentEnrolled = classFull && classSchedule;
// alert("Student can enroll " + studentEnrolled);



//3.4 product offer question
//
// var itemsBought = Number(prompt("How many items did you buy?"));
// var offerExpired = confirm("Is the offer still valid?");
// var premiumMember = confirm("Are you a premium member?");
// var discountApplied = offerExpired && (premiumMember || itemsBought > 2);
// alert("Offer can be applied: " + discountApplied);

