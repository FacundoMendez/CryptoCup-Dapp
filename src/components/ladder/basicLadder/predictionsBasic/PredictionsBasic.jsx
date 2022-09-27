import React, {useState, useEffect , useContext} from 'react'
import "./predictionsBasic.css"
import paisesJson from "../../../config/paises2.json"
import api from '../../../../api'

const Predictions = ({id,timer,nameTeam1,nameTeam2,resultTeam1,resultTeam2,round}) => {

 /*  const Connected = useContext(ContextConnected) */

  const [activePrediciton, setActivePrediction]= useState()
  const [liveNowPrediction, setLiveNowPrediction]= useState(false)

  useEffect(() => {
    if (predictionActive){
      setColorButton("gray")
    }
  },[])

  const makePrediction = async (pred) => {
    /* const res = await api.post(`/predictions/placeFriendlyBet/${id}`, {
      address: Connected.account[0] ,
      prediction: pred
    })  */
    console.log("ANDANDOO");
    console.log(" es " +pred);
  /*   console.log(Connected.account[0]); */
  }

  const [predictionActive , setPredictionActive] = useState(false)
  const [namePredict_button , setNamePredict_button] = useState("Predict")
  const [colorTeam1, setColorTeam1] = useState()
  const [colorEmpate, setColorEmpate] = useState()
  const [colorTeam2 , setColorTeam2] = useState()
  const [colorTeam1_text, setColorTeam1_text] = useState()
  const [colorEmpate_text, setColorEmpate_text] = useState()
  const [colorTeam2_text , setColorTeam2_text] = useState()
  
  const [colorButton, setColorButton] = useState("rgba(178, 130, 255, 0.671)")

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
            

            <p className='vs_prediction'> VS </p>


            <img src={paisesJson[nameTeam2].img} alt="bandera team 2" />
        </div>

        <div className="box_select_prediction">
          <div className="left_pred" id='team1_win_basic' style={{backgroundColor : colorTeam1, color: colorTeam1_text }} onClick={() => {
            if (!predictionActive){
              setActivePrediction(1)
              colorSetTeam1()
              makePrediction(document.getElementById(`left_${nameTeam1}`).innerText)
            }
            }}>
            <p id={"left_" + nameTeam1}>{nameTeam1}</p>
          </div>
          <div className="center_pred" id="empate_basic" style={{backgroundColor : colorEmpate , color: colorEmpate_text }} onClick={() => {
            if (!predictionActive){
              setActivePrediction(2)
              colorSetEmpate()
            }
            }}>
            <p id='tie_prediction' className='tie_pred'>Tie</p>
          </div>
          <div className="right_pred" id='team2_win_basic' style={{backgroundColor : colorTeam2 , color: colorTeam2_text }} onClick={() => {
            if (!predictionActive){
              setActivePrediction(3)
              colorSetTeam2()
            }
            }}>
            <p id='right_prediction'>{nameTeam2}</p>
          </div>
        </div>

        { /* si no hay prediccion hecha muestra el boton en gris */
          activePrediciton === undefined ?
            <button className='predict_button predict_button_disable' style={{backgroundColor : "gray"}}>{namePredict_button}</button>
          :
           /* si hay prediccion muestra el boton activo */
          <button className='predict_button predict_button_active' style={{backgroundColor : colorButton}} disabled={predictionActive === true} onClick={() => {
            setPredictionActive(true)
            if (activePrediciton === undefined){
              console.log("no prediction")      
             
            }else{
              setColorButton("rgba(2, 2, 10, 0.199)") 
              setNamePredict_button("Confirmed")   
            }
          }}>{namePredict_button}</button>
        }



        {/* devuelve el estado de la prediccion ( 1 2 3 ) */}
        {activePrediciton === 1 ? console.log(activePrediciton): null} {/* team 1 win */}
        {activePrediciton === 2 ? console.log(activePrediciton): null} {/* empate */}
        {activePrediciton === 3 ? console.log(activePrediciton): null} {/* team 2 win */}

    </div>
  )
}

export default Predictions