let prevScrollPos = window.pageYOffset;
const header = document.getElementById("header");
console.log("começo");

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.style.top = "0";
  } else {
    header.style.top = "-90px"; // ou o valor que você preferir para esconder
  }

  prevScrollPos = currentScrollPos;
  console.log("chegou aqui");
}