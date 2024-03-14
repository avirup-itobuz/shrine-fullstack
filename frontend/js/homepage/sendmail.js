const subscribeEmail = document.getElementById("subscribe-email");
const subscribeBtn = document.getElementById("subscribe-btn");
const subscribeCheck = document.getElementById("subscribe-validation");

const footerSubscribeEmail = document.getElementById("footer-subscribe-email");
const footerSubsribeBtn = document.getElementById("footer-subscribe-btn");

const sendEmail = async (mail) => {
  const url = "http://localhost:8000/api/homepage/sendMail";
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: mail }),
  });
  response = await response.json();
  console.log(response);
  if (response.status === "invalid") alert("invalid email address");
};

subscribeBtn.addEventListener("click", () => {
  if (subscribeCheck && subscribeCheck.checked === false) {
    alert("please check the box below");
  } else {
    sendEmail(subscribeEmail.value);
  }
});
footerSubsribeBtn.addEventListener("click", () => {
  sendEmail(footerSubscribeEmail.value);
});
