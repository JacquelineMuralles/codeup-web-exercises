"use strict";

    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/navigation-guidance-day-v4',
        zoom: 10,
        center: [-98.4916,29.4252],
        boxZoom: true,
    });

$(document).ready(function () {

$.ajax("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+ darkSkyKey +"/29.4252,-98.4916").done(function (data) {
    console.log(data);
    console.log(new Date(data.currently.time * 1000));
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
            image: '<img src="img/windy.png" alt="">'
        },
        {
            icon: 'fog',
            image: '<img src="img/cloudy.png" alt="">'
        },
        {
            icon: 'cloudy',
            image: '<img src="img/cloudy.png" alt="">'
        },
        {
            icon: 'partly-cloudy-day',
            image: '<img src="part-cloud-day.png" alt="">'
        },
        {
            icon: 'partly-cloudy-night',
            image: '<img src="part-cloud-night.png" alt="">'
        }
    ];

    var dayInfo = {};
    var bucket = [];

    for (var i = 0; i <= 2; i++){
            dayInfo = {};
            dayInfo.highTemp = data.daily.data[i].apparentTemperatureMax;
            dayInfo.lowTemp = data.daily.data[i].apparentTemperatureMin;
            dayInfo.icon = data.daily.data[i].icon;
            dayInfo.precip = data.daily.data[i].precipProbability;
            dayInfo.humidity = data.daily.data[i].humidity;
            dayInfo.windSpeed = data.daily.data[i].windSpeed;
            dayInfo.uv = data.daily.data[i].uvIndex;
            bucket.push(dayInfo)
        }
    function addImage() {
        var iconBucket = [];
        myIcons.forEach(function (icon) {
            if (dayInfo.icon === icon.icon){
                iconBucket.push(icon.image);
            }
        });
                return iconBucket.toString();
        // for (var i = 0; i <= myIcons.length; i++){
            console.log(iconBucket);
    }

    for (var i = 0; i <= 2; i++){
            var cardClass = ".info-" + i;
            $(cardClass).html(
                bucket[i].highTemp + "/" + bucket[i].lowTemp +
                "<br>" +
                bucket[i].icon +
                "<br>" +
                addImage() +
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
});


});