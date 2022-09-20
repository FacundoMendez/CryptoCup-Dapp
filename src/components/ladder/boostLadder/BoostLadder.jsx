import React , {useState} from 'react'
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import "./boostLadder.css"
import MyPredictions from '../componentsLadders/myPrediction/MyPredictions'
import Predictions from '../componentsLadders/predictions/Predictions'
import Ranking from '../componentsLadders/ranking/Ranking'

const BoostLadder = () => {

  const [myPrediction , setMyPrediction] = useState(false)
  const [predictions , setPredictions] = useState(true)
  const [ranking , setRanking] = useState(false)


  return (
    <div className="boostLadder">
      <NavLadder 
          ladder="Boost Ladder"
          setMyPrediction={setMyPrediction}
          setPredictions={setPredictions}
          setRanking={setRanking}
      />
      <div className="container_boostLadder">
          {
            predictions ? 
              <Predictions/>
            :
            null
          }

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

export default BoostLadder