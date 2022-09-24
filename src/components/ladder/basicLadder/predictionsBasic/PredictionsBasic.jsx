import React, {useState, useEffect} from 'react'
import "./predictionsBasic.css"
import paisesJson from "../../../config/paises.json"
import predictionsBasic_funcional from './predictionsBasic_funcional'
import errorNoPrediction from './errorNoPrediction/errorNoPrediction'

const Predictions = () => {

  const [activePrediciton, setActivePrediction]= useState()
  const [liveNowPrediction, setLiveNowPrediction]= useState(false)
  useEffect(() => {
    predictionsBasic_funcional()
  },[])


  return (
    <div className="prediciton">
      {
        liveNowPrediction ?                          /* si esta en vivo */
        <div className="livePrediction">
          <p>Live Now</p>
          <div className="active_live_prediction"></div>
        </div>
        :                                           /* si no esta en vivo (marca el tiempo) */
        <div className="time_prediction">
          <div className="hours_predictions">
            <p>0</p>
            <p className='tt_pred'>Hours</p>
          </div>
          <div className="mins_predictions">
            <p>0</p>
            <p className='tt_pred'>Mins</p>
          </div>
        </div>
        
        }
        

        <div className="match_result_prediction">
            <img src={paisesJson[0].img} alt="bandera team 1" />
            
            <p className='resut_team1_prediction'> 0 </p>
            <p className='vs_prediction'> - VS -</p>
            <p className='resut_team2_prediction'> 0 </p>

            <img src={paisesJson[3].img} alt="bandera team 2" />
        </div>

        <div className="box_select_prediction">
          <div className="left_pred" id='team1_win_basic' onClick={() => {setActivePrediction(1)}}>
            <p>1</p>
          </div>
          <div className="center_pred" id="empate_basic" onClick={() => setActivePrediction(2)}>
            <p>X</p>
          </div>
          <div className="right_pred" id='team2_win_basic' onClick={() => setActivePrediction(3)}>
            <p>2</p>
          </div>
        </div>
        <button className='predict_button'onClick={() => {
          if (activePrediciton === undefined){
            console.log("no prediction")
            errorNoPrediction()
          }
        }}>Predict</button>


        {/* devuelve el estado de la prediccion ( 1 2 3 ) */}
        {activePrediciton === 1 ? console.log(activePrediciton): null} {/* team 1 win */}
        {activePrediciton === 2 ? console.log(activePrediciton): null} {/* empate */}
        {activePrediciton === 3 ? console.log(activePrediciton): null} {/* team 2 win */}

    </div>
  )
}

export default Predictions