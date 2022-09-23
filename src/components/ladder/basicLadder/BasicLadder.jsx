import React, {useState, lazy} from 'react'
import { Suspense } from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./basicLadder.css"

const MyPredictions = lazy(() => import ('../componentsLadders/myPrediction/MyPredictions'))
const NavLadder = lazy(() => import ('../componentsLadders/navLadder/NavLadder'))
const Predictions = lazy(() => import ('./predictionsBasic/PredictionsBasic'))
const Ranking = lazy(() => import ('../componentsLadders/ranking/Ranking'))


const BasicLadder = () => {

  const [predictions , setPredictions] = useState(true)
  const [myPrediction , setMyPrediction] = useState(false)
  const [ranking , setRanking] = useState(false)

  return (
    <Suspense fallback={<Spinner/>}>
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
              <Suspense fallback={<Spinner/>}>
                <Predictions/>
              </Suspense>

            :
            null
          }

          {
            myPrediction ? 
              <Suspense fallback={<Spinner/>}>
                <MyPredictions/>
              </Suspense>
            :
            null
          }
          
          {
            ranking ? 
              <Suspense fallback={<Spinner/>}>
                <Ranking/>
              </Suspense>
            :
            null
          }
        </div>
      </div>
    </Suspense>
  )
}

export default BasicLadder