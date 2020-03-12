"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
$(document).ready(function(){
let filterLanguage = users.filter(user => user.languages.length > 2);
    // console.log(filterLanguage);

let getEmail = users.map(user => user.email);
    // console.log(getEmail);

let totalExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);
let avgExperience = (totalExperience / users.length);
    // console.log(totalExperience);
    // console.log(avgExperience);

// let longEmail = users.reduce(function (currentLongest, user){
//         if(user.email.length > currentLongest.length){
//             return user.email; //user.email is new currentLongest
//         }else {
//             return currentLongest; //otherwise record wasn't broken
//         }
//         return user.email.length > currentLongest.length ? user.email : currentLongest;
//     }, "@");


let longEmailES6 = users.reduce((currentLongest, user) => user.email.length > currentLongest.length ? user.email : currentLongest, "@");
    // console.log(longEmailES6);

let nameStr = users.reduce((Namecount, user) => user.id === 1 || user.id === 2 || user.id === 3 || user.id === 4 ? Namecount + user.name + ", " : Namecount + user.name + ".", "Your instructors are: ");
    console.log(nameStr);

let names = users.reduce((sentence, user) => sentence === '' ? user.name : sentence + ', ' + user.name,'');
    console.log("Your instructors are: " + names + '.');




// let uniqueLang = users.reduce((langCount, user) => langCount.split(", ") === (user.languages.split(", "))? langCount: langCount + user.languages + ", ", "Total languages: ");
    let uniqueLang = users.reduce(function (langCount, ) {

    });
    console.log(uniqueLang);




});