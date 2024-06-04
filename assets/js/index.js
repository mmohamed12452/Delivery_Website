const menuBar = document.getElementById("icones");
const navbar = document.getElementById("navbar");

let ismenuvisible=false;

menuBar.addEventListener("click", function(){    
    if(ismenuvisible){
        navbar.classList.add("show");
    }    
    else{
        navbar.classList.remove("show");
    }
    ismenuvisible = !ismenuvisible;
});

