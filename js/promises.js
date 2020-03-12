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

const getDate = userName => fetch("https://api.github.com/users/" + userName + "/events", {headers: {'Authorization': "token 7d11c4d564fb20411b7d1b9fc66c7252b17390dc"}})
        .then(response => response.json())
        .then(data => data.filter(data => (data.type === "PushEvent")
        .then(data => {
            let latestCommits = data[0].payload.commits;
            let latest = latestCommits[latestCommits.length-1].url;
            return fetch(latest)
                .then(response => {
                return response.json()
            })})
            .then((data) =>{
                let dateData = data.commit.committer.date;
            })))
            }

        ));

console.log(getDate('jacquelinemuralles'));
