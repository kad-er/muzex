const tabTriggers = document.getElementsByClassName("tab-trigger");
const menuTabs = document.getElementById("menu-tabs");
const mainSlider = document.getElementById("main-slider");
const header = document.getElementById("header");
const mutebtn = document.getElementById('muteBtn')


//the media
const audio = document.getElementById('audio')
var muted = false;
function watchNavBar() {
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
  mutebtn.addEventListener('click',()=>{
    // alert(muted)
    console.log(audio)
    audio.muted = !muted;
    muted = !muted;
    console.log("this is his fucking child",mutebtn.firstChild)
    if(muted){
      mutebtn.firstElementChild.classList.replace("fa-volume-high","fa-volume-off")
    }else{
      mutebtn.firstElementChild.classList.replace("fa-volume-off","fa-volume-high")

    }
  })
  AOS.init();
  //the nav bar scroll
}
