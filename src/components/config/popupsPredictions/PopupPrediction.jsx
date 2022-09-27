import React, {useEffect} from 'react'
import popupPredictionFuncional from './popupPedictionFuncional'
import "./popupPrediction.css"

const PopupPrediction = ({confirmedPrediction}) => {
  useEffect(() => {
    popupPredictionFuncional(confirmedPrediction)
  },[])
  
    return (
    <>
    {confirmedPrediction ? 
    <div className="popupConfirmed">
        <p>Prediccion Succesfully Created</p>
    </div>
    :
    <div className="popupRejected">
        <p>PREDICTION ALREADY MADE</p>
    </div>
    }
    </>
  )
}

export default PopupPrediction