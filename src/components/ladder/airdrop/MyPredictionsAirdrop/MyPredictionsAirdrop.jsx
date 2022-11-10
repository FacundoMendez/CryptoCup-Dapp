import React , {useState , useContext , useEffect} from 'react'
import "./myPredictionsAirdrop.css"
import paisesJson from "../../../config/paises2.json"
import api from '../../../../api'
import ContextConnected from '../../../config/context/ConnectedContext'
import Spinner from '../../../config/spinner/Spinner'


const MyPredictions = () => {
  
  const Connected = useContext(ContextConnected)
  const [loading ,setLoading]=useState(true)
  const [predictionsHistory , setPredictionsHistory] = useState([]) 

  useEffect( () => {
    if (Connected.userToken) {
      getPredictionsHistory()
    }

   },[]);

  const getPredictionsHistory = async () => {
    const res = await api.get('/predictions/getFreePredictionsHistory', {
      headers:{
        'Authorization' : 'Bearer ' + Connected.userToken
      }
  })
    setPredictionsHistory(res.data)
    setLoading(false) 
  }


  return (
  <>

  {

      (predictionsHistory.length > 0 ) ? 


    <div className="container_myPrediction">

        <div className="box_myPrediction">
          <div className='spin' >
              {loading ? <Spinner/> : null}
            </div>


          {

           predictionsHistory.map( (item , index ) => {      
              return  <div key={index} className={
                item.relatedGame[0].result === "" ? 
                   "myPrediction " 
                   :  item.relatedGame[0].result == item.prediction ? 
                    "myPrediction predictionSuccess" 
                   :
                   "myPrediction predictionLose"
                }>



              <p className='fecha_MyRecord'> {new Date(item.relatedGame[0].startDate).getDate()}/{new Date(item.relatedGame[0].startDate).getMonth()}/{new Date(item.relatedGame[0].startDate).getFullYear()} </p>   {/* <<<--- fecha */}


              <div className="date_match">

                <p>{item.relatedGame[0].team1} </p>
                <p className='vs_myPred'>vs</p>
                <p>{item.relatedGame[0].team2}</p>

              </div>

            <div className="box_match_mypred">
                <div className="mySelection">

                  <div className="flag_mySelection_mypred">
                    <img className='imgSelected' src={paisesJson[item.prediction].img} alt="bandera team 1" />   {/* bandera equipo select */}
                    <p>My choice</p>
                  </div>
  
                  <div className="flag_result_mypred">  
                    <img src={paisesJson[item.relatedGame[0].result].img} alt="bandera team 1" />  {/* bandera resultado */}
                    <p>Result</p>
                  </div>
  
                </div>
            </div>

            {
              (item.relatedGame[0].result === "") ? 
    
                <div className="result_mypred ">
                  <span className="loader"></span>
                </div>

              : item.relatedGame[0].result == item.prediction ?

                <div className="result_mypred resut_win">
                  <p className='winResult'>WIN</p>
                </div>

              :

              <div className="result_mypred resutl_lose">
                <p className='loseWin'>LOSE</p>
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

export default MyPredictions