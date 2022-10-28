import React, {useEffect} from 'react'
import popupPredictionFuncional from './popupChallengeFuncional'
import "./popupChallenge.css"

const PopupChallenge = ({salaCreada , messajePopup }) => {
  useEffect(() => {
    popupPredictionFuncional(salaCreada )
  },[])

  
    return (
    <>
    { salaCreada ?   

        <div className="popupConfirmed_challenge">   {/* si la sala se creo correctamente */}
            <p>{messajePopup}</p>
        </div>

    : salaCreada === false?

        <div className="popupRejected_challenge">   {/* si la sala ya esta creada */}
            <p>{messajePopup}</p>
        </div>
   :
    null
        } 
    </>
  )
}

export default PopupChallenge