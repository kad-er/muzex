const tabTriggers = document.getElementsByClassName("tab-trigger");
const menuTabs = document.getElementById("menu-tabs");
const mainSlider = document.getElementById('main-slider')
const header = document.getElementById('header');


function watchNavBar(){
    // get the header height first
}

window.addEventListener("load", ui);

function ui() {
  //getting the navigation drawer buttons
  for (let i = 0; i < tabTriggers.length; i++) {
    let tt = tabTriggers[i];
    tt.addEventListener("click", () => {
      document.getElementById("offcanvas-img").classList.add("d-none");
    });
  }
  //the nav bar scroll
}
