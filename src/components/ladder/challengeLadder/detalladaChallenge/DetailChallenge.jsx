import React , {Suspense , useContext, useState} from 'react'
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

return (

    <>
    {
      Connected.userLogginActive ? 
        
    <Suspense fallback={<Spinner/>}>
    
        <div className="detailChallenge">
            <div className="nav_detail">
                <h2>ID ROOM :  #{roomId} </h2>

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

                    <div className="nav_match_challenge">
                        <div className="team1_nav_challenge">
                            <img src={paises.bayern.img} alt="flag team 1" />
                        </div>

                        <div className="box_results_match_challenge">
                            <div className="team1_nav_result_challenge">0</div>
                            <p className='vs'>VS</p>
                            <div className="team2_nav_result_challenge">0</div>
                        </div>

                        <div className="team2_nav_challenge">
                            <img src={paises.roma.img} alt="flag team 2" />
                        </div>
                    </div>

                    <TimerChallengeInit/>
                </div>
                


                <div className="box_user_detail_challenge">
                    <div className="owner_select">
                        <h2>{Connected.userData.username} Selection</h2>
                        <div className="flaw_owner_select">    
                            <img src={paises.roma.img}alt="flag team 1" />
                        </div>

                        <img className='siluetaUser' src={silueta} alt="silueta" />
                        
                    </div>



                    <div className="vs_detail">
                        <div className="container_tokens_detail">
                            <div className="tokens_challenge_detail">
                                <div className="box_tokens_detail">
                                    <img src={tokenImg} alt="token img" />
                                    <p>100</p> 
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="guest_select">
                        <h2>My Selection</h2>
                        <div className="flaw_guest_select" onClick={() => setSelectOption(true)}>
                            {/* <img src="" alt="" /> */}
                        </div>
                        <img className='siluetaUser2' src={silueta2} alt="silueta" />
                    </div>
                </div>

 
                <button className='button_challengeRoom_acept'>
                   <p>Accept Challenge</p>
                </button>

                <img className='campo' src={campo} alt="campo" />

                {selectOption ? 

                    <div className="container_select_option" >
                        <div className="box_options_user">
                            <div className="exit_option_user" onClick={() => setSelectOption(false) }> 
                                x
                            </div>
                        </div>
                    </div>

                    :
                    null
                }


            </div>




        </div>
    </Suspense>
        : 
        window.location.href = "/"
      }
    </>
  )
}

export default DetailChallenge