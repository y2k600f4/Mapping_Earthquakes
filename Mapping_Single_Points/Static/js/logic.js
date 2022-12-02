// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level
//let map = L.map('mapid').setView([40.7, -94.5], 5);
//let map = L.map('mapid').setView([38.8929, -77.0252], 14);

//Change zoom level for circle
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// We create the tile layer that will be the background of our map

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//Change marker to circle
//let marker =L.circle([34.0522, -118.2437], {radius: 100 }).addTo(map);
//Use circle marker and add radius, color, fill
let marker =L.circleMarker([34.0522, -118.2437],{radius:300, color: "black",fillColor:'#ffffa1'}).addTo(map);



//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// We create the tile layer that will be the background of our map. (change streets-v11 to darv-v10 to make background dark)
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',{
	attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	maxZoom: 18,

	id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,

	accessToken: API_KEY
});
// Then we add our "graymap" tile layer to the map
streets.addTo(map);

