import React , {useState} from 'react'
import NavLadder from "../componentsLadders/navLadder/NavLadder"
/* import MyPredictions from '../componentsLadders/myPrediction/MyPredictions'
import Ranking from '../componentsLadders/ranking/Ranking' */
/* import Predictions from '../ladder/componentsLadders/predictions/Predictions' */
import "./friendsLadder.css"
import candado from "../../config/src/candado.png"

const FriendsLadder = () => {

  const [Matches , setMatches] = useState(true)
  const [myRecord , setMyRecord] = useState(false)
  const [ranking , setRanking] = useState(false)


  return (
  <div className="friendsLadder"> 
      <NavLadder 
          ladder="Challenge Room"
          setMyRecord={setMyRecord}
          setMatches={setMatches}
          setRanking={setRanking}
      />
      <div className="container_friendsLadder">
        
        <div className="blur_boost"></div>
          {
            Matches ? 
            /*   <Predictions/> */
            <img className='candado' src={candado} alt="candado" />
            :
            null
          }

          {
            myRecord ? 
              /* <MyPredictions/> */
              <img className='candado' src={candado} alt="candado" />
            :
            null
          }
          
          {
            ranking ? 
              /* <Ranking/> */
              <img className='candado' src={candado} alt="candado" />
            :
            null
          }
        </div>
    </div>
  )
}

export default FriendsLadder