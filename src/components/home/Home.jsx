import React,{useState, Suspense, lazy} from 'react'
import {NavLink} from "react-router-dom";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import "./home.css"


const LiveMatchesHome = lazy(() => import ('./liveMatchesHome/LiveMatchesHome'))
const SliderBanner = lazy(() => import ('./slider/SliderBanner'))
const Spinner = lazy(() => import ('../config/spinner/Spinner'))


const Home = () => {

  const [arrows , setArrows] = useState(1)

  return (
    <>
    <Suspense fallback={<Spinner/>}>
      <div className="containerDapp">
        <div className="container_live_social">
          <LiveMatchesHome/>
          <div className="social_nav">
              <a href="https://twitter.com/CryptoCupQatar" target="_blank" rel="noopener noreferrer" aria-label='twitter red social'>
                <i className="twitterSocialFooter"> <FontAwesomeIcon icon={faTwitter}  />  </i>   
              </a>
              <a href="https://www.instagram.com/cryptocupqatar/" target="_blank" rel="noopener noreferrer" aria-label='instagram red social'>
                <i className="instagramSocialFooter"> <FontAwesomeIcon icon={faInstagram} /> </i>   
              </a>
              <a href="https://t.me/cryptocupqatar" target="_blank" rel="noopener noreferrer" aria-label='telegram red social'>
                <i className="telegramSocialFooter"> <FontAwesomeIcon icon={faTelegram} /> </i> 
              </a>
              <a href="https://discord.gg/ckFmn9xXhw" target="_blank" rel="noopener noreferrer" aria-label='discord red social'>
                <i className="discordSocialFooter"> <FontAwesomeIcon icon={faDiscord} /> </i>  
              </a>
          </div>
        </div>

        <SliderBanner/>

        
        <div className="containerDapp_title">
          <p>OUR LADDERS</p>
          <div className="arrowsHome">
            <div className="arrowLeft_home"><FontAwesomeIcon icon={faAngleLeft} onClick={() => setArrows(1)} /></div>
            <div className="arrowRight_home"><FontAwesomeIcon icon={faAngleRight} onClick={() => setArrows(2)}/></div>
          </div>
        </div>
    
          {arrows === 1 ? 
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