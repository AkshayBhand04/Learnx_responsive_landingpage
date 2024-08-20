let menu_btn=document.querySelector(".nav i")
let menu_list=document.querySelector(".menu")
let menu_close=document.querySelector(".menu i")

menu_btn.addEventListener("click",()=>{
    menu_btn.style.display="none"
    menu_list.style.display="flex"
})
menu_close.addEventListener("click",()=>{
    console.log("wow")
    menu_list.style.display="none"
    menu_btn.style.display="block"
})


