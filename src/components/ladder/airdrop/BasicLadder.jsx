import React, {useState, Suspense, useEffect ,useContext} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./basicLadder.css"
import api from '../../../api'
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import Predictions from './predictionsBasic/PredictionsBasic'
import PopupPrediction from '../../config/popupsPredictions/PopupPrediction'
import MyPredictions from './MyPredictionsAirdrop/MyPredictionsAirdrop'


const BasicLadder = () => {
    const [Matches , setMatches] = useState(true)
    const [myRecord , setMyRecord] = useState(false)
    const [ranking , setRanking] = useState(false)
    const [loading ,setLoading]=useState(true)
      
    const [predictionCards,setPredictionCards]=useState([])
  
    const Connected = useContext(ContextConnected)
    const PredictionContext = useContext(ContextConnected)
  
  
    useEffect(() => {
      if (Connected.userToken) {
        getPredictionsAvailables()
      }
  
     },[]);
   
       //Get all matches from DB
       const getPredictionsAvailables=async()=>{
        const res=await api.get(`/predictions/getFreePredictions`, {
          headers:{
            'Authorization' : 'Bearer ' + Connected.userToken
          }
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
    
              <div className="box_predictions_airdrop">
    
                <div className='spin' >
                  {loading ? <Spinner/> : null}
                </div>
            
    
                {/* matches */}
                
              { (predictionCards.length > 0 ) && Matches ? 
                    <Suspense fallback={<Spinner/>}>
                    { 
                      predictionCards.map((item,index)=>{
                        return <Predictions key={index}
                          id={item._id}
                          timer={item.startDate}
                          finishDate={item.finishDate}
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
                  loading === false && (predictionCards.length <= 0 ) && Matches ? <p className='noPredictions'> The tournament starts on November 20, 2022</p> : null 
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
      
      :

      window.location.href = "/"
    
    }
    </>
    )
}

export default BasicLadder