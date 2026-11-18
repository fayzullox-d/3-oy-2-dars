/** @format */

// Mobil menyuni ochish / yopish
var menu = document.getElementById("nav-menu");
document.getElementById("nav-toggle").onclick = function () {
  menu.classList.add("show");
};
document.getElementById("nav-close").onclick = function () {
  menu.classList.remove("show");
};
var links = document.querySelectorAll(".nav-link");
for (var i = 0; i < links.length; i++) {
  links[i].onclick = function () {
    menu.classList.remove("show");
    for (var j = 0; j < links.length; j++) links[j].classList.remove("active");
    this.classList.add("active");
  };
}

// Qorong'i / yorug' rejim
document.getElementById("theme-btn").onclick = function () {
  document.body.classList.toggle("dark");
};

// Slayder nuqtalari
var slider = document.getElementById("slider");
var dots = document.querySelectorAll("#dots span");
slider.onscroll = function () {
  var n = Math.round(slider.scrollLeft / 165);
  for (var d = 0; d < dots.length; d++) dots[d].classList.remove("on");
  if (dots[n]) dots[n].classList.add("on");
};
