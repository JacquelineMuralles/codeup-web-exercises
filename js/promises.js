"use strict";
// ***********************************ES6 if/else*********************************************
// const wait = number => new Promise((resolve, reject) => {
//     setTimeout(() => {
//     if(typeof number === 'number'){
//         resolve();
//     }else {
//         reject()
//     }
//     }, number)
// });


//**********************************VANILLA JAVASCRIPT if/else********************************************
// function wait(number){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(typeof number === "number"){
//                 resolve('complete')
//             }else {
//                 reject("What you put was not a number")
//             }
//         }, number)
//     })
// }

// //*************************************Correct Answer***************************************
// const wait = num => {
//     return new Promise((res) => {
//         setTimeout(res, num);
//     });
// };
//
//
// wait("3000").then((data) => console.log("complete")).catch((error) => console.error('not a number'));
// wait(3000).then((data) => $('body').append("<h1>" + "Good Job!" + "</h1>")).catch((error) => $('*').html("<h1>" + "What you put was not a number!" + "</h1>"));


//1. fetch the data of users
//2. to get the date of last commit a user made
//  a. append user name to https://api.github.com/users/jacquelinemuralles/events/
//  b. in order from most recent to oldest (w/in 30 days)
//  c.

const getDate = userName => {
    fetch("https://api.github.com/users/" + userName + "/events", {headers: {'Authorization': gitToken}})
        .then(response => response.json())
        .then(response => response.filter(item => item.type === "PushEvent"))
        .then(item => item[0].payload.commits)
        .then(item => item[item.length -1].url)
        .then(item => fetch(item, {'Authorization' : gitToken}))
        .then(item => item.json())
        .then(item => (item.commit.author.date))
        .then(item => {
            $('h1').html(new Date(item))
        });
};

console.log(getDate('jacquelinemuralles'));
