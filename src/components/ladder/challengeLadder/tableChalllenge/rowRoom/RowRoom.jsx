import React, {useState , useContext , Suspense} from 'react'
import "./rowRoom.css"
import paisesJson from "../../../../config/paises2.json"
import imgToken from "../../../../nav_inventario/src/tokenNav.png"
import { NavLink } from 'react-router-dom'
import ContextConnected from '../../../../config/context/ConnectedContext'
import Spinner from '../../../../config/spinner/Spinner'


const RowRoom = ({ id , status ,ownerUsername ,ownerAddress , opponentAddress,flagTeam1 , flagTeam2 ,ownerSelect , tokens }) => {


    const Connected = useContext(ContextConnected)



    const renderButton = () => {
              //Si el oponente u owner es el usuario conectado muestra view
        if ( opponentAddress===Connected.account[0] || ownerAddress===Connected.account[0]) {
            return  <NavLink to={`/challengeLadder/${id}`} >
                        <button className='room_data room_myRoom'>
                            <p>VIEW</p>
                        </button>
                    </NavLink>
        } 
        else if ( status==="open" ) {
            return  <NavLink to={`/challengeLadder/${id}`} >
                        <button className='challenge room_data'>
                                <p>CHALLENGE</p>
                        </button>
                    </NavLink>
        } 
        else if (status==="close") {
            return   <button className='room_data room_full'>
                        <p>FULL</p>
                    </button>
        } 
      
    }



  return (
    <Suspense fallback={Spinner}>
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

            {
                renderButton()
            
            }
       
        </div>
    </Suspense>
  )
}

export default RowRoom