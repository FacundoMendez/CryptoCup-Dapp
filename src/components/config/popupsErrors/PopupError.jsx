import React , {useEffect} from 'react'
import "./popupError.css"
import popupErrorFuncional from './popupErrorFuncional'

const PopupError = ({chainIncorrecta , connectedPopup}) => {

    useEffect(() => {
        popupErrorFuncional()
    },[])

  return (
    <>  
    
    {chainIncorrecta ?
    
        <div className="errorNoMetamask">
            <p>Please connect to the Binance Smart Chain Network!</p>
        </div> 
        : 
        null
    }

    {connectedPopup ?
        <div className="errorNoMetamask" style={{  width: "40rem" }}>
            <p className='connectMetamask' style={{fontSize: "2rem" ,color: "white" }} > Please connect to Metamask!</p>
        </div> 
        :
        null
    }
  </>
  
  )
}

export default PopupError