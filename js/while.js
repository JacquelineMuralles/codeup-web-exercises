"use strict";

// var i = 2;
//
// while (i < 65537){
//     console.log(i);
//     i *= 2;
// }

//random number 50-100 (cones to sell) === allCones
//random 1-5 (cones bought by client) === conesBought
//
//


//1. generate total amt of cones to sell for day -> allCones
//2. Now we're in the loop - we need to generate/check how many cones the customer wants to buy -> conesBought
//If conesBought > allCones -> I don't have enough cones to sell :( sad path
//If conesBought < allCones -> allCones - conesBought -> :) happy path
//repeat this process while allCones > 0
//Completes the loop -> after the loop I can go home! -> console.log("Yay I sold all my cones!")

// var allCones = Math.floor(Math.random() * 50) +50;

// do{
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//
//
//     if (conesBought < allCones) {
//         allCones -= conesBought;
//         console.log(conesBought + " cones sold");
//     }else if ((conesBought > allCones) && allCones > 0){
//         console.log("Cannot sell you " + conesBought + " I only have " + allCones);
//     }else {
//         allCones -= conesBought;
//         console.log("Yay! I sold them all!");
//     }
// }while (allCones >= 0);



//Another Anser:

// var allCones = Math.floor(Math.random() * 50) +50;
//
// do{
//     var conesBought = Math.floor(Math.random() * 5) + 1;
//
//     if(conesBought > allCones){
//         console.log("Cannot sell you " + conesBought + " I only have " + allCones);
//     }else {
//         allCones -= conesBought;
//         console.log(conesBought + " cones sold");
//     }
// }while(allCones > 0);
// console.log("Yay! I sold them all!");

