import React, {useState , useEffect, Suspense} from 'react'
import "./navLadder.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLadderActive from './navLadderActive'
import Spinner from '../../../config/spinner/Spinner'

const NavLadder = ({ladder, setMyRecord, setMatches , setRanking }) => {

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
        navLadderActive()
    },[])

  return (
    <Suspense fallback={<Spinner/>}>
        <div className="nav_basicLadder">
            <h2>{ladder}</h2>
            <div className="links_BasicLadder">
                <ul>
                    <li className='link_nav' style={{color : colorP}}  onClick={() => {
                            colorPred()
                            setMatches(true) 
                            setMyRecord(false)
                            setRanking(false)  
                        } }>
                        Matches
                    </li>
                    <li className='link_nav'  style={{color : colorM}}  onClick={() => {
                            ColorMyRecord()
                            setMyRecord(true)
                            setMatches(false) 
                            setRanking(false) 
                        }}>
                        My Record
                    </li>
                    <li className='link_nav'  style={{color : colorR}}  onClick={() =>  {
                            colorRank()
                            setMyRecord(false)
                            setMatches(false) 
                            setRanking(true) 
                        }}>
                        Ranking
                    </li>
                </ul>
            </div>
            <div className="container_links_movile">
                <button className="toggle_link" aria-label="Abrir menú">
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="box_links_movile">
                    <div className="links_movile">
                        <ul>
                            <li className='link_nav'   style={{color : colorP}}  onClick={() => {
                                setMatches(true) 
                                setMyRecord(false)
                                setRanking(false)    
                                colorPred()
                                } }> 
                                Matches
                            </li>
                            <li className='link_nav'  style={{color : colorM}}  onClick={() => {
                                setMyRecord(true)
                                setMatches(false) 
                                setRanking(false) 
                                ColorMyRecord()
                                } }>
                                My Record
                            </li>
                            <li className='link_nav'  style={{color : colorR}}  onClick={() =>  {
                                setMyRecord(false)
                                setMatches(false) 
                                setRanking(true) 
                                colorRank()
                                }}>
                                Ranking
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </Suspense>
  )
}

export default NavLadder