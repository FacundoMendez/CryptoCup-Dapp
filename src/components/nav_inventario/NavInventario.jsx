import React, {useContext} from 'react'
import "./navInventario.css"
import arrow from "./src/arrow.png"
import ContextConnected from '../config/context/ConnectedContext'
import ticketBasic from "./src/ticketBasic.png"
import ticketBoost from "./src/ticketBoost.png"
import token from "./src/tokenNav.png"
import Claim from './claim/Claim'
import api from '../../api'

const NavInventario = () => {

  
  const Connected = useContext(ContextConnected)


  return (
    <>
    { Connected.userLogginActive ?    

      <div className="nav_inventario">
        <div className="nav_Toggle_inventario" aria-label="Abrir menú">
            <img src={arrow} alt="arrow" />
        </div>
        <div className="box_navHorizontal-contadores">

            <div className="tickets_navHorizontal-Basic">
                <img className='ticketNavBasic' src={ticketBasic} alt="Nav Tickets basc" />
                <div className="tickets_navHorizontal-Basic-cant">
                    <p>{Connected.basicTicketsInv.length}</p>
                </div>
            </div>
            
            <div className="tickets_navHorizontal-Boost">
                <img src={ticketBoost} alt="Nav Tickets" />
                <div className="tickets_navHorizontal-Boost-cant">
                <p>{Connected.boostTicketsInv.length}</p>
                </div>
            </div>

            <div className="token_navHorizontal">
                <img src={token} alt="Token Nav" />
                <div className="contadorToken_navHorizontal">
                    <p>{Connected.userData.inventory.tokenBalance}</p>
                </div>
            </div>
        </div>


        {/* <Claim/> */}

      </div>
      :
      null
    }
    </>

  )
}

export default NavInventario