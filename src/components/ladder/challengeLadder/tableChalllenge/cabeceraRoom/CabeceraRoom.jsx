import React from 'react'
import "./cabeceraRoom.css"

const CabeceraRoom = () => {
  return (
    <div className='navCabecera_room'>
        <h4 className='cab_row roomM'>Room</h4>
        <h4 className='cab_row match_room'>Match</h4>
        <h4 className='cab_row owner'>Owner Selection</h4>
        <h4 className='cab_row amount-rom'>Amount</h4>
        <h4 className='cab_row vacio'></h4>
    </div>
  )
}

export default CabeceraRoom