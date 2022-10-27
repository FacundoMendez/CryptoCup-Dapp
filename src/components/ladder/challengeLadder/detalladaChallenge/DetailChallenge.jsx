import React , {Suspense , useContext, useState , useEffect} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import Spinner from '../../../config/spinner/Spinner'
import "./detailChallenge.css"
import api from '../../../../api'
import ContextConnected from '../../../config/context/ConnectedContext'
import tokenImg from "../../../nav_inventario/src/tokenNav.png"
import silueta from "../../../config/src/user.png"
import silueta2 from "../../../config/src/user2.png"
import paises from "../../../config/paises2.json"
import arrow from "../../../config/src/arrow.png"
import TimerChallengeInit from './timerChallengeInit/TimerChallengeInit'
import campo from "./campo2.jpg"



const DetailChallenge = () => {
    let {roomId} = useParams()   /* de aca se obtiene el id de la room  */

    const Connected = useContext(ContextConnected)

    const [selectOption , setSelectOption] = useState(false)
    const [roomDetails , setRoomDetails] =useState([])
    const [opponentSelection , setOpponentSelection] = useState()

    useEffect(() => {
        getRoomDetails()
       },[]);

    const getRoomDetails = async () => {
        console.log("ola");
        const room = await api.get(`/challenge/getRoom/${roomId}`)
        console.log(room.data);
        setRoomDetails(room.data); 
       /*  setMatchDetails(room.data[0].relatedMatch) */
    }
    
    function getOpponentOptions () {
        const ownerSelection = roomDetails[0].ownerSelection
            //Si el owner eligió empate
        if (roomDetails[0].relatedMatch[0].team1 != ownerSelection && roomDetails[0].relatedMatch[0].team2 != ownerSelection) {
            return <div className='options'>
                        <label className='label_match_challenge'>
                            <input type="radio" name="radio" value="match_create_room"  />
                            <span>{paises[roomDetails[0].relatedMatch[0].team1].name}</span>
                        </label>
                        <label className='label_match_challenge'>
                            <input type="radio" name="radio" value="match_create_room"  />
                            <span>{paises[roomDetails[0].relatedMatch[0].team2].name}</span>
                        </label>
                    </div>
        } 
            //Si el owner eligió team 2
        else if (roomDetails[0].relatedMatch[0].team1 != ownerSelection && ownerSelection != "tie") {
            return <div className='options'>
                         <label className='label_match_challenge'>
                            <input type="radio" name="radio" value="match_create_room"  />
                            <span>{paises[roomDetails[0].relatedMatch[0].team1].name}</span>
                        </label>
                        <label className='label_match_challenge'>
                            <input type="radio" name="radio" value="match_create_room"  />
                            <span>Tie</span>
                        </label>
                    </div>
        }
            //Si el owner eligió team 1
         else if (roomDetails[0].relatedMatch[0].team2 != ownerSelection && ownerSelection != "tie") {
            return <div className='options'>
                        <label className='label_match_challenge'>
                            <input type="radio" name="radio" value="match_create_room" onClick={setOpponentOption(roomDetails[0].relatedMatch[0].team2)} />
                            <span>{paises[roomDetails[0].relatedMatch[0].team2].name}</span>
                        </label>
                        <label className='label_match_challenge'>
                            <input type="radio" name="radio" value="match_create_room"  />
                            <span>Tie</span>
                        </label>
                    </div>
        }
    }

    function setOpponentOption (option) {
        setSelectOption(false) 
        setOpponentSelection(option)
    }


    
return (

    <>
    {/* {
      Connected.userLogginActive ?  */}
        
    <Suspense fallback={<Spinner/>}>
    {
        roomDetails[0] ? /* verifica que no sea undefined sino tiraba error no se xq */


        <div className="detailChallenge">
            <div className="nav_detail">
                <h2>ID ROOM :  #{roomDetails[0].ownerUsername} </h2>

                <div className="box_arrow_detail_nav">
                    <NavLink to="/challengeLadder_nav"> 
                        <img src={arrow} alt="arrow" />
                    </NavLink>
                </div>

            </div>
            

            <div className="container_box_table_detail">

                <div className="container_nav_challenge">

                    <div className="box_arrow_detail">
                        <NavLink to="/challengeLadder"> 
                            <img src={arrow} alt="arrow" />
                        </NavLink>
                    </div>

           
                     <div  className="nav_match_challenge">
                        <div className="team1_nav_challenge">
                            <img src={paises[roomDetails[0].relatedMatch[0].team1].img} alt="flag team 1" />
                        </div>
            
                        <div className="box_results_match_challenge">
            
                            <p className='vs'>VS</p>
                        </div>
            
                        <div className="team2_nav_challenge">
                            <img src={paises[roomDetails[0].relatedMatch[0].team2].img} alt="flag team 2" />
                        </div>    
                    </div>    
                 
                     

                    <TimerChallengeInit/>
                </div>
                

 
                <div className="box_user_detail_challenge">
                    <div className="owner_select">
                        <h2>{roomDetails[0].ownerUsername} Selection</h2> 
                        <div className="flaw_owner_select">    
                            <img src={paises[roomDetails[0].ownerSelection].img}alt="flag team 1" />
                        </div>
    
                        <img className='siluetaUser' src={silueta} alt="silueta" />
                        
                    </div>



                    <div className="vs_detail">
                        <div className="container_tokens_detail">
                            <div className="tokens_challenge_detail">
                                <div className="box_tokens_detail">
                                    <img src={tokenImg} alt="token img" />
                                    <p>{roomDetails[0].tokensRoom}</p> 
                                </div>
                            </div>
                        </div>
                    </div>


                    {
                        roomDetails[0].opponentUsername ?

                            <div className="guest_select">
                                <h2>{roomDetails[0].opponentUsername} Selection</h2>
                                <div className="flaw_guest_select" onClick={() => setSelectOption(true)}>
                                    <img src={paises[roomDetails[0].opponentSelection].img} alt="" /> 
                                </div>
                                <img className='siluetaUser2' src={silueta2} alt="silueta" />
                            </div> 
                            
                        :

                            <div className="guest_select">
                                <h2>{roomDetails[0].opponentUsername} Select</h2>
                                <div className="flaw_guest_select" onClick={() => setSelectOption(true)}>
                                    {
                                        opponentSelection ?

                                            <img src={paises[opponentSelection].img} alt="my selection flag" />  
                                            :
                                            null
                                    }
                                    
                                </div>
                                <img className='siluetaUser2' src={silueta2} alt="silueta" />
                            </div>
                    }
                    
                </div> 

 
                <button className='button_challengeRoom_acept'>
                   <p>Join Challenge</p>
                </button>

                <img className='campo' src={campo} alt="campo" />

                {selectOption ? 

                    <div className="container_select_option" >
                        <div className="box_options_user">
                            <div className="exit_option_user" onClick={() => setSelectOption(false) }> 
                                x
                            </div>
                            
                                {
                                    getOpponentOptions()
                                }
                    
                        </div>
                    </div>

                    :
                    null
                }


            </div>




        </div>
        :
        null
    }
    </Suspense>
       {/*  : 
        window.location.href = "/"
      } */}
    </>
  )
}

export default DetailChallenge