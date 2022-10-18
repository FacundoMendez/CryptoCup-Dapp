import React from 'react'
import "./rowRoom.css"
import paisesPrueba from "../../../../config/paises2.json"
import imgToken from "../../../../nav_inventario/src/tokenNav.png"

const RowRoom = () => {
  return (
    <div className='rowRoom'>
        <div className="RoomId room_data">
            <p>#ID user</p>
        </div>

        <div className="MatchRoom ">
            <div className="team1_romFlag "> 
                <img src={paisesPrueba.Argentina.img} alt="flag1 room" />
            </div>
            <div className="result-team1">
                <p>0</p>
            </div>
            <div className="result_rom"> VS </div>
            <div className="result-team2">
                <p>0</p>
            </div>
            <div className="team2_romFlag ">
                <img src={paisesPrueba.Alemania.img} alt="flag1 room" />
            </div>
        </div>

        <div className="ownerRoom room_data">
            <div className="owner_room_flag"> 
                <img src={paisesPrueba.Argentina.img} alt="flag1 room" />
            </div>
        </div>

        <div className="amount_room room_data">
            <img src={imgToken} alt="token room" />
            <p>10</p>
        </div>

        <button className='challenge room_data'>
            CHALLENGE
        </button>
    </div>
  )
}

export default RowRoom