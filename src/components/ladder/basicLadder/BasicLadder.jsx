import React, {useState, lazy, Suspense, useEffect} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./basicLadder.css"
import api from '../../../api'

const MyPredictions = lazy(() => import ('../componentsLadders/myPrediction/MyPredictions'))
const NavLadder = lazy(() => import ('../componentsLadders/navLadder/NavLadder'))
const Predictions = lazy(() => import ('./predictionsBasic/PredictionsBasic'))
const Ranking = lazy(() => import ('../componentsLadders/ranking/Ranking'))


const BasicLadder = () => {

  const [predictions , setPredictions] = useState(true)
  const [myPrediction , setMyPrediction] = useState(false)
  const [ranking , setRanking] = useState(false)
  const [loading ,setLoading]=useState(true)
    
  const [predictionCards,setPredictionCards]=useState([])

  useEffect(() => {
    getMatchs()
   },[]);
 
     //Get all matches from DB
     const getMatchs=async()=>{
       const res=await api.get('/matchs/getMatches')
       const matchsArray=res.data
       console.log(res.data);
       setPredictionCards(matchsArray)
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
            predictions ? 
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