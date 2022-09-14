import React,{useEffect} from 'react'
import "./nav.css"
import { NavLink } from 'react-router-dom'
import logoCC from "./src/logoPng.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import navFuncional from './navFuncional'

const Nav = () => {

  useEffect(() => {
    navFuncional()
  },[])


  return (
    <div className="nav">
      <button className="nav_Toggle" aria-label="Abrir menú"/*  onClick={() => navFuncional()} */>
          <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className='listNav'>
          <NavLink to="/"> <li> <img className='logoNav' src={logoCC} alt="LogoCC" /> </li></NavLink> 

          <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
            <li> Home</li> 
          </NavLink>

            <li className='ladders_nav'> Ladders

              <ul className='subList_ladders'>
                <NavLink to="/basicLadder" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
                  <li>Basic Ladder</li>
                </NavLink>
                <NavLink to="/boostLadder" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
                  <li>Boost Ladder</li>
                </NavLink>
                <NavLink to="/friendsLadder" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
                  <li>Friends Ladder</li>
                </NavLink>
              </ul>  
              
            </li> 

          <NavLink to="/staking" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
            <li> Staking</li>
          </NavLink>

          <NavLink to="/marketplace" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
            <li> Marketplace </li> 
          </NavLink>
          <NavLink to="/airdrop" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}> 
            <li> Airdrop</li> 
          </NavLink>

          <NavLink to="/matchFeed" style={({ isActive }) => ({ color: isActive ? '#d6b0ff' : 'white' })}>
            <li> Match Feed</li> 
          </NavLink>
      </ul>

      <ul className='listNav_login'>
        <li className='buttonLogin'>
          Login
        </li>
      </ul>
    </div>
  )
}

export default Nav