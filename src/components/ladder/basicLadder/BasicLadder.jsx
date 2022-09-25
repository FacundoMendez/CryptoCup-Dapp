import React, {useState, lazy, Suspense, useEffect} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./basicLadder.css"
import api from '../../../api'
/* import MyPredictions from '../componentsLadders/myPrediction/MyPredictions' */
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import Predictions from './predictionsBasic/PredictionsBasic'
import Ranking from '../componentsLadders/ranking/Ranking'


const BasicLadder = () => {

  const [predictions , setPredictions] = useState(true)
  const [myPrediction , setMyPrediction] = useState(false)
  const [ranking , setRanking] = useState(false)
  const [loading ,setLoading]=useState(true)
    
  const [predictionCards,setPredictionCards]=useState([])

  useEffect(() => {
    getPredictionsAvailables()
   },[]);
 
     //Get all matches from DB
     const getPredictionsAvailables=async()=>{
       const res=await api.get('/predictions/')
       const predictionsArray=res.data
       console.log(res.data);
       setPredictionCards(predictionsArray)
       setLoading(false) 
   }

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
          <div>
            {loading ? <Spinner/> : null}
          </div>
          {
            (predictionCards.length > 0) ? 
            <Suspense fallback={<Spinner/>}>
              { 
                predictionCards.map((item,index)=>{
                  return <Predictions key={index}
                    timer={item.startDate}
                    round={item.round}
                    nameTeam1={item.team1}
                    nameTeam2={item.team2}
                    resultTeam1={item.scoreTeam1}
                    resultTeam2={item.scoreTeam2}
                  />  
                })
                
              }
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