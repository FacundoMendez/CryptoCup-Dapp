import React,{Suspense, lazy, useEffect , useState} from 'react'
import "./matchFeed.css"
import Spinner from '../config/spinner/Spinner'
import api from '../../api'
const Matchs = lazy(() => import ("./matchs/Matchs"))


const MatchFeed = () => {

  
  const [matchs,setMatchs]=useState([])
  const [loading ,setLoading]=useState(true)

  useEffect(() => {
   getMatchs()
  },[]);

    //Get all matches from DB
    const getMatchs=async()=>{
      const res=await api.get('/matchs/getMatches')
      const matchsArray=res.data
      console.log(res.data);
      setMatchs(matchsArray)
      setLoading(false) 
  }

  return (
    <Suspense fallback={<Spinner/>}>
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
          <div>
            {loading ? <Spinner/> : null}
          </div>
          <div className="table_container">
            <Suspense fallback={<Spinner/>}>
              {
                  matchs.map((item,index)=>{
                    return <Matchs key={index}
                      timer={item.startDate}
                      round={item.round}
                      nameTeam1={item.team1}
                      nameTeam2={item.team2}
                      resultTeam1={item.scoreTeam1}
                      resultTeam2={item.scoreTeam2}
                    />  
                  })
                }
              </Suspense>
          </div>
        </div>  
      </div>
    </Suspense>
  )
}

export default MatchFeed