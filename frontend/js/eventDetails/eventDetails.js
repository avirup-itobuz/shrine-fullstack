var map = L.map("map").setView([22.5774753, 88.4314744], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([22.5774753, 88.4314744])
  .addTo(map)
  .bindPopup("Meet us here!!")
  .openPopup();
