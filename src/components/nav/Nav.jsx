import React,{useEffect , useContext , useState} from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import logoCC from "./src/logoPng.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional'
import ContextConnected from '../config/context/ConnectedContext'
import Login from './login/Login'
import { getUserData, verificarExistencia } from './verifyUser'
import { ethers } from 'ethers'
import paisesJson from "../config/paises2.json"
import PopupError from '../config/popupsErrors/PopupError'
import userImg from "./src/profile.png"

const Nav = () => {

  useEffect(() => {
    navFuncional()
  },[])

    const [chainIncorrecta , setChainIncorrecta] = useState(false)

    const Connected = useContext(ContextConnected)

    //Cargamos datos blockchain del usuario y generamos mensaje
    const init=async ()=>{
      try {
          if (window.ethereum) {
              const newProvider = await new ethers.providers.Web3Provider(window.ethereum);
              const { chainId } = await newProvider.getNetwork();
              const newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
              const newSigner = await newProvider.getSigner();
              if (chainId === 56) {
                Connected.setProvider(newProvider)
                Connected.setAccount(newAccount)
                Connected.setSigner(newSigner)
                  
                getMessage(newProvider, newAccount, newSigner)  
              } else {
                setChainIncorrecta(true)
              }       
          }
        
      } catch (error) {
          console.log(error.message)
      }
  }


      //Obtenemos mensaje a firmar por metamask
  const getMessage = async (_provider, _account, _signer) => {
    const currBlock = await _provider.getBlockNumber();
    const { timestamp } = await _provider.getBlock(currBlock);
    const message = timestamp - (timestamp % 86400);

    const signature = await _signer.signMessage(message.toString()); // Aca hay que guardar el valor durante todo el dia y en el context para solo tener que pedirlo una vez.
    Connected.setSignature(signature);

    const userRegistered = await verificarExistencia(_account[0], signature);
    
    if (userRegistered === false) {
      Connected.setActiveLogin(true);
        console.log("LOGEADO");
    } else {
      const userRes = await getUserData(_account[0], signature);
      console.log(userRes);
      Connected.setUserData(userRes);

      Connected.setActiveLogin(false);
      Connected.setUserLoginActive(true);
    }
  }
  


  return (
    <header className='header'>
      {chainIncorrecta ? <PopupError chainIncorrecta={chainIncorrecta} /> : null}
      <div className="nav">
          <button className="nav_Toggle" aria-label="Abrir menú">
              <FontAwesomeIcon icon={faBars} />
          </button>
          <ul className='listNav'>
 
              { Connected.userLogginActive ?    

                  <NavLink to="/"> 
                    <li className='nav_list_links'> 
                      <img className='logoNav' src={logoCC} alt="LogoCC" /> 
                    </li>
                  </NavLink> 

                  :

                  <NavLink to="/"> 
                    <li className='link_nav_text_desconected'> 
                      <img className='logoNav logoNav_desconect' src={logoCC} alt="LogoCC" /> 
                    </li>
                  </NavLink> 
                }

    
              { Connected.userLogginActive ?    

                <NavLink to="/home" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                  <li className='nav_list_links'> Home</li> 
                </NavLink> 

                  :
           
                <NavLink to="/home" className="link_nav_text_desconected" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                  <li className='nav_list_links nav_list_desconected'> Home</li> 
                </NavLink> 
              }


            { Connected.userLogginActive ?    

              <NavLink to="/matchFeed" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                <li className='nav_list_links'> Match Feed</li> 
              </NavLink> 
              :
              <NavLink to="/matchFeed" className="link_nav_text_desconected" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                <li className='nav_list_links nav_list_desconected'> Match Feed</li> 
              </NavLink> 
            }

            { Connected.userLogginActive ?    

              <NavLink to="/ladder" className="link_nav_text"  style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                 <li className='nav_list_links'>Ladders</li> 
              </NavLink> 
              :
              null
            }

            { Connected.userLogginActive ?    

              <NavLink to="/staking" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
                <li className='nav_list_links'> Staking</li>
              </NavLink> 
              :
              null
            }

            { Connected.userLogginActive ?    

              <NavLink to="/marketplace" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                <li className='nav_list_links'> Marketplace </li> 
              </NavLink> 
              :
              null
            }
            
            { Connected.userLogginActive ?    

              <NavLink to="/airdrop" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
                <li className='nav_list_links'> Mini Game</li> 
              </NavLink> 
              :
              null
            }

          </ul>

          { Connected.userLogginActive ?    
            <NavLink to="/profileUser" className="user_flag"> 
                 <img className='pais_profile_img' src={paisesJson[Connected.userData.flag].img} alt="user flag" />  

            </NavLink> 
              
          :
          null}

          { Connected.userLogginActive ?    
            <ul className='listNav_login'>
              <li className='buttonLogin' onClick={() => Connected.setUserLoginActive(false)}>
                Disconnect
              </li>
            </ul>
          :
            <ul className='listNav_login' onClick={ () => init()}>
              <li className='buttonLogin'/*  style={{backgroundColor: "gray"}} */>
                Connect
              </li>
            </ul>
          }

        </div>
        {Connected.activeLogin ? 
          <Login/> 
        : null}
    </header>
    
  )
}

export default Nav