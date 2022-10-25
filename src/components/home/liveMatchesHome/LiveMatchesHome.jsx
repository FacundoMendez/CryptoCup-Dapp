import React, {Suspense, useState , useEffect} from 'react'
import api from '../../../api'
import Spinner from '../../config/spinner/Spinner'
import paisesJson from '../../config/paises2.json'

const LiveMatchesHome = () => {

    const [matchActive, setMatchActive] = useState(false)
    const [matchsLive,setMatchsLive]=useState([])

    useEffect(() => {
        getLiveMatchs()
       },[]);
    
    const getLiveMatchs = async () => {
        const res = await api.get('/matches/getLiveMatches')
        setMatchsLive(res.data)
        verifyLiveMatchs(res.data) 
    }
   
   
    const verifyLiveMatchs = (array) => {
        console.log(array);
        (array.length>0) ? setMatchActive(true) : setMatchActive(false) 
    }
   
  return (
    <Suspense fallback={<Spinner/>}>
        <div className="liveNav" >
            { matchActive ?                         /* PARTIDOS EN VIVO */
                <div className="liveBox ">
                    <div className="text_live">
                        <p>Live Now</p>
                        <div className="activeLive"></div>
                    </div>
                    {
                        matchsLive.map((item , index) => {
                           return <div key={index} className="match_live">
                            <div className="team1_live">
                                <div className="flag_team1_live">
                                    <img className='flag_live_img' src={paisesJson[item.team1].img} alt="flag-Team1" />
                                </div>
                            </div>
                            <div className="boxResut_live">
                         {/*        <div className="result_team1_live">{item.scoreTeam1}</div> */}
                                <p>-</p>
             {/*                    <div className="result_team2_live">{item.scoreTeam2}</div> */}
                            </div>
                            <div className="team2_live">
                                <div className="flag_team2_live">
                                    <img className='flag_live_img' src={paisesJson[item.team2].img} alt="flag-Team1" />
                                </div>
                            </div>
                        </div>
                        })
                    }
                </div>
            :                        /* PARTIDOS EN VIVO */
                null
            }
        </div>
    </Suspense>
  )
}

export default LiveMatchesHome