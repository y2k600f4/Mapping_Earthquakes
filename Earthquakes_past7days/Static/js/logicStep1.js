// Add console.log to check to see if our code is working.
	console.log("working");
	

	

	// We create the tile layer that will be the background of our map.
	let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    accessToken: API_KEY
	});
	// We create the dark view tile layer that will be an option for our map.
	let satstreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
	    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
	    maxZoom: 18,
	    accessToken: API_KEY
	});
	

	// streets.addTo(map);
	

	// Create a base layer that holds both maps.
	// the key is what the user clicks on to select
	// the value is the variable reference above
	let baseMaps = {
	    "Streets": streets,
	    "Satellite Streets": satstreets
	  };
	

	// create map for 14.5.4
	let map = L.map('mapid', {
	    center: [39.5, -98.5], // center on USA
	    zoom: 3,
	    layers: [streets]
	});	 
	// Pass our map layers into our layers control and add the layers control to the map.
	L.control.layers(baseMaps).addTo(map);


	//Logic step #1
	//simply plot the raw geojson features
	// Grabbing our GeoJSON data.
	 d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then((data) => {
	     console.log(data);
	   // Creating a GeoJSON layer with the retrieved data.
	   L.geoJSON(data).addTo(map);
	 });
	
	// Then we add a control to the map that will allow the user to change
	// which layers are visible.
	L.control.layers(baseMaps, overlays).addTo(map);
	

	// Grabbing our GeoJSON data.
	d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then((data) => {
	    //console.log(data);
	

	    
	

	     // Creating a GeoJSON layer with the retrieved data.
	     L.geoJSON(data, {
	        pointToLayer: (feature, latlng) => {
	            console.log(data);
	            return L.circleMarker(latlng);
	        },
	        style: styleInfo,
	        // We create a popup for each circleMarker to display the magnitude and
	        //  location of the earthquake after the marker has been created and styled.
	        onEachFeature: (feature, layer) => {
	            layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
	        }
	    }).addTo(earthquakes);
	

	    // then add earthquakes to map
	    earthquakes.addTo(map);
	

	});
