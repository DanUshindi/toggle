let hamburger=document.querySelector(".nav-toggle");
let menu=document.querySelector(".nav-item")

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active")
})