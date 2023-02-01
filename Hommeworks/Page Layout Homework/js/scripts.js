const
hamburger = document.getElementById("hamburger"),
arrow = document.getElementById("arrow"),
mobileMenu = document.getElementById("nav");

hamburger.addEventListener("click", (e) => {
    mobileMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
})


