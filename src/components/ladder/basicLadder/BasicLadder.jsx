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
            setMyRecord={setMyRecord}
            setMatches={setMatches}
            setRanking={setRanking}
        />
        
        <div className="container_basicLadder">

          <div className="box_predictions">
            <div className='spin' >
              {loading ? <Spinner/> : null}
            </div>
            <div className="blur"></div>


            {/* matches */}
            
            { (predictionCards.length > 0 ) && Matches ? 
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
          </div>

          {
            myRecord ? 
              <Suspense fallback={<Spinner/>}>
                <MyPredictions/>
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