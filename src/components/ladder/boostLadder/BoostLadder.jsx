import React , {useState , Suspense,  useContext, useEffect} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./boostLadder.css"
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'
import api from '../../../api'
import PopupPrediction from '../../config/popupsPredictions/PopupPrediction'
import PredictionsBoost from './predictionsBoost/PredictionsBoost'
import MyPredictionsBoost from './MyPredictionsBoost/MyPredictionsBoost'
import { rankings } from '../componentsLadders/ranking/rankings'
import Ranking from '../componentsLadders/ranking/Ranking'


const BoostLadder = () => {

  const [myRecord , setMyRecord] = useState(false)
  const [Matches , setMatches] = useState(true)
  const [ranking , setRanking] = useState(false)
  const [loading ,setLoading]=useState(true)
  const Connected = useContext(ContextConnected)
  const PredictionContext = useContext(ContextConnected)

  const [predictionCards,setPredictionCards]=useState([])


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



  return (
    <>
    {
      Connected.userLogginActive ? 

        <Suspense fallback={<Spinner/>}>
          <div className="boostLadder">

            {PredictionContext.confirmedPrediction === true  ? <PopupPrediction /> : null}
            {PredictionContext.confirmedPrediction === false ? <PopupPrediction /> : null}
      
            <NavLadder 
                ladder="Boost Ladder"
                setMyRecord={setMyRecord}
                setMatches={setMatches}
                setRanking={setRanking}
            />


            <div className="container_boostLadder">

                <div className="box_predictions_boost">

                    <div className='spin' >
                      {loading ? <Spinner/> : null}
                    </div>
                

                    {/* matches */}
                    
                  { (predictionCards.length > 0 ) && Matches ? 
                        <Suspense fallback={<Spinner/>}>
                        { 
                          predictionCards.map((item,index)=>{
                            return <PredictionsBoost key={index}
                              id={item._id}
                              timer={item.startDate}
                              round={item.round}
                              nameTeam1={item.team1}
                              nameTeam2={item.team2}
                              resultTeam1={item.scoreTeam1}
                              resultTeam2={item.scoreTeam2}
                              getPredictionsAvailables={getPredictionsAvailables}
                            />  
                          })   
                        }
                        </Suspense>
                      :
                      loading === false && (predictionCards.length <= 0 ) && Matches ? <p className='noPredictions'> NO MATCHS </p> : null 
                    }
                </div>


                {
                myRecord ? 
                  <Suspense fallback={<Spinner/>}>
                    <MyPredictionsBoost/> 
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
        : 
        window.location.href = "/"
      }
    </>
  )
}

export default BoostLadder