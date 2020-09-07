const requirejs = require('requirejs');
const express   = requirejs('express');
var app        	= express();
const geolocation = requirejs('geolocation');
const { uuid } = requirejs('uuid');
//const x = document.getElementById("demo");
const id = uuid;

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/ex6.html'));
});

 
geolocation.getCurrentPosition(function (err, position) {
  if (err) throw err
  console.log(position)
});

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation não é suportada por esse browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

app.listen(8082);