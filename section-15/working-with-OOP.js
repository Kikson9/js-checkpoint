'use strict';

// Working with the geolocation API and leaflet library
if (navigator.geolocation) {
  // for if the browsr supports the API
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // first function for if it successfully reads the location
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

      const coords = [latitude, longitude];

      const map = L.map('map').setView(coords, 13); // the 'map' used here has to be an id in the html

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      L.marker(coords)
        .addTo(map)
        .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        .openPopup();
    },
    function () {
      // second function for if it is unsuccessful
      alert('We could not get your location');
    }
  );
}
