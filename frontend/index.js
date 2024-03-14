

function manageHash(url) {
  console.log(url);
}

window.addEventListener("hashchange", () => {
  manageHash(window.location.hash.slice(1));
});
