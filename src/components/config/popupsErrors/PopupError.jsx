import React , {useEffect} from 'react'
import "./popupError.css"
import popupErrorFuncional from './popupErrorFuncional'

const PopupError = ({chainIncorrecta}) => {

    useEffect(() => {
        popupErrorFuncional()
    },[])

  return (
    <>  
        {chainIncorrecta ?
    
        <div className="errorNoMetamask">
            <p>
                Please connect to the Binance Smart Chain Network!
            </p>
        </div> 
        : null
        }
  </>
  
  )
}

export default PopupError