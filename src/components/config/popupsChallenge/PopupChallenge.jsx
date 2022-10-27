import React, {useEffect} from 'react'
import popupPredictionFuncional from './popupChallengeFuncional'
import "./popupChallenge.css"

const PopupChallenge = ({salaCreada, tokensBalanceUser}) => {
  useEffect(() => {
    popupPredictionFuncional(salaCreada, tokensBalanceUser)
  },[])

  
    return (
    <>
    { !salaCreada ?   

        <div className="popupConfirmed_challenge">   {/* si la sala se creo correctamente */}
            <p>Room Succesfully Created</p>
        </div>

      :

      salaCreada ?

        <div className="popupRejected_challenge">   {/* si la sala ya esta creada */}
            <p>Room already made</p>
        </div>

      :

      tokensBalanceUser ?

        <div className="popupRejected_challenge">   {/* si el usuario no tiene tokens */}
            <p>No balance tokens</p>
        </div>
    
    :

    null

   } 
    </>
  )
}

export default PopupChallenge