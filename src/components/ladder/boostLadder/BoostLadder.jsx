import React , {useState , lazy, Suspense} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./boostLadder.css"

const MyPredictions = lazy(() => import ('../componentsLadders/myPrediction/MyPredictions'))
const NavLadder = lazy(() => import ('../componentsLadders/navLadder/NavLadder'))
/* const Predictions = lazy(() => import ('../componentsLadders/predictions/Predictions')) */
const Ranking = lazy(() => import ('../componentsLadders/ranking/Ranking'))

const BoostLadder = () => {

  const [myPrediction , setMyPrediction] = useState(false)
  const [predictions , setPredictions] = useState(true)
  const [ranking , setRanking] = useState(false)


  return (
    <Suspense fallback={<Spinner/>}>
      <div className="boostLadder">
        <NavLadder 
            ladder="Boost Ladder"
            setMyPrediction={setMyPrediction}
            setPredictions={setPredictions}
            setRanking={setRanking}
        />
        <div className="container_boostLadder">
 {/*            {
              predictions ? 
                <Suspense fallback={<Spinner/>}>
                  <Predictions/>
               </Suspense>
              :
              null
            } */}

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

export default BoostLadder