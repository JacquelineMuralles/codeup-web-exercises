"use strict";

// function showMultiplicationTable(num) {
//     for (var i = 1; i < 11; i++) {
//         var answer = num * 1;
//     console.log(num + " x "  + i + " = " + answer);
//     }
// }

//1. for loop, var i = 0; i <10; i ++
//2. Generate a random number between 20 & 200 -> Math.floor
//3. we need to check random
//  if even -> console.log(random is even)
//  else odd -> console.log(random is odd)


// for(var i = 1; i < 11; i++){
//     var random  = Math.floor(Math.random() * 180) + 20;
//     if(random % 2 === 0) {
//         console.log(random + " is even");
//     }else {
//         console.log(random + " is odd");
//     }
// }
// for (/*initialization* (of variable)/; /*condition*(the condition we check before running the loop)/; /*increment*/)



//repeat numbers 1, 22, 333, 4444, 55555, 666666
// for(var i = 1; i < 10; i){
//     console.log(i.toString().repeat(i))
// }
//1
//22
//333
//4444
//55555
//666666
//7777777
//88888888
//999999999

//ANOTHER ANSWER
// for(var outer = 1; outer < 10; outer++){
//     //placeholder
//     var output = "";
//     for( var inner = 1; inner <= outer; inner++){
//
//         output += outer;
//     }
// }




// for(var i = 100; i >= 5; i-= 5){
//     console.log(i);
// }