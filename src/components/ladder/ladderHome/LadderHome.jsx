import React, {useState, Suspense , useContext} from 'react'
import Spinner from '../../config/spinner/Spinner'
import ContextConnected from '../../config/context/ConnectedContext'
import { NavLink } from 'react-router-dom'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import "./ladderHome.css"
import '@splidejs/react-splide/css/sea-green';
import basicImg from "./src/basic.jpg"
import boostImg from "./src/boost.jpg"
import challengeImg from "./src/challenge.jpg"
import candado from "../../config/src/candado.png"

const LadderHome = () => {

    const Connected = useContext(ContextConnected)

  const options = {
    perPage: 3,
    perMove: 1,
    focus: "center",
    cover: true,
    type: "loop",
    fixedHeight:true,
    lazyLoad:true,
    omitEnd:true,
    autoplay : true,
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
        {
        Connected.userLogginActive ? 
            <Suspense fallback={<Spinner/>}>
            <div className="container_LaddersHome">
                <div className="slider_cards">
                    <Splide aria-label="ladders" options={ options } >
                    
                        <Suspense fallback={<Spinner/>}>
                            <SplideSlide className='box_splide '>
                                    <NavLink to="/basicLadder">
                                        <img  src={basicImg} alt="Basic ladder Slider "/>
                                    </NavLink>
                            </SplideSlide>
                        </Suspense>

                        <Suspense fallback={<Spinner/>}>
                            <SplideSlide className='box_splide'>
                                    <NavLink to="/boostLadder">
                                        <img src={boostImg} alt="Boost ladder Slider "/>
                                    </NavLink>
                            </SplideSlide>
                        </Suspense>
                        
                        <Suspense fallback={<Spinner/>}>
                            <SplideSlide className='box_splide'>
                                    <NavLink to="/challengeLadder">
                                        <img src={challengeImg} alt="Challenge ladder Slider "/>
                                       {/*  <img className='candadoLadders' src={candado} alt="" /> */}
                                    </NavLink>
                            </SplideSlide>
                        </Suspense>

                    </Splide>
                </div>
            </div>
        </Suspense>
    : 
     window.location.href = "/"
    }

    </>
    
  )
}

export default LadderHome