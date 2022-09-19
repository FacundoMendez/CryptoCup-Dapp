import React, {useEffect} from 'react'
import "./basicLadder.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import basicLadderFuncional from './basicLadderFuncional'

const BasicLadder = () => {
  useEffect(() => {
    basicLadderFuncional()
  },[])
  return (
    <div className="basicLadder">
      <div className="nav_basicLadder">
         <h2>Basic Ladder</h2>
         <div className="links_BasicLadder">
            <ul>
               <li>Predictions</li>
               <li>My predictions</li>
               <li>Ranking</li>
            </ul>
         </div>
         <div className="container_links_movile">
            <button className="toggle_link" aria-label="Abrir menú"/*  onClick={() => navFuncional()} */>
              <FontAwesomeIcon icon={faBars} />
            </button>

            <div className="box_links_movile">
              <div className="links_movile">
                  <ul>
                    <li className='predictions'>Predictions</li>
                    <li>My predictions</li>
                    <li className='ranking'>Ranking</li>
                  </ul>
              </div>
            </div>
         </div>
      </div>
    </div>
  )
}

export default BasicLadder