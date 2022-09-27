const popupErrorFuncional = () => {
    const errorCuponPropio = document.querySelector(".errorNoMetamask")

    errorCuponPropio.classList.add("errorNoMetamask_active")
    
    setTimeout(function(){
       errorCuponPropio.classList.remove("errorNoMetamask_active")
    },5000)
    
}

export default popupErrorFuncional;