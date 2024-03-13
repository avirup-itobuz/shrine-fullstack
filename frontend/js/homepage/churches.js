import { churchData } from "../helper/constants.js";
import { createElement, getData } from "../helper/helper.js";

const churchInfo = await getData(churchData);

let currentPage = 1;
let imagesPerPage = 3;

function displayImages(page) {
  let imageGrid = document.getElementById("image-grid");
  imageGrid.innerHTML = "";
  let start = (page - 1) * imagesPerPage;
  let end = start + imagesPerPage;
  for (let i = start; i < end && i < churchInfo.length; i++) {
    const div = createElement("div", [
      "col-md-3",
      "me-3",
      "mb-4",
      "card",
      "border-gray",
      "p-0",
    ]);

    const img = createElement("img", ["card-img-top"], churchInfo[i].src);
    div.appendChild(img);

    const cardBody = createElement("div", ["card-body"]);

    const heading = createElement(
      "h5",
      ["card-title"],
      "",
      churchInfo[i].heading
    );
    cardBody.appendChild(heading);

    const paragraph = createElement(
      "p",
      ["card-text"],
      "",
      churchInfo[i].paragraph
    );
    cardBody.appendChild(paragraph);

    const smallImageDiv = createElement("div", [
      "d-flex",
      "align-items-center",
    ]);

    const smallImage = createElement(
      "img",
      ["rounded-circle", "mr-2"],
      churchInfo[i].src
    );
    smallImage.style.width = "50px";
    smallImage.style.height = "50px";
    smallImageDiv.appendChild(smallImage);

    const smallParagraph = createElement(
      "p",
      ["card-text"],
      "",
      churchInfo[i].smallParagraph
    );
    smallImageDiv.appendChild(smallParagraph);

    cardBody.appendChild(smallImageDiv);

    div.appendChild(cardBody);

    imageGrid.appendChild(div);
  }
}

function displayPagination() {
  let totalPages = Math.ceil(churchInfo.length / imagesPerPage);
  let pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  // Previous Button
  const prevLi = createElement("li", ["page-item"]);
  const prevLink = createElement("a", ["page-link"], "", "<");
  prevLink.href = "#";
  prevLi.appendChild(prevLink);
  pagination.appendChild(prevLi);

  // Next Button
 const nextLi = createElement("li", ["page-item"]);
 const nextLink = createElement("a", ["page-link"], "", "<");
  nextLink.href = "#";
  nextLi.appendChild(nextLink);
  pagination.appendChild(nextLi);

  for (let i = 1; i <= totalPages; i++) {
    let li = document.createElement("li");
    li.className = "page-item";
    let a = document.createElement("a");
    a.className = "page-link";
    a.href = "#";
    a.textContent = i;
    if (i === currentPage) {
      li.classList.add("active");
    }
    li.appendChild(a);
    pagination.insertBefore(li, nextLi);
  }
}

function updateActivePagination(clickedPage) {
  let paginationItems = document.querySelectorAll("#pagination .page-item");
  paginationItems.forEach(function (item) {
    item.classList.remove("active");
  });
  clickedPage.parentNode.classList.add("active");
}

// Initial display
displayImages(currentPage);
displayPagination();

// Pagination click event
document
  .getElementById("pagination")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let target = event.target;
    if (target.tagName === "A") {
      let targetPage = parseInt(target.textContent);
      if (!isNaN(targetPage)) {
        currentPage = targetPage;
        displayImages(currentPage);
        updateActivePagination(target);
      } else if (target.textContent === "<") {
        if (currentPage > 1) {
          currentPage--;
          displayImages(currentPage);
          updateActivePagination(target);
        }
      } else if (target.textContent === ">") {
        if (currentPage < Math.ceil(churchInfo.length / imagesPerPage)) {
          currentPage++;
          displayImages(currentPage);
          updateActivePagination(target);
        }
      }
    }
  });
