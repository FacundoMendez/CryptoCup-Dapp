import React, {lazy, Suspense } from 'react'
import Spinner from '../../config/spinner/Spinner'
import paisesJson2 from "../../config/paises2.json"

const TimerMatch = lazy(() => import ('../timerMatch/TimerMatch'))

const Matchs = ({timer,nameTeam1,nameTeam2,resultTeam1,resultTeam2,round}) => {

    
  return (
    <Suspense fallback={<Spinner/>} >
        <div className='table_games' >
            <div className='table_campos game_match'>{round}</div>
            <div className='table_campos team1_box'>
                <div className="team1_flag">  
                    <img src={paisesJson2[nameTeam1].img} alt="bandera team1" />  
                </div>                
            </div>
            <div className="result_team1 table_campos">
                <p>{resultTeam1}</p>
            </div>
            <div className="result_team2 table_campos">
                <p>{resultTeam2}</p>
            </div>
            <div className='table_campos team2_box'>
                <div className="team2_flag">
                    <img src={paisesJson2[nameTeam2].img} alt="bandera team1" />  
                </div>  
            </div>
            <div className='table_campos timer_match'>
                
                <TimerMatch timer={timer}  />
            </div>
        </div>
    </Suspense>
  )
}

export default Matchs