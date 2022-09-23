import React, {lazy, Suspense} from 'react'
import Spinner from '../../config/spinner/Spinner'
import paisesJson from "../../config/paises.json"

const TimerMatch = lazy(() => import ('../timerMatch/TimerMatch'))

const Matchs = () => {

  let timer = 60


  return (
    <Suspense fallback={<Spinner/>} >
        <div className="table_container">
            <div className='table_games' >
            <div className='table_campos game_match'>16TH</div>

            <div className='table_campos team1_box'>
                <div className="team1_flag">  
                    <img src={paisesJson[1].img} alt="bandera team1" />
                </div>                
            </div>

            <div className="result_team1 table_campos">
                <p>0</p>
            </div>

            <div className="result_team2 table_campos">
                <p>0</p>
            </div>

            <div className='table_campos team2_box'>

                <div className="team2_flag">
                    <img src={paisesJson[0].img} alt="bandera team1" />  
                </div>  
            </div>

            <div className='table_campos timer_match'>
                <div className='startIn'>
                <p className='startIn_text'>START IN: </p> 
                </div> 
                <TimerMatch timer={timer}  />
            </div>
            </div>
        </div>
    </Suspense>
  )
}

export default Matchs