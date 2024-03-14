import { getData } from "../helper/helper.js";
import { aboutData, happyPrayersCount } from "../helper/constants.js";

const newVolunteer = document.getElementById("newvolunteer");
const church = document.getElementById("church");
const donation = document.getElementById("donation");
const member = document.getElementById("member");

const happyPrayersCountDiv = document.getElementById("happy-prayers-count");

const getStatData = async () => {
  const value = await getData(aboutData);
  console.log(value);
  newVolunteer.innerText = value.newvolunteer + "+";
  church.innerText = value.churchlocations + "+";
  donation.innerText = "$" + value.manageddonations + "M+";
  member.innerText = value.newmember + "+";
};

const getPrayersCount = async () => {
  const value = await getData(happyPrayersCount);
  happyPrayersCountDiv.innerText = `${value.value}K+`;
};

getPrayersCount();
getStatData();
