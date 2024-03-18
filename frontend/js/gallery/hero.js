import { galleryHero } from "../helper/constants.js";
import { getData, createElement } from "../helper/helper.js";

const heroData = await getData(galleryHero);
console.log(heroData);

const heroDiv = document.getElementsByClassName("hero-image");

heroData.forEach((ele, index) => {
  const image = createElement("img", ["w-100"], ele);
  heroDiv[index].append(image);
});
