import React,{useEffect , useContext , useState} from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import logoCC from "./src/logoPng.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional'
import ContextConnected from '../config/context/ConnectedContext'
import Login from './login/Login'
import { verificarExistencia } from './verifyUser'
import { ethers } from 'ethers'
import api from "../../api"

const Nav = () => {

  useEffect(() => {
    navFuncional()
  },[])

    const Connected = useContext(ContextConnected)

    //conexiones blockchain
    const [provider,setProvider]=useState(undefined)
    const [account,setAccount]=useState(undefined)
    const [signer,setSigner]=useState(undefined)
    /* const [connected, setConnected] = useState(false); */


    //Cargamos datos blockchain del usuario y generamos mensaje
    const init=async ()=>{
      try {
          if (window.ethereum) {
              const newProvider = await new ethers.providers.Web3Provider(window.ethereum);
              const { chainId } = await newProvider.getNetwork();
              const newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
              const newSigner = await newProvider.getSigner();
              if (chainId === 56) {
                  setProvider(newProvider)
                  setAccount(newAccount)
                  setSigner(newSigner)
                  
                  getMessage(newProvider, newAccount, newSigner)  
              } else {
                  alert("chain erronea")
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

    console.log(message)
    const signature = await _signer.signMessage(message.toString()) // Este valor habria que guardarlo durante todo el dia.
    console.log(signature)
    console.log(_account[0])

    const userRegistered = await verificarExistencia(_account[0], signature);
    
    if (userRegistered === false) {
      Connected.setActiveLogin(true)
      console.log("abrir popup");
        
    } else {
      Connected.setActiveLogin(true)
      console.log("Conectar usuario");
    }
  }
  


  return (
    <header className='header'>
      <div className="nav">
          <button className="nav_Toggle" aria-label="Abrir menú">
              <FontAwesomeIcon icon={faBars} />
          </button>
          <ul className='listNav'>
              <NavLink to="/"> <li className='nav_list_links'> <img className='logoNav' src={logoCC} alt="LogoCC" /> </li></NavLink> 
    
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
              null
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
                <li className='nav_list_links'> Airdrop</li> 
              </NavLink> 
              :
              null
            }

          </ul>

          { Connected.userLogginActive ?    
            <div className="user_flag">
           {/*    <img src={paisesJson.USA.img} alt="user flag" /> */}
            </div>
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
            <li className='buttonLogin'>
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