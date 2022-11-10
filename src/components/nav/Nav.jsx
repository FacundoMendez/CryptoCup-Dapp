import React,{useEffect , useContext , useState} from 'react'
import { NavLink } from 'react-router-dom'
import logoCC from "./src/logoPng.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional'
import ContextConnected from '../config/context/ConnectedContext'
import Login from './login/Login'
import { ethers } from 'ethers'
import paisesJson from "../config/paises2.json"
import PopupError from '../config/popupsErrors/PopupError'
import api from '../../api'
import Cookies from 'universal-cookie/cjs/Cookies'
import { contractAddress, erc721Abi } from '../config/contract/config'
import logoMetamask from "./src/logoMetamask.png"
import "./nav.css"


const Nav = () => {

  async function handleCallbackResponse(response) {
    try {
      const post = await api.post('/user/googleLogin' , {
        googleToken : response.credential
      })
      if (post.status === 200) {
        Connected.setUserData(post.data.user);
        Connected.setUserToken(post.data.token)
        Connected.setActiveLogin(false);
        Connected.setUserLoginActive(true);
        setTimeout(() => {
          refreshAccessToken()
        }, 1164000  );
      }

    } catch (error) {
      if (error.response.status === 404) {
        Connected.setUserEmail(error.response.data)
        Connected.setActiveLogin(true);
      } 
    }
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:"820212833361-dafbpq530ajj2o2459sj94qi10fvk6p0.apps.googleusercontent.com",
      callback:handleCallbackResponse,
    })

    google.accounts.id.renderButton(
      document.getElementById("googleLogin") ,  
      {  type: "icon" , theme : "filled_black"  ,shape: "circle" ,size: "large" }
      
    ) 
    navFuncional()
    verificarPersistencia()
  },[])

    const [chainIncorrecta , setChainIncorrecta] = useState(false)

    const Connected = useContext(ContextConnected)
    const cookies = new Cookies()

    const verificarPersistencia = async () => {
      const persistencia = await api.get('/user/refreshToken') 
      if (persistencia.status === 200) {
        try {
          const res = await api('/user/getUser' ,{
            method: "GET",
            headers: {
              "Authorization" : "Bearer " +persistencia.data.token
            }
          })
          if (res.status === 200) {
            Connected.setUserData(res.data);
            Connected.setUserToken(persistencia.data.token)
            Connected.setActiveLogin(false);
            Connected.setUserLoginActive(true); 
            setTimeout(() => {
              refreshAccessToken()
            }, 1164000  );
          }
         
        } catch (error) {
          console.log(error);
        }
       
      }
    }

    //Cargamos datos blockchain del usuario y generamos mensaje
    const initMetamask=async ()=>{
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

 /*  const userInited = async () => {
     const res = await api.get('/user/cookieLogin') 
     if (res.status === 200) {
        const {address , signature} = res.data 

        const userRes = await getUserData(address, signature);
        Connected.setUserData(userRes);
        Connected.setUserLoginActive(true);
        Connected.setAccount([address])
        Connected.setActiveLogin(false);
        Connected.setSignature(signature);


       
     }
     console.log(res.data);
  } */

  const logOut =  async () => {
      const res = await api.get('/user/logout') 
      Connected.setUserData(undefined);
      Connected.setUserToken(undefined)
      Connected.setUserLoginActive(false);
      Connected.setSignature(undefined);
      window.location.href = "/"
  }
 

      //Obtenemos mensaje a firmar por metamask
  const getMessage = async (_provider, _account, _signer) => {
    // get all nfts from the contract, loop them, and get the user nfts.
    // create contract instance.
    const contract = new ethers.Contract(contractAddress, erc721Abi, _signer);
    
    const basicUserNfts = await contract.getBasicTicketsInv(_account[0]);
    const boostUserNfts = await contract.getBoostTicketsInv(_account[0]);
    
    console.log(basicUserNfts);
    console.log(boostUserNfts);

    Connected.setBasicTicketsInv(basicUserNfts);
    Connected.setBoostTicketsInv(boostUserNfts);

    const currBlock = await _provider.getBlockNumber();
    const { timestamp } = await _provider.getBlock(currBlock);
    const message = timestamp - (timestamp % 86400);

    const signature = await _signer.signMessage(message.toString()); // Aca hay que guardar el valor durante todo el dia y en el context para solo tener que pedirlo una vez.
    Connected.setSignature(signature);

    //Verify if user exists 
    try {
      const res = await api.post('/user/metamaskLogin', { address: _account[0] , signature });
      
      Connected.setUserData(res.data.user);
      Connected.setUserToken(res.data.token)
      Connected.setActiveLogin(false);
      Connected.setUserLoginActive(true);
      setTimeout(() => {
        refreshAccessToken()
      }, 1164000  );
    } catch (error) {
      if (error.response.status === 404) {
        Connected.setActiveLogin(true);
      } 
    }
  }
  
  const refreshAccessToken = async () => {
   const res = await api.get('/user/refreshToken')
   if (res.status === 200) {
      Connected.setUserToken(res.data.token); 
      setTimeout(() => {
        refreshAccessToken()
      }, 1164000   );
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
 
              <NavLink to="/"> 
                <li className='nav_list_links'> 
                  <img className='logoNav' src={logoCC} alt="LogoCC" /> 
                </li>
              </NavLink> 

              <NavLink to="/home" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                <li className='nav_list_links'> Home</li> 
              </NavLink> 

              <NavLink to="/ladder" className="link_nav_text"  style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                 <li className='nav_list_links'>Ladders</li> 
              </NavLink> 

              <NavLink to="/matchFeed" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                <li className='nav_list_links'> Match Feed</li> 
              </NavLink> 
           
              <NavLink to="/staking" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
                <li className='nav_list_links'> Staking</li>
              </NavLink> 
             
              <NavLink to="/marketplace" className="link_nav_text" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                <li className='nav_list_links'> Marketplace </li> 
              </NavLink> 
          </ul>

          { Connected.userLogginActive ?    
            <NavLink to="/profileUser" className="user_flag"> 
                 <img className='pais_profile_img' src={paisesJson[Connected.userData.flag].img} alt="user flag" />  
            </NavLink> 
              
          :
          null}

          { Connected.userLogginActive ?    
            <ul className='listNav_login'>
              <li className='buttonLogin' onClick={() => logOut()}>
                Disconnect
              </li>
            </ul>
          :
            <ul className='listNav_login' >
              <li className='buttonLogin' onClick={ () => initMetamask()}/*  style={{backgroundColor: "gray"}} */>
                Connect
                <img src={logoMetamask} alt="logoMetamask" />
              </li>
              <div id='googleLogin'></div>
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