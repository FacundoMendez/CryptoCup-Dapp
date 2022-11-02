import React, {useState, Suspense, useEffect ,useContext} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./basicLadder.css"
import api from '../../../api'
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import Predictions from './predictionsBasic/PredictionsBasic'
import PopupPrediction from '../../config/popupsPredictions/PopupPrediction'
import MyPredictions from './MyPredictions/MyPredictions'
import Ranking from '../componentsLadders/ranking/Ranking'
import { rankings } from '../componentsLadders/ranking/rankings';

const BasicLadder = () => {

  const [Matches , setMatches] = useState(true)
  const [myRecord , setMyRecord] = useState(false)
  const [ranking , setRanking] = useState(false)
  const [loading ,setLoading]=useState(true)
    
  const [predictionCards,setPredictionCards]=useState([])

  const Connected = useContext(ContextConnected)
  const PredictionContext = useContext(ContextConnected)


  useEffect(() => {
    getPredictionsAvailables()
   },[]);
 
     //Get all matches from DB
     const getPredictionsAvailables=async()=>{
       const res=await api.post(`/predictions/`, {
        address: Connected.account[0] ,
        signature: Connected.signature
       })

       const predictionsArray=res.data
       setPredictionCards(predictionsArray)
       setLoading(false) 
   }

   console.log(predictionCards)


  return (
    <Suspense fallback={<Spinner/>}>
      <div className="basicLadder">
      {PredictionContext.confirmedPrediction === true  ? <PopupPrediction /> : null}
      {PredictionContext.confirmedPrediction === false ? <PopupPrediction /> : null}
      
        <NavLadder 
            ladder="Basic Ladder"
            setMyRecord={setMyRecord}
            setMatches={setMatches}
            setRanking={setRanking}
        />
        
        <div className="container_basicLadder">

  

            {
              myRecord ? 
                <Suspense fallback={<Spinner/>}>
                  <MyPredictions/> 
                  {/* <img className='candado' src={candado} alt="candado" /> */}
                </Suspense>
              :
              null
            }



          {
            ranking ? 
              <Suspense fallback={<Spinner/>}>
                { rankings && rankings.length > 0 ?<Ranking rankings={rankings} /> : null }
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