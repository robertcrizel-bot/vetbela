document.addEventListener("DOMContentLoaded", function () {
  var btn = document.querySelector(".menu-btn");
  var nav = document.querySelector("nav");
  if (btn && nav) {
    btn.addEventListener("click", function () {
      nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", nav.classList.contains("open") ? "true" : "false");
    });
  }
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});