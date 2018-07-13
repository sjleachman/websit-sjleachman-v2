
// Slide Oute Menu (MAIN)
function openSideMenu(){
    document.getElementById('sideMenu').style.width='250px';
    document.getElementById('nav-open').style.display='none';
    //document.getElementById('body').style.marginLeft='250px';
}
function closeSideMenu(){
    document.getElementById('sideMenu').style.width='0';
    document.getElementById('nav-open').style.display='';
    // document.getElementById('body').style.marginLeft='0';
}

// The Below Block of code for adding margin-top to slide Nav bottom dropdown li 


function addMargin(){
document.getElementById('dropdown-bottom-nav-item').classList.toggle("active");
}

function removeMargin (){
    document.getElementById('dropdown-bottom-nav-item').classList.remove("active");
}

