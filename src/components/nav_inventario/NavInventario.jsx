import React from 'react'
import "./navInventario.css"
import arrow from "./src/arrow.png"

const NavInventario = () => {
  return (
    <div className="nav_inventario">
        <div className="nav_Toggle_inventario" aria-label="Abrir menú">
            <img src={arrow} alt="arrow" />
        </div>
    </div>
  )
}

export default NavInventario