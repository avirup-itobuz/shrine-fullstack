import { getData, createElement } from "../helper/helper.js";
import { videosListing } from "../helper/constants.js";

const videosDiv = document.getElementById("videos-div");
const videosData = await getData(videosListing);
videosData.forEach((ele) => {
  console.log(ele);
  let videoDiv;
  if (ele.size === 1)
    videoDiv = createElement("div", [
      "p-3",
      "col-12",
      "col-md-4",
      "d-flex",
      "flex-column",
    ]);
  else
    videoDiv = createElement("div", [
      "p-3",
      "col-12",
      "col-md-8",
      "d-flex",
      "flex-column",
    ]);
  const img = createElement("img", ["w-100", "mb-3"], ele.link);
  const text = createElement("h5", ["w-100", "fw-semibold"], "", ele.name);
  videoDiv.append(img, text);
  videosDiv.append(videoDiv);
});
