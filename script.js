async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

// document.addEventListener(
//   "load",
//   (document.getElementById("div-user-card").style.display = "none")
// );

const btn = document.getElementById("btn-random");
btn.onclick = () =>
  (document.getElementById("div-loading-card").style.display = "none");
