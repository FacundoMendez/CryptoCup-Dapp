const popupPredictionFuncional = (confirmedPrediction) => {
    const popupConfirmed = document.querySelector(".popupConfirmed")
    const popupRejected = document.querySelector(".popupRejected")

    if(confirmedPrediction){
        popupConfirmed.classList.add("popupConfirmed_active")
    
        setTimeout(function(){
            popupConfirmed.classList.remove("popupConfirmed_active")
        },5000)
        
    }else{
        popupRejected.classList.add("popupRejected_active")
    
        setTimeout(function(){
            popupRejected.classList.remove("popupRejected_active")
        },5000)
        
    }




    
}

export default popupPredictionFuncional;