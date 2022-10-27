const popupPredictionFuncional = (salaCreada, tokensBalanceUser ,salaNoCreada) => {
    const popupConfirmed = document.querySelector(".popupConfirmed_challenge")
    const popupRejected = document.querySelector(".popupRejected_challenge")

    if(salaCreada){
        popupConfirmed.classList.add("popupConfirmed_challenge_active")
    
        setTimeout(function(){
            popupConfirmed.classList.remove("popupConfirmed_challenge_active")
        },5000)
        
    }else if(salaNoCreada || tokensBalanceUser ){
        popupRejected.classList.add("popupRejected_challenge_active")
    
        setTimeout(function(){
            popupRejected.classList.remove("popupRejected_challenge_active")
        },5000)
        
    }




    
}

export default popupPredictionFuncional;