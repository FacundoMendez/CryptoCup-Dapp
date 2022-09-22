import React, {useState} from 'react'
import arg from "../../config/flags/arg.png"
import bra from "../../config/flags/bra.png"


const LiveMatchesHome = () => {

    const [matchActive, setMatchActive] = useState(true)


  return (
    <div className="liveNav" >

            { matchActive ?
                <div className="liveBox ">
                    <div className="text_live">
                        <p>Live Now</p>
                        <div className="activeLive"></div>
                    </div>
                    <div className="match_live">
                        <div className="team1_live">
                            <div className="flag_team1_live">
                                <img className='flag_live_img' src={arg} alt="flag-Team1" />
                            </div>
                        </div>

                        <div className="boxResut_live">
                            <div className="result_team1_live">0</div>
                            <p>-</p>
                            <div className="result_team2_live">0</div>
                        </div>

                        <div className="team2_live">
                            <div className="flag_team2_live">
                                <img className='flag_live_img' src={bra} alt="flag-Team1" />
                            </div>
                        </div>
                    </div>
 
                </div>
            : 
                null
            }
            
    </div>
  )
}

export default LiveMatchesHome