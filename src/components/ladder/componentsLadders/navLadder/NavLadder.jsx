import React, {useState , useEffect} from 'react'
import "./navLadder.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navLadderActive from './navLadderActive'

const NavLadder = ({ladder, setMyPrediction, setPredictions , setRanking }) => {

    const [colorP, setColorP] = useState("bebdff")
    const [colorM, setColorM] = useState("#white")
    const [colorR , setColorR] = useState("white")


    const colorPred = ( ) => {
        setColorM('white')
        setColorP('#bebdff')
        setColorR('white')
    }
    const colorMyPrediction= ( ) => {
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
    <div className="nav_basicLadder">
        <h2>{ladder}</h2>
        <div className="links_BasicLadder">
            <ul>
                <li className='link_nav' style={{color : colorP}}  onClick={() => {
                        setPredictions(true) 
                        setMyPrediction(false)
                        setRanking(false)    
                        colorPred()
                    } }>
                    Predictions
                </li>
                <li className='link_nav'  style={{color : colorM}}  onClick={() => {
                        setMyPrediction(true)
                        setPredictions(false) 
                        setRanking(false) 
                        colorMyPrediction()
                    }}>
                    My predictions 
                </li>
                <li className='link_nav'  style={{color : colorR}}  onClick={() =>  {
                        setMyPrediction(false)
                        setPredictions(false) 
                        setRanking(true) 
                        colorRank()
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
                            setPredictions(true) 
                            setMyPrediction(false)
                            setRanking(false)    
                            colorPred()
                            } }> 
                            Predictions
                        </li>
                        <li className='link_nav'  style={{color : colorM}}  onClick={() => {
                            setMyPrediction(true)
                            setPredictions(false) 
                            setRanking(false) 
                            colorMyPrediction()
                            } }>
                            My predictions
                        </li>
                        <li className='link_nav'  style={{color : colorR}}  onClick={() =>  {
                            setMyPrediction(false)
                            setPredictions(false) 
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
  )
}

export default NavLadder