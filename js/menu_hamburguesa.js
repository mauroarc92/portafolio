
const ambur = document.querySelector(".btn_menu")
const menulink = document.querySelector(".menu")



ambur.addEventListener("click", (e) => {
    menulink.classList.toggle('enlace')
    menulink.style.transition= "transform 0.5s ease-in-out"
})

menulink.addEventListener("click", (e) => {
    menulink.classList.remove("enlace")
    
    })

