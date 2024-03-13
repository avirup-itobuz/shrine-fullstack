// import { members, events, churchInfo } from "./data/homeData.js";

//members
document.addEventListener("DOMContentLoaded", async () => {
  const membersDiv = document.getElementById("members-div");
  const membersData = await fetch(
    "http://localhost:8000/api/homepage/churchmembers"
  );
  const members = await membersData.json();
  members.forEach((member) => {
    const card = document.createElement("div");
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("person-img");
    const img = document.createElement("img");
    img.src = member.link;
    imgDiv.appendChild(img);
    card.appendChild(imgDiv);

    const divFlex = document.createElement("div");
    divFlex.classList.add(
      "member-details",
      "d-flex",
      "justify-content-center",
      "gap-4",
      "align-items-center"
    );

    const share = document.createElement("div");
    share.classList.add(
      "share",
      "d-flex",
      "justify-content-center",
      "align-items-center"
    );
    const shareImg = document.createElement("img");
    shareImg.src = "assets/home/members/share.svg";
    share.appendChild(shareImg);

    const separator = document.createElement("div");
    separator.classList.add("separator");

    const nameDiv = document.createElement("div");
    const name = document.createElement("div");
    name.classList.add("fs-4", "fw-semibold");
    name.innerText = member.name;
    const smallName = document.createElement("p");
    smallName.innerText = member.smallName;
    nameDiv.append(name, smallName);

    divFlex.append(share, separator, nameDiv);
    //   card.appendChild(divFlex);

    const socialsDiv = document.createElement("div");
    socialsDiv.classList.add(
      "socials",
      "d-flex",
      "justify-content-center",
      "gap-4"
    );
    const instagram = document.createElement("div");
    const instagramIcon = document.createElement("img");
    instagramIcon.src = "assets/home/members/socials/instagram.svg";
    instagram.appendChild(instagramIcon);
    const google = document.createElement("div");
    const googleIcon = document.createElement("img");
    googleIcon.src = "assets/home/members/socials/google.svg";
    google.appendChild(googleIcon);
    const youtube = document.createElement("div");
    const youtubeIcon = document.createElement("img");
    youtubeIcon.src = "assets/home/members/socials/youtube.svg";
    youtube.appendChild(youtubeIcon);
    socialsDiv.append(instagram, google, youtube);

    //   card.appendChild(socialsDiv);
    const memberInfo = document.createElement("div");
    memberInfo.classList.add("memberInfo");
    memberInfo.append(divFlex, socialsDiv);
    card.append(memberInfo);

    membersDiv.appendChild(card);
  });
});

//events
// document.addEventListener("DOMContentLoaded", () => {
//   const eventsWrapper = document.getElementsByClassName("eventsWrapper")[0];
//   const eventsDiv = document.getElementById("eventsCarousel");
//   const moveLeft = document.getElementById("left-arrow");
//   const moveRight = document.getElementById("right-arrow");

//   events.forEach((event) => {
//     // console.log(event);
//     const eventsCard = document.createElement("div");
//     eventsCard.classList.add(
//       "event",
//       "d-flex",
//       "flex-column",
//       "flex-md-row",
//       "border",
//       "rounded"
//     );

//     const image = document.createElement("div");
//     image.classList.add("text-center");
//     const img = document.createElement("img");
//     img.src = event.link;
//     image.append(img);
//     eventsCard.append(image);

//     const info = document.createElement("div");
//     info.classList.add(
//       "d-flex",
//       "flex-column",
//       "justify-content-center",
//       "align-items-start",
//       "p-2",
//       "gap-3"
//     );

//     const date = document.createElement("div");
//     date.classList.add("d-flex", "gap-2");
//     const dateIcon = document.createElement("img");
//     dateIcon.src = "assets/home/events/calendar.svg";
//     const dateText = document.createElement("p");
//     dateText.classList.add("text-nowrap", "mb-0");
//     dateText.innerText = event.date;
//     date.append(dateIcon, dateText);
//     info.append(date);

//     const venue = document.createElement("div");
//     venue.classList.add("d-flex", "gap-2");
//     const venueIcon = document.createElement("img");
//     venueIcon.src = "assets/home/events/home.svg";
//     const venueText = document.createElement("p");
//     venueText.classList.add("text-nowrap", "mb-0");
//     venueText.innerText = event.venue;
//     venue.append(venueIcon, venueText);
//     info.append(venue);

//     const time = document.createElement("div");
//     time.classList.add("d-flex", "gap-2");
//     const timeIcon = document.createElement("img");
//     timeIcon.src = "assets/home/events/clock.svg";
//     const timeText = document.createElement("p");
//     timeText.classList.add("text-nowrap", "mb-0");
//     timeText.innerText = event.time;
//     time.append(timeIcon, timeText);
//     info.append(time);

//     const title = document.createElement("div");
//     const titleText = document.createElement("h4");
//     titleText.classList.add("text-nowrap");
//     titleText.innerText = event.name;
//     title.append(titleText);
//     info.append(title);

//     const about = document.createElement("div");
//     const aboutText = document.createElement("p");
//     aboutText.classList.add("mb-0");
//     aboutText.innerText = event.about;
//     about.append(aboutText);
//     info.append(about);

//     const button = document.createElement("button");
//     button.classList.add("border-0", "bg-dark", "text-white", "p-3", "rounded");
//     button.innerText = "JOIN NOW";
//     info.append(button);

//     eventsCard.append(info);
//     eventsDiv.append(eventsCard);
//   });

//   const event = document.getElementsByClassName("eventsCarousel")[0];
//   const width = event.clientWidth;
//   console.log(width);
//   let translate = 0;
//   moveRight.addEventListener("click", () => {
//     translate = translate - width / 2;
//     console.log(translate);
//     // eventsDiv.style.transform = `translateX(${translate}px)`;
//     eventsWrapper.scrollBy({ left: width, behavior: "smooth" });
//   });
//   moveLeft.addEventListener("click", () => {
//     translate = translate + width / 2;
//     console.log(translate);
//     // eventsDiv.style.transform = `translateX(${translate}px)`;
//     eventsWrapper.scrollBy({ left: -width, behavior: "smooth" });
//   });
// });

// churches
// document.addEventListener("DOMContentLoaded", function () {
//   var currentPage = 1;
//   var imagesPerPage = 3;

//   function displayImages(page) {
//     var imageGrid = document.getElementById("image-grid");
//     imageGrid.innerHTML = "";
//     var start = (page - 1) * imagesPerPage;
//     var end = start + imagesPerPage;
//     for (var i = start; i < end && i < churchInfo.length; i++) {
//       var div = document.createElement("div");
//       div.className = "col-md-3 me-3 mb-4 card border-gray p-0 ";

//       var img = document.createElement("img");
//       img.src = churchInfo[i].src;
//       img.className = "card-img-top";
//       div.appendChild(img);

//       var cardBody = document.createElement("div");
//       cardBody.className = "card-body";

//       var heading = document.createElement("h5");
//       heading.className = "card-title";
//       heading.textContent = churchInfo[i].heading;
//       cardBody.appendChild(heading);

//       var paragraph = document.createElement("p");
//       paragraph.className = "card-text";
//       paragraph.textContent = churchInfo[i].paragraph;
//       cardBody.appendChild(paragraph);

//       var smallImageDiv = document.createElement("div");
//       smallImageDiv.className = "d-flex align-items-center";

//       var smallImage = document.createElement("img");
//       smallImage.src = churchInfo[i].smallImageSrc;
//       smallImage.className = "rounded-circle mr-2";
//       smallImage.style.width = "50px";
//       smallImage.style.height = "50px";
//       smallImageDiv.appendChild(smallImage);

//       var smallParagraph = document.createElement("p");
//       smallParagraph.className = "card-text";
//       smallParagraph.textContent = churchInfo[i].smallParagraph;
//       smallImageDiv.appendChild(smallParagraph);

//       cardBody.appendChild(smallImageDiv);

//       div.appendChild(cardBody);

//       imageGrid.appendChild(div);
//     }
//   }

//   function displayPagination() {
//     var totalPages = Math.ceil(churchInfo.length / imagesPerPage);
//     var pagination = document.getElementById("pagination");
//     pagination.innerHTML = "";

//     // Previous Button
//     var prevLi = document.createElement("li");
//     prevLi.className = "page-item";
//     var prevLink = document.createElement("a");
//     prevLink.className = "page-link";
//     prevLink.href = "#";
//     prevLink.textContent = "<";
//     prevLi.appendChild(prevLink);
//     pagination.appendChild(prevLi);

//     // Next Button
//     var nextLi = document.createElement("li");
//     nextLi.className = "page-item";
//     var nextLink = document.createElement("a");
//     nextLink.className = "page-link";
//     nextLink.href = "#";
//     nextLink.textContent = ">";
//     nextLi.appendChild(nextLink);
//     pagination.appendChild(nextLi);

//     for (var i = 1; i <= totalPages; i++) {
//       var li = document.createElement("li");
//       li.className = "page-item";
//       var a = document.createElement("a");
//       a.className = "page-link";
//       a.href = "#";
//       a.textContent = i;
//       if (i === currentPage) {
//         li.classList.add("active");
//       }
//       li.appendChild(a);
//       pagination.insertBefore(li, nextLi);
//     }
//   }

//   function updateActivePagination(clickedPage) {
//     var paginationItems = document.querySelectorAll("#pagination .page-item");
//     paginationItems.forEach(function (item) {
//       item.classList.remove("active");
//     });
//     clickedPage.parentNode.classList.add("active");
//   }

//   // Initial display
//   displayImages(currentPage);
//   displayPagination();

//   // Pagination click event
//   document
//     .getElementById("pagination")
//     .addEventListener("click", function (event) {
//       event.preventDefault();
//       var target = event.target;
//       if (target.tagName === "A") {
//         var targetPage = parseInt(target.textContent);
//         if (!isNaN(targetPage)) {
//           currentPage = targetPage;
//           displayImages(currentPage);
//           updateActivePagination(target);
//         } else if (target.textContent === "<") {
//           if (currentPage > 1) {
//             currentPage--;
//             displayImages(currentPage);
//             updateActivePagination(target);
//           }
//         } else if (target.textContent === ">") {
//           if (currentPage < Math.ceil(churchInfo.length / imagesPerPage)) {
//             currentPage++;
//             displayImages(currentPage);
//             updateActivePagination(target);
//           }
//         }
//       }
//     });
// });
