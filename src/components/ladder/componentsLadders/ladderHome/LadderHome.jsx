import React, {useState, lazy, Suspense} from 'react'
import Spinner from '../../../config/spinner/Spinner'
import "./ladderHome.css"

const BasicLadder = lazy(() => import ('../../basicLadder/BasicLadder'))
const BoostLadder = lazy(() => import ('../../boostLadder/BoostLadder'))
const FriendsLadder = lazy(() => import ('../../friendsLadder/FriendsLadder'))

const LadderHome = () => {

    const [ladder, setLadder]= useState(1)

    const [colorBasic, setColorBasic] = useState("#bebdff")
    const [colorBoost, setColorBoost] = useState("white")
    const [colorFriends , setColorFriends] = useState("white")
    
    const colorBasicFuction = ( ) => {
        setColorBasic('#bebdff')
        setColorBoost('white')
        setColorFriends('white')
    }
    const colorBoostFuction = ( ) => {
        setColorBasic('white')
        setColorBoost('#bebdff')
        setColorFriends('white')
    }

    const colorFriendsFuction = ( ) => {
        setColorBasic('white')
        setColorBoost('white')
        setColorFriends('#bebdff')
    }

  return (
    <Suspense fallback={<Spinner/>}>
        <div className="container_LaddersHome">
            <div className="header_laddersHome">
                <h2>Ladders</h2>
                <div className="header_ladderHome_enlaces">
                    <ul>
                        <li style={{color : colorBasic}}  onClick={() => {
                                setLadder(1)
                                setColorBasic(true) 
                                setColorBoost(false)
                                setColorFriends(false)    
                                colorBasicFuction()
                            }}>
                            Basic Ladder
                        </li>
                        <li style={{color : colorBoost}}  onClick={() =>{ 
                                setLadder(2)
                                setColorBasic(false) 
                                setColorBoost(true)
                                setColorFriends(false)    
                                colorBoostFuction()
                            }}>
                            Boost Ladder
                        </li>
                        <li style={{color : colorFriends}}  onClick={() => {
                                setLadder(3)
                                setColorBasic(false) 
                                setColorBoost(false)
                                setColorFriends(true)    
                                colorFriendsFuction()
                            }}>
                            Friends Ladder
                        </li>
                    </ul>
                </div>
            </div>

            <div className="boxLadder">
                {ladder === 1 ? 
                    <Suspense fallback={<Spinner/>}>
                        <BasicLadder/>
                    </Suspense>
                : null}
                {ladder === 2 ? 
                    <Suspense fallback={<Spinner/>}>
                        <BoostLadder/>
                    </Suspense>
                : null}
                {ladder === 3 ? 
                    <Suspense fallback={<Spinner/>}>
                        <FriendsLadder/>
                    </Suspense>
                : null}
            </div>
        </div>
    </Suspense>
  )
}

export default LadderHome