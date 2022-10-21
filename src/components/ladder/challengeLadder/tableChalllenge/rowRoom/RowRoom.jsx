import React, {useState} from 'react'
import "./rowRoom.css"
import paisesPrueba from "../../../../config/paises2.json"
import imgToken from "../../../../nav_inventario/src/tokenNav.png"
import { NavLink } from 'react-router-dom'

const RowRoom = ({roomOcupada, setRoomOcupada , id , flagTeam1 , flagTeam2 , tokens}) => {

    console.log(id)

  return (
    <div className='rowRoom'>
        <div className="RoomId room_data">
            <p>#ID user</p>
        </div>

        <div className="MatchRoom ">
            <div className="team1_romFlag "> 
                <img src={paisesPrueba.Argentina.img} alt="flag1 room" />
            </div>
            <div className="result_rom"> VS </div>
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
            <p>0</p>
        </div>

        {roomOcupada ? 
            <button className='challenge room_data' style={{background: "gray" , cursor:"auto"}}>
                full room
            </button>
        :
            <button className='challenge room_data'>
                <NavLink to={`/challengeLadder/${id}`} >
                    <p>CHALLENGE</p>
                </NavLink>
            </button>
        }

      
    </div>
  )
}

export default RowRoom