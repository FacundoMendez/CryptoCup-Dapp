import React, {useState , useEffect, Suspense} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../../config/spinner/Spinner'
import navLadderActive from '../../componentsLadders/navLadder/navLadderActive'
import "./navChallenge.css"


const NavChallenge = ({ladder ,setHistory,setPublicRooms ,setMyRooms  }) => {

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
    },[])

  return (
    <Suspense fallback={<Spinner/>}>
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
    </Suspense>
  )
}

export default NavChallenge