const preloadFuncional = () => {
    let preload = document.querySelector(".preload");  
    setTimeout(function(){
        preload.classList.add("cerrar");
        preload.style.zIndex=0;
    },500)
}

export default preloadFuncional;