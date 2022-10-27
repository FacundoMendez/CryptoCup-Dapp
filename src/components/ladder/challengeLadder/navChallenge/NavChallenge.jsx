import React, {useState , useEffect, Suspense , useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../../config/spinner/Spinner'
import navLadderActive from '../../componentsLadders/navLadder/navLadderActive'
import "./navChallenge.css"
import busquedaImg from "../../../config/src/busqueda.png"
import navChallengeFuncional from './navChallengeFuncional'
import paisesJson from "../../../config/paises2.json"
import tokenImg from "../../../nav_inventario/src/tokenNav.png"
import createRoomFunctional from './createRoomFunctional'
import api from '../../../../api'
import ContextConnected from '../../../config/context/ConnectedContext'
import PopupChallenge from '../../../config/popupsChallenge/PopupChallenge'

const NavChallenge = ({ladder ,setHistory,setPublicRooms ,setMyRooms }) => {

    const [colorP, setColorP] = useState("#bebdff")
    const [colorM, setColorM] = useState("white")
    const [colorR , setColorR] = useState("white")
    const [comingMatches , setComingMatches] = useState([])  // partidos disponibles p crear room

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
        getComingMatches()
        navChallengeFuncional()
        createRoomFunctional()

    },[])

    const Connected = useContext(ContextConnected)
    const [selectMatch , setSelectMatch] = useState(false)
    const [selectTeam , setSelectTeam] = useState(false)
    const [amountTokens , setAmountTokens] = useState(false)


    const [salaCreada , setSalaCreada] = useState()
    const [salaNoCreada , setSalaNoCreada] = useState()
    const [tokensBalanceUser , setTokensBalanceUser] = useState()
    

    //Trae partidos disponibles p crear
    const getComingMatches = async () => {
        let matches = await api.get('/matches/getComingMatches')
        setComingMatches(matches.data)
    }

    //setea el partido elegido
  /*  const setMatchForRoom = async (item) => {
        setSelectMatch(item)
    }  */

    const amountTokenss= e => {

        if(e.target.value >= 10){
            setAmountTokens(e.target.value)
            console.log(amountTokens)
        }


        if(e.target.value.length > 6){
            e.target.value = e.target.value.slice(0,6);
        }



    }

    const createRoom = async () => {
        try {
            if ( selectMatch && selectTeam && amountTokens) {
                const roomCreated = await api.post('/challenge/createRoom' , {
                    ownerAddress: Connected.account[0] ,
                    address : Connected.account[0] ,
                    signature : Connected.signature,
                    tokensRoom : amountTokens ,
                    matchId : selectMatch._id , 
                    ownerSelection : selectTeam
                })
                if (roomCreated.status==200) {
                    alert(roomCreated.data)
                } 
            }
        } catch (error) {
            alert(error.response.data)
        }

    }


  return (
    <>
    { salaCreada ? 
        <PopupChallenge 
            salaCreada={salaCreada} 
        /> 
    : 
    salaNoCreada ? 

        <PopupChallenge 
            salaNoCreada={salaNoCreada} 
        /> 
    :
    tokensBalanceUser ?
        <PopupChallenge 
            tokensBalanceUser={tokensBalanceUser} 
        /> 
    :
        null
        
    }

        
    <Suspense fallback={<Spinner/>}>
        <div className="container_navChallenge">
            <PopupChallenge/>
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
{/*                         <li className='link_nav_challengeRoom'  style={{color : colorM}}  onClick={() => {
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
                        </li> */}
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
{/*                                 <li className='link_nav_challengeRoom'  style={{color : colorM}}  onClick={() => {
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
                                </li> */}
                            </ul>
                        </div>
                
                    </div>
                </div>
             
            </div>
            <div className="box_create_sala">
                <div className="container_find_click"></div>
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

                <div className="container_room_click"></div>
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

                                {
                                    comingMatches.map( (item , index ) => {
                                        return <div key={index} className="containerRadio_check">

                                                    <label className='label_match_challenge'>
                                                        <input type="radio" name="radio" value="match_create_room"   onClick={() =>  setSelectMatch(item)}/>
                                                        <span className='span_select_part'>{paisesJson[item.team1].name} &nbsp; vs &nbsp; {paisesJson[item.team2].name}</span>
                                                    </label>
    
                                                </div>
                                    })
                                }
                           
                            </form>
                        </div>

                                        {/* select equipo */}


                        <div className="filterPartidos filter_Select_challenge"> 
                            Select a Team
                            <div className="triangleFilter triangleFilter1"></div>
                        </div>
                        <div className="box_elegir_team_challenge" >
                            {
                                selectMatch ? 
                                    <form className='formTeams_challenge' action="POST" >
                            
                                    <div className="containerRadio_check">

                                           <label className='label_match_challenge'>
                                                <input type="radio" name="radio" value="team1_select"  onClick={() => setSelectTeam(selectMatch.team1)} />
                                                <span className='span_select_part_2'>{paisesJson[selectMatch.team1].name}</span>
                                            </label>
                                            <label className='label_match_challenge'>
                                                <input type="radio" name="radio" value="tie_select"   onClick={() => setSelectTeam("tie")} />
                                                <span className='span_select_part_2'>TIE</span>
                                            </label>
                                            <label className='label_match_challenge'>
                                                <input type="radio" name="radio" value="team1_select"  onClick={() => setSelectTeam(selectMatch.team2)} />
                                                <span className='span_select_part_2'>{paisesJson[selectMatch.team2].name} </span>
                                            </label>
                                    </div>
                                </form> :
                                null
                            }
                            
                        </div>

                                     {/* select cant tokens */}

                        <div className="box_toknes_match_challenge">
                            <div className="tokens_match">
                                <img src={tokenImg} alt="token" />
                            </div>
                            <div className="box_input_nav_tokens">
                                <input className='input_token' type="number" placeholder='Tokens (Min - 10)' min={10} maxLength={6} required onChange={amountTokenss} />
                            </div>
                        </div>


            

                    <button className='button_createRoom activeButtonCreateRoom' onClick={createRoom} style={{background:"radial-gradient(circle, rgba(108, 50, 243, 0.30%, rgba(42, 26, 85, 0.685) 60%)"}}>
                        Create Room
                    </button>
    

                    </div>
                </div>
            </div>

          
        </div>
    </Suspense>
    </>
  )
}

export default NavChallenge