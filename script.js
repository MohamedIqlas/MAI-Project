function toggleMenu() {
    document.querySelector(".navbar-menu").classList.toggle("show");
}


// text changes anime
const words = ["FASTER", "EFFICIENT", "EASY"];
let index = 0;

const changingText = document.getElementById("changing-text");

setInterval(() => {
  index = (index + 1) % words.length;
  changingText.textContent = words[index];
}, 3000); 
