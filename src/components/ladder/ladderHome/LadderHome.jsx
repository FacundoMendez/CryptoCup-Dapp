import React, { Suspense , useContext, useState, useEffect} from 'react'
import Spinner from '../../config/spinner/Spinner'
import ContextConnected from '../../config/context/ConnectedContext'
import { NavLink } from 'react-router-dom'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./ladderHome.css"
import '@splidejs/splide/css/sea-green';
import basicImg from "./src/basic.jpg"
import boostImg from "./src/boost.jpg"
import challengeImg from "./src/challenge.jpg"
import cryptoBallImg from "./src/cryptoBall.jpeg"
import candado from "../../config/src/candado.png"
import PopupError from '../../config/popupsErrors/PopupError';
import ladderHomeEffect from './ladderHomeEffect';

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
    type: "loop",
    fixedHeight:true,
    preloadPages:4,
    resetProgress:true,
    autoplay : true,
    rewind: true,
    fixedHeight:true,
    omitEnd:true,
    padding:"0rem",
    gap: "2.5em",
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
          <Suspense fallback={<Spinner/>}>
            <div className="container_LaddersHome">
                <div className="slider_cards">
                    <Splide aria-label="ladders" options={ options } >
                    
                        <Suspense fallback={<Spinner/>}>
                            <SplideSlide className='box_splide '>
                                {Connected.userLogginActive ? 
                                  <Suspense fallback={<Spinner/>}>
                                    <NavLink to="/basicLadder">
                                        <img  src={basicImg} alt="Basic ladder Slider "/>
                                    </NavLink>
                                  </Suspense>
                                  :
                                    <Suspense fallback={<Spinner/>}>
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img  src={basicImg} alt="Basic ladder Slider " />
                                      </div>
                                    </Suspense>
                                }
                            </SplideSlide>
                        </Suspense>

                        <Suspense fallback={<Spinner/>}>
                            <SplideSlide className='box_splide'>
                                  {Connected.userLogginActive ? 
                                   <Suspense fallback={<Spinner/>}>
                                      <NavLink to="/boostLadder">
                                        
                                          <img src={boostImg} alt="Boost ladder Slider "/>
                                      </NavLink>
                                    </Suspense> 
                                    :
                                    <Suspense fallback={<Spinner/>}>
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img src={boostImg} alt="Boost ladder Slider " />
                                      </div>
                                    </Suspense>
                                  }
                            </SplideSlide>
                        </Suspense>
                        
                        <Suspense fallback={<Spinner/>}>
                            <SplideSlide className='box_splide'>
                                  {Connected.userLogginActive ? 
                                    <Suspense fallback={<Spinner/>}>
                                      <NavLink to="/challengeLadder">
                                          <img src={challengeImg} alt="Challenge ladder Slider " />
                                      </NavLink>
                                    </Suspense>
                                    :
                                    <Suspense fallback={<Spinner/>}>
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img src={challengeImg} alt="Challenge ladder Slider " />
                                      </div>
                                    </Suspense>
                                  }
                            </SplideSlide>
                        </Suspense>

                        <Suspense fallback={<Spinner/>}>
                            <SplideSlide className='box_splide'>
                                  {Connected.userLogginActive ? 
                                    <Suspense fallback={<Spinner/>}>
                                      <NavLink to="/cryptoBall">
                                          <img src={cryptoBallImg} alt="Crypto Ball ladder Slider " />
                                      </NavLink>
                                    </Suspense>
                                    :
                                    <Suspense fallback={<Spinner/>}>
                                      <div onClick={() => setConnectedPopup(true) }>
                                        <img src={cryptoBallImg} alt="Crypto Ball ladder Slider " />
                                      </div>
                                    </Suspense>
                                  }
                            </SplideSlide>
                        </Suspense>

                    </Splide>
                </div>
            </div>
        </Suspense>

    </>
    
  )
}

export default LadderHome