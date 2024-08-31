alert("hello");
let button = document.getElementById("#menu");
let menuSection = document.querySelector(".site-navigation ul");
button.addEventListener("click", function () {
   if (menuSection.classList.toggle("show-menu"))
    {
        button.innerHTML = "close"
    }else{
        button.innerHTML = "menu"
    }
});



