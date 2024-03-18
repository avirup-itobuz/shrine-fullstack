import { getData, createElement } from "../helper/helper.js";
import { eventsHero } from "../helper/constants.js";

const house = document.getElementById("house");
const bible = document.getElementById("bible");
const book = document.getElementById("book");
const heroData = await getData(eventsHero);

const houseImg = createElement("img", ["w-100"], heroData[0]);
house.append(houseImg);
const bibleImg = createElement("img", ["w-100"], heroData[1]);
bible.append(bibleImg);
const bookImg = createElement("img", ["w-100"], heroData[2]);
book.append(bookImg);
