import React, {useState , useEffect, Suspense} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../../config/spinner/Spinner'
import navLadderActive from '../../componentsLadders/navLadder/navLadderActive'
import "./navChallenge.css"
import busquedaImg from "../../../config/src/busqueda.png"
import navChallengeFuncional from './navChallengeFuncional'
import paisesJson from "../../../config/paises2.json"
import tokenImg from "../../../nav_inventario/src/tokenNav.png"

const NavChallenge = ({ladder ,setHistory,setPublicRooms ,setMyRooms }) => {

    const [colorP, setColorP] = useState("#bebdff")
    const [colorM, setColorM] = useState("white")
    const [colorR , setColorR] = useState("white")


    const colorPred = ( ) => {
        setColorM('white')
        setColorP('#bebdff')
        setColorR('white')
    }
    const ColorMyRecord= ( ) => {
        setColorM('#bebdff')
        setColorP('white')
        setColorR('white')
    }
    const colorRank = ( ) => {
        setColorM('white')
        setColorP('white')
        setColorR('#bebdff')
    }

    useEffect(() => {
        colorPred()
        navChallengeFuncional()
    },[])

    
  return (
    <Suspense fallback={<Spinner/>}>
        <div className="container_navChallenge">
            <div className="nav_challengeRoom">
                <h2>{ladder}</h2>
                <div className="links_challengeRoom">
                    <ul>
                        <li className='link_nav_challengeRoom' style={{color : colorP}}  onClick={() => {
                                colorPred()
                                setPublicRooms(true) 
                                setMyRooms(false)
                                setHistory(false)  
                            } }>
                            Public Rooms
                        </li>
                        <li className='link_nav_challengeRoom'  style={{color : colorM}}  onClick={() => {
                                ColorMyRecord()
                                setMyRooms(true)
                                setPublicRooms(false) 
                                setHistory(false) 
                            }}>
                            My Rooms
                        </li>
                        <li className='link_nav_challengeRoom'  style={{color : colorR}}  onClick={() =>  {
                                colorRank()
                                setMyRooms(false)
                                setPublicRooms(false) 
                                setHistory(true) 
                            }}>
                            History
                        </li>
                    </ul>
                </div>
                <div className="container_links_movile_challengeRoom">
                    <button className="toggle_link_challengeRoom" aria-label="Abrir menú">
                        <FontAwesomeIcon icon={faBars} />
                    </button>

                    <div className="box_links_movile_challengeRoom">
                        <div className="links_movile_challengeRoom">
                            <ul>
                                <li className='link_nav_challengeRoom'   style={{color : colorP}}  onClick={() => {
                                    setMyRooms(true) 
                                    setPublicRooms(false)
                                    setHistory(false)    
                                    colorPred()
                                    } }> 
                                    Public Rooms
                                </li>
                                <li className='link_nav_challengeRoom'  style={{color : colorM}}  onClick={() => {
                                    setMyRooms(true)
                                    setPublicRooms(false) 
                                    setHistory(false) 
                                    ColorMyRecord()
                                    } }>
                                    My Rooms
                                </li>
                                <li className='link_nav_challengeRoom'  style={{color : colorR}}  onClick={() =>  {
                                    setMyRooms(false)
                                    setPublicRooms(false) 
                                    setHistory(true) 
                                    colorRank()
                                    }}>
                                    History
                                </li>
                            </ul>
                        </div>
                
                    </div>
                </div>
             
            </div>
            <div className="box_create_sala">
                <div className="containerFilter_match">
                    <img className='busqueda_match' src={busquedaImg} alt="busqueda icono" />
                    <p>Find Match</p>

                    <div className="box_filter_match">
                        <div className="box_id_match_challenge">
                            <div className="id_match">
                                <p>#</p>
                            </div>
                            <div className="box_input_nav">
                                <input type="number" placeholder='ID ROOM'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container_createRoom">
                    <p>Create Room</p>

                    <div className="box_create_room_challenge">


                                        {/* select match */}


                        <div className="filterPartidos filter_match_challenge"> 
                            Select a match
                            <div className="triangleFilter triangleFilter1"></div>
                        </div>
                        <div className="box_elegir_partido_challenge">
                            <form className='formPartidos_challenge' action="POST" >

                                {/* mapear esto para cada partido disponible */}
                                <p>
                                    <input type="checkbox" id="match_create_room" required />  {/* pasarle un id a cada partido */}
                                    <label className='lab_challenge' htmlFor="match_create_room"> {/* htmlFor -> ponerle el mismo id de arriba */}
                                        {paisesJson.argentina.name} &nbsp; vs &nbsp; {paisesJson.brazil.name}
                                    </label>
                                </p>
                           
                            </form>
                        </div>


                                        {/* select equipo */}


                        <div className="filterPartidos filter_Select_challenge"> 
                            Select a Team
                            <div className="triangleFilter triangleFilter1"></div>
                        </div>
                        <div className="box_elegir_partido_challenge">
                            <form className='formPartidos_challenge' action="POST" >

                                {/* mapear esto para cada partido disponible */}
                                <p>
                                    <input type="checkbox" id="match_create_room" required />  {/* pasarle un id a cada partido */}
                                    <label className='lab_challenge' htmlFor="match_create_room"> {/* htmlFor -> ponerle el mismo id de arriba */}
                                        {paisesJson.argentina.name} &nbsp; vs &nbsp; {paisesJson.brazil.name}
                                    </label>
                                </p>
                           
                            </form>
                        </div>



                                     {/* select cant tokens */}


                        <div className="box_toknes_match_challenge">
                            <div className="tokens_match">
                                <img src={tokenImg} alt="token" />
                            </div>
                            <div className="box_input_nav_tokens">
                                <input type="number" placeholder='Tokens' min={10} required/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

          
        </div>
    </Suspense>
  )
}

export default NavChallenge