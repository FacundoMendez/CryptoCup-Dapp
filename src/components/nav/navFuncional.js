const navFuncional = () => {

    const listNav = document.querySelector(".listNav")
    const nav_Toggle = document.querySelector(".nav_Toggle")
    const nav_list_links = document.querySelectorAll(".nav_list_links")



    nav_Toggle.addEventListener("click", function(){
        listNav.classList.toggle("listNav_active")
    })


    
    for( let element of nav_list_links ){
        element.addEventListener("click" , function(){
            listNav.classList.toggle("listNav_active")
        })
    }

}

export default navFuncional;