import React,{useState, Suspense, lazy ,useContext} from 'react'
import {NavLink} from "react-router-dom";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
import "./home.css"
import ContextConnected from '../config/context/ConnectedContext';
import PopupError from '../config/popupsErrors/PopupError';
import { useEffect } from 'react';


const LiveMatchesHome = lazy(() => import ('./liveMatchesHome/LiveMatchesHome'))
const SliderBanner = lazy(() => import ('./slider/SliderBanner'))
const Spinner = lazy(() => import ('../config/spinner/Spinner'))


const Home = () => {

  const [arrows , setArrows] = useState(1)
  const [connectedPopup , setConnectedPopup] = useState()


  const Connected = useContext(ContextConnected)

  useEffect(() => {

    if(connectedPopup === true){
      setTimeout(() => {
        setConnectedPopup(false)
      }, 6000);
    }

  },[connectedPopup])

  return (
    <>
    <Suspense fallback={<Spinner/>}>
      <div className="containerDapp" >

        {connectedPopup ? <PopupError connectedPopup={connectedPopup}  /> : null }


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
              
              { Connected.userLogginActive ? 
                <NavLink to="/ladder" >
                  <div className="containerDapp_cards-basic cardMain" ></div>
                </NavLink>
                :
                <div className="containerDapp_cards-basic cardMain" onClick={() => setConnectedPopup(true) }> </div>
              }
              
              { Connected.userLogginActive ? 
                <NavLink to="/ladder" >
                  <div className="containerDapp_cards-boost cardMain" ></div>
                </NavLink>
                :
                <div className="containerDapp_cards-boost cardMain" onClick={() => setConnectedPopup(true) }></div>
              }

            { Connected.userLogginActive ? 
              <NavLink to="/ladder" >
                <div className="containerDapp_cards-friends cardMain " ></div>
              </NavLink> 
              : 
              <div className="containerDapp_cards-friends cardMain " onClick={() => setConnectedPopup(true) }> </div>
            }   
            </div>

          : 

          <div className="containerDapp_cards">
            { Connected.userLogginActive ?    
                <NavLink to="/Staking" >
                   <div className="containerDapp_cards-staking cardMain " >
                     <h2>Staking</h2>
                   </div>
                </NavLink>
            :
              <div className="containerDapp_cards-staking cardMain " onClick={() => setConnectedPopup(true) }>
                <h2>Staking</h2>
              </div>
            }

            { Connected.userLogginActive ?    

              <NavLink to="/Marketplace" >
                <div className="containerDapp_cards-marketplace cardMain" >
                  <h2>MarketPlace</h2>
                </div>
              </NavLink>
            :
              <div className="containerDapp_cards-marketplace cardMain " onClick={() => setConnectedPopup(true) }>
                <h2>Marketplace</h2>
              </div>
            }

            { Connected.userLogginActive ?    

              <NavLink to="/airdrop" >
                <div className="containerDapp_cards-miniGames cardMain " >
                  <h2>Mini Games</h2>
                </div>
              </NavLink> 
              :
              <div className="containerDapp_cards-miniGames cardMain " onClick={() => setConnectedPopup(true) }>
                <h2>Mini Games</h2>
              </div>
            }

          </div>
          }
      </div>
    </Suspense>
  </>
  )
}

export default Home