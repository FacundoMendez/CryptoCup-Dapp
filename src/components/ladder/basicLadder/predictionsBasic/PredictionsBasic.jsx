import React, {useState, useEffect} from 'react'
import "./predictionsBasic.css"
import predictionsBasic_funcional from './predictionsBasic_funcional'
import errorNoPrediction from './errorNoPrediction/errorNoPrediction'
import paisesJson from "../../../config/paises2.json"

const Predictions = ({timer,nameTeam1,nameTeam2,resultTeam1,resultTeam2,round}) => {

  const [activePrediciton, setActivePrediction]= useState()
  const [liveNowPrediction, setLiveNowPrediction]= useState(false)

/*   useEffect(() => {
    predictionsBasic_funcional()
  },[]) */

  const [predictionActive , setPredictionActive] = useState(false)

  const [colorTeam1, setColorTeam1] = useState()
  const [colorEmpate, setColorEmpate] = useState()
  const [colorTeam2 , setColorTeam2] = useState()
  const [colorTeam1_text, setColorTeam1_text] = useState()
  const [colorEmpate_text, setColorEmpate_text] = useState()
  const [colorTeam2_text , setColorTeam2_text] = useState()

  const colorSetTeam1 = ( ) => {
      setColorTeam1('rgba(168, 255, 222, 0.925)')
      setColorEmpate('rgba(177, 129, 253, 0.199)')
      setColorTeam2('rgba(177, 129, 253, 0.199)')
      setColorTeam1_text("black")
      setColorEmpate_text("white")
      setColorTeam2_text("white")
  }
  const colorSetEmpate = ( ) => {
    setColorTeam1('rgba(177, 129, 253, 0.199)')
    setColorEmpate('rgba(168, 255, 222, 0.925)')
    setColorTeam2('rgba(177, 129, 253, 0.199)')
    setColorTeam1_text("white")
    setColorEmpate_text("black")
    setColorTeam2_text("white")
  }
  const colorSetTeam2 = ( ) => {
    setColorTeam1('rgba(177, 129, 253, 0.199)')
    setColorEmpate('rgba(177, 129, 253, 0.199)')
    setColorTeam2('rgba(168, 255, 222, 0.925)')
    setColorTeam1_text("white")
    setColorEmpate_text("white")
    setColorTeam2_text("black")
  }

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
            <img src={paisesJson[nameTeam1].img} alt="bandera team 1" />
            
{/*             <p className='resut_team1_prediction'> 0 </p> */}
            <p className='vs_prediction'> - VS -</p>
{/*             <p className='resut_team2_prediction'> 0 </p> */}

            <img src={paisesJson[nameTeam2].img} alt="bandera team 2" />
        </div>

        <div className="box_select_prediction">
          <div className="left_pred" id='team1_win_basic' style={{backgroundColor : colorTeam1, color: colorTeam1_text }} onClick={() => {
            setActivePrediction(1)
            colorSetTeam1()
            }}>
            <p>1</p>
          </div>
          <div className="center_pred" id="empate_basic" style={{backgroundColor : colorEmpate , color: colorEmpate_text }} onClick={() => {
            setActivePrediction(2)
            colorSetEmpate()
            }}>
            <p>X</p>
          </div>
          <div className="right_pred" id='team2_win_basic' style={{backgroundColor : colorTeam2 , color: colorTeam2_text }} onClick={() => {
            setActivePrediction(3)
            colorSetTeam2()
            }}>
            <p>2</p>
          </div>
        </div>
        <button className='predict_button' disabled={predictionActive === true} onClick={() => {

          setPredictionActive(true)

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