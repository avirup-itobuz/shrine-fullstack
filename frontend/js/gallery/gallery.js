import { galleryImages } from "../helper/constants.js";
import { getData, createElement } from "../helper/helper.js";

const galleryData = await getData(galleryImages);
const tabs = document.getElementById("tabs");
const galleryDiv = document.getElementById("gallery-items");
console.log(galleryData);

function renderImages() {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].style.borderBottom = "5px solid white";
    let hash = tabs.children[i].innerText.toLowerCase();
    if (hash === "all")
      tabs.children[i].style.borderBottom = "5px solid rgb(184, 10, 10)";
  }
  galleryDiv.innerHTML = "";
  galleryData.forEach((ele) => {
    const imgDiv = createElement("div", []);
    const img = createElement("img", ["w-100"], ele.link);
    imgDiv.append(img);
    galleryDiv.append(imgDiv);
  });
}
function filterImages(filter) {
  for (let i = 0; i < tabs.children.length; i++) {
    tabs.children[i].style.borderBottom = "5px solid white";
    let hash = tabs.children[i].innerText.toLowerCase();
    if (hash === filter)
      tabs.children[i].style.borderBottom = "5px solid rgb(184, 10, 10)";
  }
  galleryDiv.innerHTML = "";
  galleryData.forEach((ele) => {
    if (ele.category === filter) {
      const imgDiv = createElement("div", []);
      const img = createElement("img", ["w-100"], ele.link);
      imgDiv.append(img);
      galleryDiv.append(imgDiv);
    }
  });
}

renderImages();

window.addEventListener("hashchange", () => {
  let hash = window.location.hash.slice(1);
  console.log(hash);
  if (hash === "all") renderImages();
  else filterImages(hash);
});
