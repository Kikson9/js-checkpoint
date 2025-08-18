'use strict';

let map, mapEvent;

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

      map = L.map('map').setView(coords, 13); // the 'map' used here has to be an id in the html

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // handling clicks on map
      map.on('click', function (mapE) {
        mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
      });
    },
    function () {
      // second function for if it is unsuccessful
      alert('We could not get your location');
    }
  );
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // display marker
  console.log(mapEvent);

  const { lat, lng } = mapEvent.latlng;
  console.log(lat, lng);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      })
    )
    .setPopupContent('Workout')
    .openPopup();
});
