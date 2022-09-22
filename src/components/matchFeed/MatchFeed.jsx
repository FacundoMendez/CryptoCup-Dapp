import React from 'react'
import "./matchFeed.css"
import paisesJson from "../nav/login/selectFlags/paises.json"
import TimerMatch from './timerMatch/TimerMatch'

const MatchFeed = () => {

  let timer = 60

  return (
    <div className="matchFeed">
      <div className="nav_matchFeed">
        <h2>Match Feed</h2>
      </div>

      <div className="table">
        <div className="table_cabecera">
          <ul>
            <li className='game_cabecera'>GAME</li>
            <li>TEAM 1</li>
            <li className='vs_cabecera'>VS</li>
            <li>TEAM 2</li>
            <li className='status_cabecera'>STATUS</li>
          </ul>
        </div>
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
      </div>  
    </div>
  )
}

export default MatchFeed