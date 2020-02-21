"use strict";
//creates the map
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
    zoom: 10,
    center: [-98.4916,29.4252],
    boxZoom: true,
});
var popOptions = {
    closeOnMove: true,
    anchor: "bottom-left"
};
var markOptions = {
    color: "#9496C3"
};

// //creates a popup
// var artOfDonutPopup = new mapboxgl.Popup(artOptions)
//     .setHTML( "<h2>The Art of Donut</h2>" +
//         "Address: 3428 N St Mary's St, San Antonio, TX 78212" +
//         "Hours: 7am - 3pm" +
//         "Phone: (210)265-5425" +
//         "Rating: 8/10");

// //creates the marker at the designated lat and long
// var artOfDonutMarker = new mapboxgl.Marker()
//     .setLngLat([-98.47932773, 29.45637004])
//     .setPopup(artOfDonutPopup)
//     .addTo(map);


//how to create a for loop for multiple objects in an array:

//array of restaurant objects
var favoriteRestaurants = [
    {
        name: "<h2>Liberty House</h2>",
        information: {
            address: "<p>1111 S Alamo St, San Antonio, TX 78210</p>",
            hours: "<p>9am - 12am</p>",
            phone: "<p>(210) 227-1187</p>",
            reservation: "<p><a href='http://www.liberty-bar.com/contact'>Reserve a seat</a></p>"
        }
    },
    {
       name: "<h2>Eastside Ktchentte</h2>",
        information: {
            address: "<p>2119, I-35, San Antonio, TX 78208</p> ",
            hours: "<p>7:30am - 8pm</p>",
            phone: "<p>(210) 507-2568</p>",
            reservation: "<p><a href='https://www.eastsidekitchenette.com/reservations/'> Reserve a seat</a></p>",
        }
    },
    {
        name: "<h2>El Folklor Bakery</h2>",
        information: {
            address: "<p>2604 S Hackberry, San Antonio, TX 78210</p>",
            hours: "<p>6am - 8:30pm</p>",
            phone: "<p>(210) 532-3767</p>",
            reservation: "<p>No reservation needed: in and out bakery.</p>",
        }
    },
    {
        name: "<h2>Ida Claire</h2>",
        information: {
            address: "<p>7300 Jones Maltsberger Rd, San Antonio, TX 78209</p>",
            hours: "<p>7am - 11pm</p>",
            phone: "<p>(210) 667-2145</p>",
            reservation: "<a href='https://www.opentable.com/restref/client/?rid=1050298&restref=1050298&corrid=eb2ea772-a59c-4c83-89a6-a18604c1523e'>Reserve a seat</a>",
        }
    },
];

//for loop which calls upon array of restaurant objects to place popups and markers
favoriteRestaurants.forEach(function (restaurant) {
    geocode(restaurant.information.address, mapboxToken).then(function (result) {
        var popup = new mapboxgl.Popup(popOptions)
            .setHTML(restaurant.name + restaurant.information.address + restaurant.information.hours + restaurant.information.phone + restaurant.information.reservation);
        var marker = new mapboxgl.Marker(markOptions)
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map);
    })
});



// var zoomOptions = document.getElementsByTagName("option");
// var zoom1 = document.getElementsByClassName("map-overlay-inner");
// zoom1.addEventListener("click", function (event) {
//     for(var i = 0; i < zoomOptions.length; i++) {
//         if(zoomOptions[i].getAttributeNames('layer') === "0"){
//
//         }
//     }
//
// })


