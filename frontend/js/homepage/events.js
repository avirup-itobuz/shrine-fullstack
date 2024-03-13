import { eventsData } from "../helper/constants.js";
import { createElement, getData } from "../helper/helper.js";
const eventsWrapper = document.getElementsByClassName("eventsWrapper")[0];
const eventsDiv = document.getElementById("eventsCarousel");
const moveLeft = document.getElementById("left-arrow");
const moveRight = document.getElementById("right-arrow");

const events = await getData(eventsData);

events.forEach((event) => {
  const eventsCard = createElement("div", [
    "event",
    "d-flex",
    "flex-column",
    "flex-md-row",
    "border",
    "rounded",
  ]);
  const image = createElement("div", ["text-center"]);
  const img = createElement("img", [], event.link);
  image.append(img);
  eventsCard.append(image);

  const info = createElement("div", [
    "d-flex",
    "flex-column",
    "justify-content-center",
    "align-items-start",
    "p-2",
    "gap-3",
  ]);

  const date = createElement("div", ["d-flex", "gap-2"]);
  const dateIcon = createElement("img", [], "assets/home/events/calendar.svg");
  const dateText = createElement("p", ["text-nowrap", "mb-0"], "", event.date);
  date.append(dateIcon, dateText);

  const venue = createElement("div", ["d-flex", "gap-2"]);
  const venueIcon = createElement("img", [], "assets/home/events/home.svg");
  const venueText = createElement(
    "p",
    ["text-nowrap", "mb-0"],
    "",
    event.venue
  );
  venue.append(venueIcon, venueText);

  const time = createElement("div", ["d-flex", "gap-2"]);
  const timeIcon = createElement("img", [], "assets/home/events/clock.svg");
  const timeText = createElement("p", ["text-nowrap", "mb-0"], "", event.time);
  time.append(timeIcon, timeText);

  info.append(date, venue, time);

  const title = createElement("div");
  const titleText = createElement("h4", ["text-nowrap"], "", event.name);
  title.append(titleText);
  info.append(title);

  const about = createElement("div");
  const aboutText = createElement("p", ["mb-0"], "", event.about);
  about.append(aboutText);
  info.append(about);

  const button = createElement(
    "button",
    ["border-0", "bg-dark", "text-white", "p-3", "rounded"],
    "",
    "JOIN NOW"
  );
  info.append(button);

  eventsCard.append(info);
  eventsDiv.append(eventsCard);
});

const event = document.getElementsByClassName("eventsCarousel")[0];
const width = event.clientWidth;
let translate = 0;
moveRight.addEventListener("click", () => {
  translate = translate - width / 2;
  console.log(translate);
  eventsWrapper.scrollBy({ left: width, behavior: "smooth" });
});
moveLeft.addEventListener("click", () => {
  translate = translate + width / 2;
  console.log(translate);
  eventsWrapper.scrollBy({ left: -width, behavior: "smooth" });
});
