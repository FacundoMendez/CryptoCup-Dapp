import React , {useState , useContext , useEffect} from 'react'
import "./myPredictions.css"
import paisesJson from "../../../config/paises2.json"
import api from '../../../../api'
import ContextConnected from '../../../config/context/ConnectedContext'

const MyPredictions = () => {
  
  const Connected = useContext(ContextConnected)

  const [predictionSuccess , setPredictionSuccess] = useState(false)  /* si esta en true, acerto , sino perdio */
  const [predictionsHistory , setPredictionsHistory] = useState([])

  useEffect(() => {
    getPredictionsHistory()
   },[]);
  
  const getPredictionsHistory = async () => {
    const res = await api.post('/predictions/getPredictionsHistory', {
      address: Connected.account[0]
    })
    console.log(res.data);
    setPredictionsHistory(res.data)
  }
  
  
  return (
    <div className="container_myPrediction">

        <div className="box_myPrediction">

          {
            predictionsHistory.map( (item , index ) => {
              return  <div key={index} className={predictionSuccess ?  "myPrediction predictionSuccess" : "myPrediction predictionLose"}>
              <div className="date_match">
                <p> 00/00/2022 </p>
              </div>
            <div className="box_match_mypred">
  
                <div className="mySelection">
  
                  <div className="flag_mySelection_mypred">
                    <p>My choice</p>
                    <img className='imgSelected' src={paisesJson[item.prediction].img} alt="bandera team 1" />   {/* bandera equipo select */}
                  </div>
  
                  <div className="flag_result_mypred">  
                    <p>Result</p>
                    <img src={paisesJson[item.relatedGame[0].result].img} alt="bandera team 1" />  {/* bandera resultado */}
                  </div>
  
                </div>
  
            </div>
            {
              (item.relatedGame[0].result == item.prediction) ? 
  
              <div className="result_mypred resut_win">
                <p>WIN</p>
              </div>
              :
              <div className="result_mypred resutl_lose">
              <p></p>
            </div>
  
            }
          </div>
            })
          }

      </div>
    </div>
  )
}

export default MyPredictions