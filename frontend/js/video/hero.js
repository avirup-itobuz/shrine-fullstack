import { getData, createElement } from "../helper/helper.js";
import { videosHero } from "../helper/constants.js";

const heroImgfather = document.getElementById("heroImgfather");
const heroImgMary = document.getElementById("heroImgMary");
const heroImgJesus = document.getElementById("heroImgJesus");

async function renderHeroSection() {
  const heroData = await getData(videosHero);
  const fatherImg = createElement("img", ["w-100"], heroData[0]);
  heroImgfather.append(fatherImg);
  const maryImg = createElement("img", ["w-100"], heroData[1]);
  heroImgMary.append(maryImg);
  const jesusImg = createElement("img", ["w-100"], heroData[2]);
  heroImgJesus.append(jesusImg);
}
renderHeroSection();
