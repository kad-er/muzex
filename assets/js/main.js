const tabTriggers = document.getElementsByClassName("tab-trigger");
const menuTabs = document.getElementById("menu-tabs");
const mainSlider = document.getElementById("main-slider");
const header = document.getElementById("header");
const mutebtn = document.getElementById("muteBtn");
var audio = document.getElementById("audio");

function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}

$(document).ready(function () {
  $("#allowAudio").modal("show");
});

window.addEventListener("load", ui);
var audio;
// the ui function
function ui() {
   // Fix up for prefixing
   window.AudioContext = window.AudioContext||window.webkitAudioContext;
   context = new AudioContext();
   
  //getting the navigation drawer buttons
  for (let i = 0; i < tabTriggers.length; i++) {
    let tt = tabTriggers[i];
    tt.addEventListener("click", () => {
      document.getElementById("offcanvas-img").classList.add("d-none");
      document.getElementById("pills-tabContent").classList.remove("d-none");
    });
  }
  let paused = true;
  const toggleAudio = () => {
    if (paused) {
      audio.play();
      paused = !paused;
      mutebtn.firstElementChild.classList.replace(
        "fa-volume-off",
        "fa-volume-high"
      );
      audio.resume();
    } else {
      paused = !paused;
      audio.pause();
      mutebtn.firstElementChild.classList.replace(
        "fa-volume-high",
        "fa-volume-off"
      );
    }
  };

  mutebtn.addEventListener("click", () => {
    toggleAudio();
  });
  document.getElementById("playAudio").addEventListener("click", () => {
    toggleAudio();
  });

  //init the aos annimation
  AOS.init();

  //this is for the slider...
  let items = document.querySelectorAll(".carousel .carousel-item");
  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });
  //the nav bar scroll
  const tebountxt = document.getElementById("tebountxt");
  const tebounimg = document.getElementById("tebounimg");
  const tebouncard = document.getElementById("teboucard");

  tebouncard.addEventListener("mouseenter", function () {
    tebounimg.classList.remove("d-none");
    tebountxt.classList.add("show");
  });

  tebouncard.addEventListener("mouseleave", function () {
    tebounimg.classList.add("d-none");
    tebountxt.classList.remove("show");
  });
}
