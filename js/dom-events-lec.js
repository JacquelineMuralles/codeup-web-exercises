"use strict";

(function(){

    /**
     * Audience: "David, it sure seems like I can do a lot with JavaScript to my
     * web pages, but how can I make it so my user can activate the changes instead
     * of them happening on page load?"
     */

    // DOM Events allow us to add on an event model to our document, allowing interactivity.

    // Today, we'll be covering how to add an event listener, and how to remove it.

    // When using the addEventListener method, note the three parameters:
    // document.getElementById("someID").addEventListener("type", function(){}, useCapture);
    // type is the type of event in quotes. This can be "click", "mouseover", "keydown", and many others as seen at
    // https://developer.mozilla.org/en-US/docs/Web/Events
    // the function is a callback function. it's important to note that the passed argument is the function itself, not it's return.
    // Finally, the last parameter is useCapture.This will capture the event in the DOM tree if set to true, and won't when set to false.

    // document.getElementById("header").addEventListener("dblclick", function(){
    //     document.title = "DOM Events in JavaScript";
    //     this.innerText = "DOM Events, Actually";
    //     document.getElementById("jupiter").style.backgroundImage = "url('img/mars.jpg')";
    //     document.getElementById("jupiter").addEventListener("mouseover", function(){
    //         this.style.backgroundImage = "url('img/mars-coin.jpg')";
    //         this.addEventListener("mouseout", function(){
    //             this.style.backgroundImage = "url('img/mars.jpg')";
    //         }, false)
    //     }, false);
    // }, false);

    // keyup version

    document.addEventListener("keyup", function(event){
        // event.preventDefault();
        //prevents default behavior with certain keys.
        if (event.key === " ") {
            document.title = "DOM Events in JavaScript";
            document.getElementById("header").innerText = "DOM Events, Actually";
            document.getElementById("jupiter").style.backgroundImage = "url('img/mars-coin.jpg')";
            document.getElementById("jupiter").addEventListener("mouseover", function () {
                this.style.backgroundImage = "url('img/mars.jpg')";
                this.addEventListener("mouseout", function () {
                    this.style.backgroundImage = "url('img/mars-coin.jpg')";
                }, false)
            }, false);
        }
    }, false);

    // In the above example, i fixed the text in the HTML to represent the actually lesson we're learning today.

    document.getElementById("change-a-tron").addEventListener("change", function() {
        document.getElementById("little-text").innerHTML = this.value;
    });

    /**
     * Audience: "But David, as we've seen before, if we can create, can we not
     * also destroy? How could I remove an event listener?"
     */

        // To remove an event listener, We'd do so like this:

    var pikaEvent = function(){
            this.style.backgroundImage = 'url("img/screaming-detective-pikachu.gif")';
            this.style.backgroundColor = 'palevioletred';
            this.addEventListener("mouseout", function(){
                this.style.backgroundImage = 'url("img/dancing-pikachu.gif")';
                this.style.backgroundColor = 'goldenrod';
                this.removeEventListener('mouseover', pikaEvent, false);
            }, false);
        };

    // Notice I'm using a removeEventListener method, with this method, I am noting the event that I want to remove, and am passing the function that carries the changes done by the event as well. As before the final argument passed represents the capture of the event.

    document.getElementById('little-text').addEventListener("click", function(){
        document.getElementById("little-text").innerHTML = "<p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.</p> <p>It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster. Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p> <div id='special' class='circle'></div> As you can see we can add quite a bit of HTML.";
        document.getElementById("special").addEventListener("mouseover", pikaEvent, false);
    }, false);

    // Notice now that I can only use the mouseover and mouse out events on the circle once. However, I can get it to restart the event by clicking on the paragraph tag again.
    //
    // If I want to remove the click event and only have it happen once, I'll need to save the function to a variable and then add the event listener using the function definition.

    var littleEvent = function(){
        document.getElementById("little-text").innerHTML = "<p> It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way—in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only.</p> <p>There were a king with a large jaw and a queen with a plain face, on the throne of England; there were a king with a large jaw and a queen with a fair face, on the throne of France. In both countries it was clearer than crystal to the lords of the State preserves of loaves and fishes, that things in general were settled for ever.</p> <p>It was the year of Our Lord one thousand seven hundred and seventy-five. Spiritual revelations were conceded to England at that favoured period, as at this. Mrs. Southcott had recently attained her five-and-twentieth blessed birthday, of whom a prophetic private in the Life Guards had heralded the sublime appearance by announcing that arrangements were made for the swallowing up of London and Westminster. Even the Cock-lane ghost had been laid only a round dozen of years, after rapping out its messages, as the spirits of this very year last past (supernaturally deficient in originality) rapped out theirs. Mere messages in the earthly order of events had lately come to the English Crown and People, from a congress of British subjects in America: which, strange to relate, have proved more important to the human race than any communications yet received through any of the chickens of the Cock-lane brood.</p> <div id='special' class='circle'></div> As you can see we can add quite a bit of HTML.";
        document.getElementById("special").addEventListener("mouseover", pikaEvent, false);
        document.getElementById("little-text").removeEventListener("click", littleEvent, false);
    };

    document.getElementById("little-text").addEventListener("click", littleEvent, false);

    document.getElementById("change-a-tron").addEventListener("change", function() {
        document.getElementById("little-text").innerHTML = this.value;
        document.getElementById("little-text").addEventListener("click", littleEvent, false);
    });

})();

// do {
//     document.querySelector('#coin-option').addEventListener('keyup', function(e) {
//         var coin_option = document.querySelector('#coin-option').value.toLowerCase();
//         if(e.keyCode === 13) {
//             e.preventDefault();
//             flipCoint(coin_option);
//         }
//     });
// } while(coin_option !== 'heads' || coin_option !== 'tails');