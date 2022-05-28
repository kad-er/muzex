const tabTriggers = document.getElementsByClassName("tab-trigger");
const menuTabs = document.getElementById("menu-tabs");
const mainSlider = document.getElementById("main-slider");
const header = document.getElementById("header");
const mutebtn = document.getElementById("muteBtn");

//the media
const audio = document.getElementById("audio");
var muted = false;
function watchNavBar() {
  // get the header height first
}

window.addEventListener("load", ui);

// the ui function
function ui() {
  //getting the navigation drawer buttons
  for (let i = 0; i < tabTriggers.length; i++) {
    let tt = tabTriggers[i];
    tt.addEventListener("click", () => {
      document.getElementById("offcanvas-img").classList.add("d-none");
      document.getElementById("pills-tabContent").classList.remove("d-none");
    });
  }

  // try to run the audio
  try {
    audio.play();
  } catch (e) {
    console.error(e);
  }

  mutebtn.addEventListener("click", () => {
    // alert(muted)
    console.log(audio);
    audio.muted = !muted;
    muted = !muted;
    console.log("this is his fucking child", mutebtn.firstChild);
    if (muted) {
      mutebtn.firstElementChild.classList.replace(
        "fa-volume-high",
        "fa-volume-off"
      );
    } else {
      mutebtn.firstElementChild.classList.replace(
        "fa-volume-off",
        "fa-volume-high"
      );
    }
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

  tebouncard.addEventListener("click", function () {
    tebounimg.classList.toggle("d-none");
  });
}
