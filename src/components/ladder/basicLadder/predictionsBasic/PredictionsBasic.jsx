import React from 'react'
import "./predictionsBasic.css"
import paisesJson from "../../../config/paises.json"

const Predictions = () => {
  return (
    <div className="prediciton">
        <div className="liveProduction">
          <p>Live Now</p>
          <div className="active_live_prediction"></div>
        </div>
        <div className="match_result_prediction">
            <img src={paisesJson[0].img} alt="bandera team 1" />
            
            <p className='resut_team1_prediction'> 0 </p>
            <p className='vs_prediction'> - VS -</p>
            <p className='resut_team2_prediction'> 0 </p>

            <img src={paisesJson[3].img} alt="bandera team 2" />
        </div>

        <div className="box_select_prediction">
          <div className="left_pred" id='team1_win_basic'>
            <p>1</p>
          </div>
          <div className="center_pred" id="empate_basic">
            <p>X</p>
          </div>
          <div className="right_pred" id='team2_win_basic'>
            <p>2</p>
          </div>
        </div>
        <button className='predict_button'>Predict</button>
    </div>
  )
}

export default Predictions