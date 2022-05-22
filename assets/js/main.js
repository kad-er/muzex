const tabTriggers = document.getElementsByClassName('tab-trigger');
const menuTabs = document.getElementById('menu-tabs');


window.addEventListener('load',ui);

function ui(){
    //getting the navigation drawer buttons 
    for(let i=0;i < tabTriggers.length;i++) {
        let tt = tabTriggers[i];
        tt.addEventListener('click',()=>{
            document.getElementById('offcanvas-img').classList.add("d-none")
        })
    };
    //make some responsive steps for menu-tabs 
    window.addEventListener('resize',()=>{
        var w = window.innerWidth;
        console.log(w);
        //768
        // if(w <= 768){
            // menuTabs.classList.add('')
        // }
    })
    
}