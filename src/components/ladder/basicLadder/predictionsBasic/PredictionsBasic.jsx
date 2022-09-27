import React, {useState, useEffect , useContext} from 'react'
import "./predictionsBasic.css"
import paisesJson from "../../../config/paises2.json"
import api from '../../../../api'
import ContextConnected from '../../../config/context/ConnectedContext'
import PopupPrediction from '../../../config/popupsPredictions/PopupPrediction'


const Predictions = ({id,timer,nameTeam1,nameTeam2,resultTeam1,resultTeam2,round}) => {

 const Connected = useContext(ContextConnected)
  const [activePrediciton, setActivePrediction]= useState()
  const [liveNowPrediction, setLiveNowPrediction]= useState(false)
  const [predictionChoose,setPredictionChoose] = useState()
 

  useEffect(() => {
    if (predictionActive){
      setColorButton("gray")
    }
  },[])

  const makePrediction = async () => {
    const res = await api.post(`/predictions/placeFriendlyBet/${id}`, {
      address: Connected.account[0] ,
      prediction: predictionChoose,
      signature: Connected.signature
    })  
    if (res.data === "Prediction Succesfully Created") {
      //Que aparezca con color de que se hizo correctamente
      Connected.setConfirmedPrediction(true)
    }
    
    if (res.data ==="prediction already made") {
      //que aparezca con color erroneo
      Connected.setConfirmedPrediction(false)
    }
  }

  const makePredd = async () => {
    console.log("Ay me apretaste")
  }

  const [predictionActive , setPredictionActive] = useState(false)
  const [namePredict_button , setNamePredict_button] = useState("Predict")
  const [colorTeam1, setColorTeam1] = useState()
  const [colorEmpate, setColorEmpate] = useState()
  const [colorTeam2 , setColorTeam2] = useState()
  const [colorTeam1_text, setColorTeam1_text] = useState()
  const [colorEmpate_text, setColorEmpate_text] = useState()
  const [colorTeam2_text , setColorTeam2_text] = useState()
  
  const [colorButton, setColorButton] = useState("rgba(168, 255, 222, 0.975)")

  const colorSetTeam1 = ( ) => {
      setColorTeam1('rgba(168, 255, 222, 0.925)')
      setColorEmpate('#32059bb6')
      setColorTeam2('#32059bb6')
      setColorTeam1_text("black")
      setColorEmpate_text("white")
      setColorTeam2_text("white")
  }
  const colorSetEmpate = ( ) => {
    setColorTeam1('#32059bb6')
    setColorEmpate('rgba(168, 255, 222, 0.925)')
    setColorTeam2('#32059bb6')
    setColorTeam1_text("white")
    setColorEmpate_text("black")
    setColorTeam2_text("white")
  }
  const colorSetTeam2 = ( ) => {
    setColorTeam1('#32059bb6')
    setColorEmpate('#32059bb6')
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
              setPredictionChoose(document.getElementById(`left_${nameTeam1}`).innerText)
            }
            }}>
            <p id={"left_" + nameTeam1}>{nameTeam1}</p>
          </div>
          <div className="center_pred" id="empate_basic" style={{backgroundColor : colorEmpate , color: colorEmpate_text }} onClick={() => {
            if (!predictionActive){
              setActivePrediction(2)
              colorSetEmpate()
              setPredictionChoose("Tie")
            }
            }}>
            <p id='tie_prediction' className='tie_pred'>Tie</p>
          </div>
          <div className="right_pred" id='team2_win_basic' style={{backgroundColor : colorTeam2 , color: colorTeam2_text }} onClick={() => {
            if (!predictionActive){
              setActivePrediction(3)
              colorSetTeam2()
              setPredictionChoose(document.getElementById(`right_${nameTeam2}`).innerText)
            }
            }}>
            <p id={'right_' + nameTeam2}>{nameTeam2}</p>
          </div>
        </div>

        { /* si no hay prediccion hecha muestra el boton en gris */
          activePrediciton === undefined ?
            <button className='predict_button predict_button_disable' style={{backgroundColor : "rgba(223, 223, 223, 0.671)" }}>{namePredict_button}</button>
          :
           /* si hay prediccion muestra el boton activo */
          <button className='predict_button predict_button_active' style={{backgroundColor : colorButton ,color: "rgba(10, 0, 37, 0.842) " , fontFamily:"qatarHeavy"}} disabled={predictionActive === true} onClick={() => {
            setPredictionActive(true)
            makePrediction()
            if (activePrediciton === undefined){
              console.log("no prediction")      
             
            }else{
              setColorButton("rgba(178, 130, 255, 0.671)") 
              setNamePredict_button("Confirmed")   
            }
          }}>{namePredict_button}</button>
        }



        {/* devuelve el estado de la prediccion ( 1 2 3 ) */}
        {/*  {activePrediciton === 1 ? console.log(activePrediciton): null} */} {/* team 1 win */}
        {/* {activePrediciton === 2 ? console.log(activePrediciton): null} */} {/* empate */}
        {/* {activePrediciton === 3 ? console.log(activePrediciton): null} */} {/* team 2 win */}

    </div>
  )
}

export default Predictions