import { getData } from "../helper/helper.js";
import { eventDetails } from "../helper/constants.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const eventId = urlParams.get("id");
console.log(eventId);

const eventsData = await getData(`${eventDetails}${eventId}`);
console.log(eventsData);

const heroTitle = document.getElementById("hero-title");
const heroText = document.getElementById("hero-text");
heroTitle.innerText = eventsData.title;
heroText.innerText = eventsData.desc;

function renderMap(lat, long) {
  let map = L.map("map").setView([lat, long], 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, long]).addTo(map).bindPopup("Meet us here!!").openPopup();
}
// renderMap(22.5774753, 88.4314744);
