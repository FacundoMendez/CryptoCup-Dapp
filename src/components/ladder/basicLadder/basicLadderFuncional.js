const basicLadderFuncional = () => {
    const toggle_link = document.querySelector(".toggle_link")
    const box_links_movile = document.querySelector(".box_links_movile")

    toggle_link.addEventListener("click" , function(){
        box_links_movile.classList.toggle("box_links_movile_active")
    })

}

export default basicLadderFuncional;