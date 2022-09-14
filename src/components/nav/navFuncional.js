const navFuncional = () => {

    const listNav = document.querySelector(".listNav")
    const nav_Toggle = document.querySelector(".nav_Toggle")


    nav_Toggle.addEventListener("click", function(){
        listNav.classList.toggle("listNav_active")
    })
    

}

export default navFuncional;