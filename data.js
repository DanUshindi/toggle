let hamburger=document.querySelector(".nav-toggle");
let menu=document.querySelector(".nav-item")

hamburger.addEventListener("click",(e)=>{
    hamburger.classList.toggle("active")
    menu.classList.toggle("active")
    console.log(e.target)
})

menu.addEventListener("mouseup",(e) => {
    menu.classList.remove("active")
    console.log(e.target)
});