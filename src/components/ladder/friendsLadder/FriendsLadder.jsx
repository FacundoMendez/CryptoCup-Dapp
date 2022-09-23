import React , {useState} from 'react'
import NavLadder from "../componentsLadders/navLadder/NavLadder"
import MyPredictions from '../componentsLadders/myPrediction/MyPredictions'
import Ranking from '../componentsLadders/ranking/Ranking'
/* import Predictions from '../ladder/componentsLadders/predictions/Predictions' */
import "./friendsLadder.css"


const FriendsLadder = () => {

  const [predictions , setPredictions] = useState(true)
  const [myPrediction , setMyPrediction] = useState(false)
  const [ranking , setRanking] = useState(false)


  return (
  <div className="friendsLadder"> 
      <NavLadder 
          ladder="friends Ladder"
          setMyPrediction={setMyPrediction}
          setPredictions={setPredictions}
          setRanking={setRanking}
      />
      <div className="container_friendsLadder">
{/*           {
            predictions ? 
              <Predictions/>
            :
            null
          } */}

          {
            myPrediction ? 
              <MyPredictions/>
            :
            null
          }
          
          {
            ranking ? 
              <Ranking/>
            :
            null
          }
        </div>
    </div>
  )
}

export default FriendsLadder