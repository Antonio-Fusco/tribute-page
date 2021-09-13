const icon = document.querySelector(".icon");  
const nav = document.querySelector("nav");  

 icon.addEventListener("click", () => {  
  icon.classList.toggle("close");  
  nav.classList.toggle("show");  
 });  

var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}