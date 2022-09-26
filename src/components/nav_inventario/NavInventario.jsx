import React, {useContext} from 'react'
import "./navInventario.css"
import arrow from "./src/arrow.png"
import ContextConnected from '../config/context/ConnectedContext'

const NavInventario = () => {

  
  const Connected = useContext(ContextConnected)

  return (
    <>
    { Connected.userLogginActive ?    

      <div className="nav_inventario">
        <div className="nav_Toggle_inventario" aria-label="Abrir menú">
            <img src={arrow} alt="arrow" />
        </div>
      </div>
      :
      null
    }
    </>

  )
}

export default NavInventario