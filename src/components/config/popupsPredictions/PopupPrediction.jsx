import React, {useEffect, useContext} from 'react'
import popupPredictionFuncional from './popupPedictionFuncional'
import "./popupPrediction.css"
import ContextConnected from '../context/ConnectedContext'

const PopupPrediction = () => {
  useEffect(() => {
    popupPredictionFuncional(ConfirmPopupContext.confirmedPrediction)
  },[])

  const ConfirmPopupContext = useContext(ContextConnected)
  
    return (
    <>
    {ConfirmPopupContext.confirmedPrediction === true ? 
      <div className="popupConfirmed">
          <p>Prediccion Succesfully Created</p>
      </div>
      :
      <div className="popupRejected">
          <p>prediction already made</p>
      </div>
    }
    </>
  )
}

export default PopupPrediction