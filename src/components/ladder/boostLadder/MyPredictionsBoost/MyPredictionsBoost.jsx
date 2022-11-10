import React , {useState , useContext , useEffect} from 'react'
import "./myPredictionsBoost.css"
import paisesJson from "../../../config/paises2.json"
import api from '../../../../api'
import ContextConnected from '../../../config/context/ConnectedContext'
import Spinner from '../../../config/spinner/Spinner'


const MyPredictionsBoost = () => {
  
  const Connected = useContext(ContextConnected)
  const [loading ,setLoading]=useState(true)
  const [predictionsHistory , setPredictionsHistory] = useState([]) 

  useEffect(() => {
    getPredictionsHistory()
   },[]);

  const getPredictionsHistory = async () => {
    const res = await api.post('/predictions/getPredictionsHistory', {
      address: Connected.account[0]
    })
    setPredictionsHistory(res.data)
    setLoading(false) 
  }


  return (

    <>

    {
  
    (predictionsHistory.length > 0 ) ? 
  
      <div className="container_myPrediction_boost">

          <div className="box_myPrediction_boost">
            <div className='spin' >
                {loading ? <Spinner/> : null}
              </div>


            {

            predictionsHistory.map( (item , index ) => {      
                return  <div key={index} className={
                  item.relatedGame[0].result === "" ? 
                    "myPrediction_boost " 
                    :  item.relatedGame[0].result == item.prediction ? 
                      "myPrediction_boost predictionSuccess_boost" 
                    :
                    "myPrediction_boost predictionLose_boost"
                  }>



                <p className='fecha_MyRecord_boost'> {new Date(item.relatedGame[0].startDate).getDate()}/{new Date(item.relatedGame[0].startDate).getMonth()}/{new Date(item.relatedGame[0].startDate).getFullYear()} </p>   {/* <<<--- fecha */}


                <div className="date_match_boost">

                  <p>{item.relatedGame[0].team1} </p>
                  <p className='vs_myPred_boost'>vs</p>
                  <p>{item.relatedGame[0].team2}</p>

                </div>

              <div className="box_match_mypred_boost">
                  <div className="mySelection_boost">

                    <div className="flag_mySelection_mypred_boost">
                      <img className='imgSelected_boost' src={paisesJson[item.prediction].img} alt="bandera team 1" />   {/* bandera equipo select */}
                      <p>My choice</p>
                    </div>
    
                    <div className="flag_result_mypred_boost">  
                      <img src={paisesJson[item.relatedGame[0].result].img} alt="bandera team 1" />  {/* bandera resultado */}
                      <p>Result</p>
                    </div>
    
                  </div>
              </div>

              {
                (item.relatedGame[0].result === "") ? 
      
                  <div className="result_mypred_boost ">
                    <span className="loader_boost"></span>
                  </div>

                : item.relatedGame[0].result == item.prediction ?

                  <div className="result_mypred_boost resut_win_boost">
                    <p className='winResult_boost'>WIN</p>
                  </div>

                :

                <div className="result_mypred_boost resutl_lose_boost">
                  <p className='loseWin_boost'>LOSE</p>
                </div>
    
              }
            </div>
              })
            }
        </div>

      </div>

    :
      loading === false && (predictionsHistory.length <= 0 ) ? <p className='noPredictions'> The tournament starts on November 20, 2022</p> : null 
  }
</>
  )
}

export default MyPredictionsBoost