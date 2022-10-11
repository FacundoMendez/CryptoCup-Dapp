import React , {useState} from 'react'
import "./myPredictions.css"
import paisesJson from "../../../config/paises2.json"

const MyPredictions = () => {
  
  const [predictionSuccess , setPredictionSuccess] = useState(true)  /* si esta en true, acerto , sino perdio */

  
  
  
  return (
    <div className="container_myPrediction">

        <div className="box_myPrediction">

          <div className={predictionSuccess ?  "myPrediction predictionSuccess" : "myPrediction predictionLose"}>
            <div className="date_match">
              <p> 00/00/2022 </p>
            </div>
          <div className="box_match_mypred">

              <div className="mySelection">

                <div className="flag_mySelection_mypred">
                  <p>My choice</p>
                  <img className='imgSelected' src={paisesJson["Argentina"].img} alt="bandera team 1" />   {/* bandera equipo select */}
                </div>

                <div className="flag_result_mypred">  
                  <p>Result</p>
                  <img src={paisesJson["Alemania"].img} alt="bandera team 1" />  {/* bandera resultado */}
                </div>

              </div>

          </div>
          {
            predictionSuccess ? 

            <div className="result_mypred resut_win">
              <p>WIN</p>
            </div>
            :
            <div className="result_mypred resutl_lose">
            <p>LOSE</p>
          </div>

          }
        </div>

{/* 

          <div className="myPrediction"></div>
          <div className="myPrediction"></div>
          <div className="myPrediction"></div>
          <div className="myPrediction"></div>
          <div className="myPrediction"></div>
          <div className="myPrediction"></div>
          <div className="myPrediction"></div> */}
      </div>
    </div>
  )
}

export default MyPredictions