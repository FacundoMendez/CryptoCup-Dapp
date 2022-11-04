import React, {useState , useEffect, Suspense} from 'react'
import "./navStaking.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Spinner from '../../config/spinner/Spinner'
import navLadderActive from '../../ladder/componentsLadders/navLadder/navLadderActive'


const NavStaking = ({ladder, setMyStake, setStake , setUnstake }) => {

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
        const toggle_link = document.querySelector(".toggle_link_staking")
        const box_links_movile = document.querySelector(".box_links_movile_staking")
        const link_nav = document.querySelectorAll(".link_nav_staking")
        
        toggle_link.addEventListener("click" , function(){
            box_links_movile.classList.toggle("box_links_movile_active_staking")
        })
    
        for( let element of link_nav ){
    
            element.addEventListener("click" , function(){
                box_links_movile.classList.toggle("box_links_movile_active_staking")
            })
        }
    },[])

    return (
        <Suspense fallback={<Spinner/>}>
            <div className="nav_staking">
                <h2>{ladder}</h2>
                <div className="links_staking">
                    <ul>
                        <li className='link_nav_staking' style={{color : colorP}}  onClick={() => {
                                colorPred()
                                setStake(true) 
                                setMyStake(false)
                                setUnstake(false)  
                            } }>
                            STAKE
                        </li>
                        <li className='link_nav_staking'  style={{color : colorM}}  onClick={() => {
                                ColorMyRecord()
                                setUnstake(true)
                                setMyStake(false) 
                                setStake(false) 
                            }}>
                            UNSTAKE
                        </li>
                        <li className='link_nav_staking'  style={{color : colorR}}  onClick={() =>  {
                                colorRank()
                                setStake(false)
                                setUnstake(false) 
                                setMyStake(true) 
                            }}>
                            MY STAKING
                        </li>
                    </ul>
                </div>
                <div className="container_links_movile_staking">
                    <button className="toggle_link_staking" aria-label="Abrir menú">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
    
                    <div className="box_links_movile_staking">
                        <div className="links_movile_staking">
                            <ul>
                                <li className='link_nav_staking'   style={{color : colorP}}  onClick={() => {
                                       setStake(true) 
                                       setMyStake(false)
                                       setUnstake(false)   
                                        colorPred()
                                    } }> 
                                    STAKE
                                </li>
                                <li className='link_nav_staking'  style={{color : colorM}}  onClick={() => {
                                        setUnstake(true)
                                        setMyStake(false) 
                                        setStake(false) 
                                        ColorMyRecord()
                                    } }>
                                    UNSTAKE
                                </li>
                                <li className='link_nav_staking'  style={{color : colorR}}  onClick={() =>  {
                                        setStake(false)
                                        setUnstake(false) 
                                        setMyStake(true) 
                                        colorRank()
                                    }}>
                                    MY STAKE
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
      )
    }
    
export default NavStaking