function initMap() {
	L.mapquest.key = 'M04CaS4kAg7xUbqywhIeReLzUpCNBT3c';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
	center: [32.878505, -117.235525],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12
	});

	L.marker([32.878505, -117.235525]).addTo(map)
}