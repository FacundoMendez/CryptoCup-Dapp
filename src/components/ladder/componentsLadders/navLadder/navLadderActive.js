const navLadderActive = () => {
    const toggle_link = document.querySelector(".toggle_link")
    const box_links_movile = document.querySelector(".box_links_movile")
    const link_nav = document.querySelectorAll(".link_nav")
    
    toggle_link.addEventListener("click" , function(){
        box_links_movile.classList.toggle("box_links_movile_active")
    })

    for( let element of link_nav ){

        element.addEventListener("click" , function(){
            box_links_movile.classList.toggle("box_links_movile_active")
        })
    }
}

export default navLadderActive;