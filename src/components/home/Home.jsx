import React,{useState, Suspense} from 'react'
import {NavLink} from "react-router-dom";
import SliderBanner from './slider/SliderBanner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import "./home.css"
import LiveMatchesHome from './liveMatchesHome/LiveMatchesHome';

const Home = () => {
  const [arrows , setArrows] = useState(1)



  return (
    <>
    <Suspense fallback={"loading"}>
      <div className="containerDapp">
        <LiveMatchesHome/>
        <SliderBanner/>
        
        <div className="containerDapp_title">
          <p>OUR LADDERS</p>
          <div className="arrowsHome">
            <div className="arrowLeft_home"><FontAwesomeIcon icon={faAngleLeft} onClick={() => setArrows(1)} /></div>
            <div className="arrowRight_home"><FontAwesomeIcon icon={faAngleRight} onClick={() => setArrows(2)}/></div>
          </div>
        </div>
    
          {arrows == 1 ? 
            <div className="containerDapp_cards">
              
              <NavLink to="/BasicLadder" >
                <div className="containerDapp_cards-basic   cardMain ">
                  <h2>Basic Ladder</h2>
                </div>
              </NavLink>

              <NavLink to="/BoostLadder" >
                <div className="containerDapp_cards-boost   cardMain">
                  <h2>Boost Ladder</h2>
                </div>
              </NavLink>

              <NavLink to="/FriendsLadder" >
                <div className="containerDapp_cards-friends cardMain ">
                  <h2>Friends Ladder</h2>
                </div>
              </NavLink> 
            </div>
          : 
          <div className="containerDapp_cards">
                
            <NavLink to="/Staking" >
              <div className="containerDapp_cards-staking   cardMain ">
                <h2>Staking</h2>
              </div>
            </NavLink>

            <NavLink to="/Marketplace" >
              <div className="containerDapp_cards-marketplace   cardMain">
                <h2>MarketPlace</h2>
              </div>
            </NavLink>

            <NavLink to="/MiniGames" >
              <div className="containerDapp_cards-miniGames cardMain ">
                <h2>Mini Games</h2>
              </div>
            </NavLink> 
          </div>
          }
      </div>
    </Suspense>
  </>
  )
}

export default Home