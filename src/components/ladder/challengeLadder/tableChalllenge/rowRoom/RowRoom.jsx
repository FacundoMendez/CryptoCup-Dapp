import React, {useState} from 'react'
import "./rowRoom.css"
import paisesJson from "../../../../config/paises2.json"
import imgToken from "../../../../nav_inventario/src/tokenNav.png"
import { NavLink } from 'react-router-dom'

const RowRoom = ({ id , ownerUsername ,flagTeam1 , flagTeam2 ,ownerSelect , tokens }) => {


  return (
    <div className='rowRoom'>
        <div className="RoomId room_data">
            <p>{ownerUsername}'s Room</p>
        </div>

        <div className="MatchRoom ">
            <div className="team1_romFlag "> 
                <img src={paisesJson[flagTeam1].img} alt="team1 room" />
            </div>
            <div className="result_rom"> VS </div>
            <div className="team2_romFlag ">
                <img src={paisesJson[flagTeam2].img} alt="flag2 room" />
            </div>
        </div>

        <div className="ownerRoom room_data">
            <div className="owner_room_flag"> 
                <img src={paisesJson[ownerSelect].img} alt="flag1 room" />
            </div>
        </div>

        <div className="amount_room room_data">
            <img src={imgToken} alt="token room" />
            <p>{tokens}</p>
        </div>


            <NavLink to={`/challengeLadder/${id}`} >
                <button className='challenge room_data'>
                        <p>CHALLENGE</p>
                </button>
            </NavLink>


      
    </div>
  )
}

export default RowRoom