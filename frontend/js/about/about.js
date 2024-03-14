const newVolunteer = document.getElementById("newvolunteer");
const church = document.getElementById("church");
const donation = document.getElementById("donation");
const member = document.getElementById("member");

const happyPrayersCount = document.getElementById("happy-prayers-count");

const getStatData = async () => {
  const data = await fetch("http://localhost:8000/api/about/aboutdata");
  const value = await data.json();
  //   newVolunteer
};

const getPrayersCount = async () => {
  const data = await fetch("http://localhost:8000/api/about/happyprayers");
  const value = await data.json();
  happyPrayersCount.innerText = `${value.value}K+`;
};

getPrayersCount();
