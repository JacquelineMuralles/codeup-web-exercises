"use strict";

//
do{
    var enterNum = parseFloat(prompt("Please enter an odd number between 1 and 50."));

    if(enterNum % 2 === 0 || enterNum < 1 || enterNum > 50){
        prompt("Please enter a valid input.")
    }else if(isNaN(enterNum)) {
        prompt("Please enter a valid input.")
    }else {
            break
        }

}while (true);

console.log("Number to skip is: " + enterNum);

for (var i = 1; i < 50; i ++) {
    if (i % 2 === 0) {
        continue;
    }

    if(i === enterNum){
        console.log("Yikes! Skipping number: " + enterNum)
    } else {
        console.log("Here is an odd number: " + i);
    }
}