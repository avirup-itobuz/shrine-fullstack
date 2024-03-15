import { getData, createElement } from "../helper/helper.js";
import { pastorTeamCarousel } from "../helper/constants.js";
const prevBtn = document.getElementById("left-btn");
const nextBtn = document.getElementById("right-btn");
const carousel = document.getElementById("carousel");
const images = await getData(pastorTeamCarousel);
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;
}

function goToNext() {
  currentIndex = Math.min(currentIndex + 1, images.length - 1);
  updateCarousel();
}

function goToPrev() {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateCarousel();
}

images.forEach((image) => {
  const carouselImg = createElement("div", ["carousel-img", "w-100"]);
  const img = createElement("img", [], image);
  img.alt = "image";
  carouselImg.append(img);
  carousel.appendChild(carouselImg);
});

prevBtn.addEventListener("click", goToPrev);
nextBtn.addEventListener("click", goToNext);
