"use strict";
$(document).ready(function () {
    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        zoom: 10,
        center: [-98.4916, 29.4252],
        boxZoom: true,
    });

    var marker = new mapboxgl.Marker({
        draggable: true
    })
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    function onDragEnd() {
        var lngLat = marker.getLngLat();
        coordinates.style.display = 'block';
        coordinates.innerHTML =
            'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    }
    marker.on('dragend', getWeather);

    // map.addControl(
    //     new MapboxGeocoder({
    //         accessToken: mapboxgl.accessToken,
    //         mapboxgl: mapboxgl
    //     })
    // );
    var geocoder = new MapboxGeocoder({
        accessToken: mapboxToken,
        mapboxgl: mapboxgl,
    });
    map.addControl(geocoder);

    geocoder.on('result', function(e) {
        console.log(e);
        var latLng ={};
        latLng.lng = e.result.geometry.coordinates[0];
        latLng.lat = e.result.geometry.coordinates[1];
        //explore "e" to find the coordinates
        marker.setLngLat(latLng);
        getWeather()
    });

    var myIcons = [
        {
            icon: 'clear-day',
            image: '<img src="img/clear-day.png" alt="">'
        },
        {
            icon: 'clear-night',
            image: '<img src="img/clear-night.png" alt="">'
        },
        {
            icon: 'rain',
            image: '<img src="img/rain.png" alt="">'
        },
        {
            icon: 'snow',
            image: '<img src="img/snow.png" alt="">'
        },
        {
            icon: 'sleet',
            image: '<img src="img/sleet.png" alt="">'
        },
        {
            icon: 'wind',
            image: '<img src="img/wind.png" alt="">'
        },
        {
            icon: 'fog',
            image: '<img src="img/fog.png" alt="">'
        },
        {
            icon: 'cloudy',
            image: '<img src="img/cloudy-day.png" alt="">'
        },
        {
            icon: 'partly-cloudy-day',
            image: '<img src="img/partly-cloudy-day.png" alt="">'
        },
        {
            icon: 'partly-cloudy-night',
            image: '<img src="img/partly-cloudy-night.png" alt="">'
        }
    ];

    function getWeather() {
        $.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/" + marker.getLngLat().lat + "," + marker.getLngLat().lng).done(function (data) {
            console.log(data);
            console.log(new Date(data.currently.time * 1000));
            var dayInfo = {};
            var bucket = [];
            for (var i = 0; i <= 2; i++) {
                dayInfo = {};
                dayInfo.highTemp = data.daily.data[i].apparentTemperatureMax;
                dayInfo.lowTemp = data.daily.data[i].apparentTemperatureMin;
                dayInfo.icon = data.daily.data[i].icon;
                dayInfo.precip = data.daily.data[i].precipProbability;
                dayInfo.humidity = data.daily.data[i].humidity;
//     /* given a query in the form "lng, lat" or "lat, lng" returns the matching
                dayInfo.windSpeed = data.daily.data[i].windSpeed;
                dayInfo.uv = data.daily.data[i].uvIndex;
                bucket.push(dayInfo)


            }
            function addImage() {
                var iconBucket = [];
                myIcons.forEach(function (item) {
                    if (data.daily.data[i].icon === item.icon) {
                        iconBucket.push(item.image);
                    }
                });
                return iconBucket[0];

            }

            console.log(addImage());
            for (var i = 0; i <= 2; i++) {
                var cardClass = ".info-" + i;
                $(cardClass).html(
                    bucket[i].highTemp + "/" + bucket[i].lowTemp +
                    "<br>" +
                    bucket[i].icon +
                    "<br>" +
                    addImage()+
                    '<br>' +
                    'Precipitation ' + bucket[i].precip +
                    '<br>' +
                    'Humidity ' + bucket[i].humidity +
                    '<br>' +
                    'Wind Speed ' + bucket[i].windSpeed +
                    '<br>' +
                    'UV Index ' + bucket[i].uv
                );
            }

        })
    }
    getWeather();
});
