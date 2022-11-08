import React, { Suspense , useContext, useState, useEffect} from 'react'
import Spinner from '../../config/spinner/Spinner'
import ContextConnected from '../../config/context/ConnectedContext'
import { NavLink } from 'react-router-dom'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./ladderHome.css"
import '@splidejs/splide/css/sea-green';

import basicImg from "./src/basic.jpg"
import boostImg from "./src/boostCandado.jpg"
import challengeImg from "./src/challengeCandado.jpg"

import airdropImg from "./src/airdrop.jpg"
import cryptoBallImg from "./src/ballCandado.jpg"


import PopupError from '../../config/popupsErrors/PopupError';
import ladderHomeEffect from './ladderHomeEffect';
import Preload from "../../config/preload/Preload"

const LadderHome = () => {


  const [connectedPopup , setConnectedPopup] = useState()
  useEffect(() => {

    ladderHomeEffect()

    if(connectedPopup === true){
      setTimeout(() => {
        setConnectedPopup(false)
      }, 6000);
    }

  },[connectedPopup])



  const Connected = useContext(ContextConnected)

  const options = {
    perPage: 3,
    perMove: 1,
    cover: true,
/*     type: "loop", */
    fixedHeight:true,
    preloadPages:4,
    resetProgress:true,
    autoplay : true,
    rewind: true,
    fixedHeight:true,
    omitEnd:true,
    padding:"0rem",
    gap: "2.5em",
    speed: 1500,
    breakpoints: {
      1170: {
        perPage: 3,
      },

      870: {
        perPage: 2,
        focus: 1,
      },
      670: {
        perPage: 1,
        focus: 1,
      }
    }
}


  return (
    <>
    
    {connectedPopup ? <PopupError connectedPopup={connectedPopup}  /> : null }
            <div className="container_LaddersHome">
                <Preload />
                <div className="slider_cards">
                    <Splide aria-label="ladders" options={ options } >
                                          
                          <SplideSlide className='box_splide airdrop '>
                                {Connected.userLogginActive ? 
                                    <NavLink to="/basicLadder">
                                        <img  src={basicImg} alt="Basic Slider "/>
                                    </NavLink>
                                  :
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img  src={basicImg} alt="Basic Slider" />
                                      </div>
                                }
                            </SplideSlide>
                    


                            <SplideSlide className='box_splide'>
                                  {Connected.userLogginActive ? 
                                    /*   <NavLink to="/boostLadder"> */
                                          <img src={boostImg} alt="Boost ladder Slider "/>
                                 /*      </NavLink> */
                                    :
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img src={boostImg} alt="Boost ladder Slider " />
                                      </div>
                                  }
                            </SplideSlide>
                        
                            <SplideSlide className='box_splide'>
                                  {Connected.userLogginActive ? 
                                      /* <NavLink to="/challengeLadder">   */
                                          <img src={challengeImg} alt="Challenge ladder Slider " />
                                      /* </NavLink>    */
                                
                                    :
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img src={challengeImg} alt="Challenge ladder Slider " />
                                      </div>
                                  }
                            </SplideSlide>

                            <SplideSlide className='box_splide'>
                                  {Connected.userLogginActive ? 
                                     /*  <NavLink to="/cryptoBall"> */
                                          <img src={cryptoBallImg} alt="Crypto Ball ladder Slider " />
                                      /* </NavLink> */
                                    :
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img src={cryptoBallImg} alt="Crypto Ball ladder Slider " />
                                      </div>
                                  }
                            </SplideSlide>

                    </Splide>
                </div>
            </div>
    </>
    
  )
}

export default LadderHome