window.onscroll = function() {myFuncton()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFuncton() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}