import React,{useEffect , useContext} from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import logoCC from "./src/logoPng.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional'
import ContextConnected from '../config/context/ConnectedContext'
import Login from './login/Login'

const Nav = () => {

  useEffect(() => {
    navFuncional()
  },[])

  
  const Connected = useContext(ContextConnected)

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
          <ul className='listNav_login'>
              <li className='buttonLogin' onClick={() => Connected.setUserLoginActive(false)}>
                Disconnect
              </li>
            </ul>
          :
          <ul className='listNav_login' onClick={ () => Connected.setActiveLogin(true)}>
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