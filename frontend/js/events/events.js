import { getData, createElement } from "../helper/helper.js";
import { allEventsData } from "../helper/constants.js";

const eventsDiv = document.getElementById("events");
const eventsData = await getData(allEventsData);

function createEventsCard(ele) {
  return `<div class="border rounded">
        <div class="img position-relative">
          <img class="w-100" src="${ele.img}" alt="baby" />
          <div class="calendar bg-dark position-absolute">
            <img class="m-1" src="http://localhost:8000/assets/events/calendar.svg" alt="calendar" />
          </div>
        </div>
        <h4 class="date text-start px-2 pt-2">${ele.date}</h4>
        <div class="info d-flex p-2 justify-content-between px-2">
          <div class="time d-flex justify-content-center align-items-center">
            <img src="http://localhost:8000/assets/events/clock.svg" alt="clock" />
            <p class="mx-1 mb-0">${ele.time}</p>
          </div>
          <div class="place d-flex justify-content-center align-items-center">
            <img src="http://localhost:8000/assets/events/location.svg" alt="location" />
            <p class="mx-1 mb-0">${ele.location}</p>
          </div>
        </div>
        <h3 class="px-2">${ele.title}</h3>
        <p class="px-2">
          ${ele.subtitle}
        </p>
        <a href="../eventdetails/eventdetails.html?id=${ele.id}"><button class="btn btn-dark mx-2 p-3 px-4 mb-2" type="submit">
          JOIN NOW
        </button></a>
      </div>`;
}

eventsData.forEach((ele) => {
  const eventCard = createEventsCard(ele);
  eventsDiv.insertAdjacentHTML("beforeend", eventCard);
});
