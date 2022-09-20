import React, {useState} from 'react'
import MyPredictions from '../componentsLadders/myPrediction/MyPredictions'
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import Predictions from '../componentsLadders/predictions/Predictions'
import Ranking from '../componentsLadders/ranking/Ranking'
import "./basicLadder.css"


const BasicLadder = () => {

  const [predictions , setPredictions] = useState(true)
  const [myPrediction , setMyPrediction] = useState(false)
  const [ranking , setRanking] = useState(false)

  return (
    <div className="basicLadder">
      <NavLadder 
          ladder="Basic Ladder"
          setMyPrediction={setMyPrediction}
          setPredictions={setPredictions}
          setRanking={setRanking}
      />
      <div className="container_basicLadder">
        
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

export default BasicLadder