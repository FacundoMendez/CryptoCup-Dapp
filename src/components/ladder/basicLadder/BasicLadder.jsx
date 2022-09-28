import React, {useState, Suspense, useEffect ,useContext} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./basicLadder.css"
import api from '../../../api'
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import Predictions from './predictionsBasic/PredictionsBasic'
import PopupPrediction from '../../config/popupsPredictions/PopupPrediction'
/* import MyPredictions from '../componentsLadders/myPrediction/MyPredictions'
import Ranking from '../componentsLadders/ranking/Ranking' */


const BasicLadder = () => {

  const [predictions , setPredictions] = useState(true)
  const [myPrediction , setMyPrediction] = useState(false)
  const [ranking , setRanking] = useState(false)
  const [loading ,setLoading]=useState(true)
    
  const [predictionCards,setPredictionCards]=useState([])

  const PredictionContext = useContext(ContextConnected)

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
      {PredictionContext.confirmedPrediction === true  ? <PopupPrediction /> : null}
      {PredictionContext.confirmedPrediction === false ? <PopupPrediction /> : null}
      
        <NavLadder 
            ladder="Basic Ladder"
            setMyPrediction={setMyPrediction}
            setPredictions={setPredictions}
            setRanking={setRanking}
        />
        <div className="container_basicLadder">
          <div className='spin' >
            {loading ? <Spinner/> : null}
          </div>

          <div className="blur"></div>

          {
            (predictionCards.length > 0) && predictions ? 
            <Suspense fallback={<Spinner/>}>
              { 
                predictionCards.map((item,index)=>{
                  return <Predictions key={index}
                    id={item._id}
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
            myPrediction ? 
              <Suspense fallback={<Spinner/>}>
                {/*  <MyPredictions/>  */}
                <img className='candado' src={candado} alt="candado" />
              </Suspense>
            :
            null
          }

          {
            ranking ? 
              <Suspense fallback={<Spinner/>}>
                {/*  <Ranking/> */}
                <img className='candado' src={candado} alt="candado" />
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