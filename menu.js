window.onscroll = function() {myFuncton()};

var navbar = document.getElementById("navbar")


function myFuncton() {
    if(window.pageYOffset >= sticky){
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}