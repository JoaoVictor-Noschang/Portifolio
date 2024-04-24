let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-90px";
  }

  prevScrollPos = currentScrollPos;
}