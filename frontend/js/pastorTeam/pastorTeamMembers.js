import { getData, createElement } from "../helper/helper.js";
import { pastorTeamData } from "../helper/constants.js";

const members = await getData(pastorTeamData);
console.log(members);

const membersDiv = document.getElementById("members-div");
members.forEach((member) => {
  const card = createElement("div", ["p-2"]);
  const imgDiv = createElement("div", ["person-img"]);
  const img = createElement("img", ["w-100"], member.link);
  imgDiv.append(img);
  card.append(imgDiv);

  const divFlex = createElement("div", [
    "member-details",
    "d-flex",
    "justify-content-center",
    "gap-4",
    "align-items-center",
  ]);
  const share = createElement("div", [
    "share",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "border",
  ]);
  const shareImg = createElement(
    "img",
    [],
    "http://localhost:8000/assets/home/members/share.svg"
  );
  share.append(shareImg);

  const separator = createElement("div", ["separator"]);

  const nameDiv = createElement("div");
  const name = createElement("div", ["fs-4", "fw-semibold"], "", member.name);
  const smallName = createElement("p", [], "", member.smallName);
  nameDiv.append(name, smallName);

  divFlex.append(share, separator, nameDiv);

  const socialsDiv = createElement("div", [
    "socials",
    "d-flex",
    "justify-content-center",
    "gap-4",
  ]);
  const instagram = createElement("div");
  const instagramIcon = createElement(
    "img",
    [],
    "http://localhost:8000/assets/home/members/socials/instagram.svg"
  );
  instagram.append(instagramIcon);
  const google = createElement("div");
  const googleIcon = createElement(
    "img",
    [],
    "http://localhost:8000/assets/home/members/socials/google.svg"
  );
  google.append(googleIcon);
  const youtube = createElement("div");
  const youtubeIcon = createElement(
    "img",
    [],
    "http://localhost:8000/assets/home/members/socials/youtube.svg"
  );
  youtube.append(youtubeIcon);
  socialsDiv.append(instagram, google, youtube);

  const memberInfo = createElement("div", ["memberInfo"]);
  memberInfo.append(divFlex, socialsDiv);
  card.append(memberInfo);

  membersDiv.append(card);
});
