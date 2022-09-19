import React, {useState} from 'react'
import "./ladderHome.css"
import BasicLadder from '../basicLadder/BasicLadder'
import BoostLadder from '../boostLadder/BoostLadder'
import FriendsLadder from '../../friendsLadder/FriendsLadder'

const LadderHome = () => {

    const [ladder, setLadder]= useState(1)

  return (
    <div className="container_LaddersHome">
        <div className="header_laddersHome">
            <h2>Ladders</h2>
            <div className="header_ladderHome_enlaces">
                <ul>
                    <li onClick={() => setLadder(1)}>Basic Ladder</li>
                    <li onClick={() => setLadder(2)}>Boost Ladder</li>
                    <li onClick={() => setLadder(3)}>Friends Ladder</li>
                </ul>
            </div>
        </div>

        <div className="boxLadder">
            {ladder === 1 ? 
                <BasicLadder/>
            : null}
            {ladder === 2 ? 
                <BoostLadder/>
            : null}
            {ladder === 3 ? 
                <FriendsLadder/>
            : null}
        </div>
    </div>
  )
}

export default LadderHome