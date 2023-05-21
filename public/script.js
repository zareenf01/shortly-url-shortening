"use stict";

const form = document.getElementById("link-form");
const input = document.getElementById("link");
const errorMsg = document.getElementById("err-msg");

form.addEventListener("submit", formSubmit);

// Validate URL
function isUrlValid(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$", // fragment locator
    "i"
  );
  return pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === "") {
    errorMsg.innerHTML = "Please enter a link";
    input.classList.add(" border-red-500 ");
  } else if (!isUrlValid(input.value)) {
    errorMsg.innerHTML = "Please enter a valid URL";
    input.classList.add(" border-red-500 ");
  } else {
    errorMsg.innerHTML = "";
    alert("Success");
  }
}

let hamburger = document.querySelector(".hamburger");
let btn = document.getElementById("menu-btn");
let menu = document.getElementById("menu");

btn.addEventListener("click", function () {
  btn.classList.toggle("open");
  menu.classList.toggle("show");
});


let copyBtn = document.querySelectorAll(".copy-btn");

copyBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.style.backgroundColor = "#252241";
    btn.textContent = "Copied!";
  });
});
