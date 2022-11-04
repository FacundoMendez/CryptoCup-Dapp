import React, {useState} from 'react'
import "./myFee.css"
import exit from "../../../nav/src/x.png"


const MyFee = () => {

    const [activePopup , setActivePopup] = useState(false)
    const [porcentajeUser , setPorcentajeUser] = useState([]) /* porcentaje que el usuario va recaudando */


    const active = () =>{
        setActivePopup(!activePopup)
    }

  return (
    <div className={activePopup ? 'myFee' : null}>
        <div className={!activePopup ? 'buttonMyFee' : "buttonMyFee_activ" }onClick={() => active()}>How much is my Fee to unstake now</div>

        {
            activePopup ? 
                <div className="containerInfoFee" onClick={() => active()}>
                    <div className=" boxInfoFee">
                        <img className="exitFee" src={exit} alt="exit" />
                        <p>Your last stake was: 24 days ago</p>
                        <h4>Your Fee now is: 0%</h4>  {/*  --> porcentaje q el usuario va recaudando */}
                    </div>
                </div>
            :

            null
        }

    </div>
  )
}

export default MyFee