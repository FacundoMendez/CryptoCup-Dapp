import React from 'react'
import "./myPredictions.css"
import paisesJson from "../../../config/paises2.json"

const MyPredictions = () => {
  return (
    <div className="container_myPrediction">
        <div className="table_cabecera_myPrediction">
          <ul>
            <li className='game_cabecera_myPrediction'>DATE</li>
            <li>MY SELECTION</li>
            <li>MATCH</li>
            <li className='status_cabecera_myPrediction'>RESULT</li>
          </ul>
        </div>

        <div className="myPrediction">

          <div className="date_match">
            <p> 00/00/2022 </p>
          </div>

        <div className="box_match_mypred">
          <div className="mySelection">
            <div className="flag_mySelection_mypred">
              <img src={paisesJson["Argentina"].img} alt="bandera team 1" />
            </div>

            <div className="flag_result_mypred">
            <img src={paisesJson["Alemania"].img} alt="bandera team 1" />
            </div>
          </div>
        </div>
         


          <div className="result_mypred">
            <p>SUCCESS</p>
          </div>

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
  )
}

export default MyPredictions