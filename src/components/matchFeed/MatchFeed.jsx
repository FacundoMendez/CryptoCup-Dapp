import React,{Suspense, useEffect , useState , useContext} from 'react'
import "./matchFeed.css"
import Spinner from '../config/spinner/Spinner'
import api from '../../api'
import Matchs from './matchs/Matchs'
import ContextConnected from '../config/context/ConnectedContext'
import FilterMatch from './filterMatch/FilterMatch'

const MatchFeed = () => {

  const Connected = useContext(ContextConnected)
  
  const [matchs,setMatchs]=useState([])
  const [loading ,setLoading]=useState(true)

  useEffect(() => {
   getMatchs()
  },[]);

    //Get all matches from DB
    const getMatchs=async()=>{
      const res=await api.get('/matches/getMatches')
      const matchsArray=res.data
      setMatchs(matchsArray)
      setLoading(false) 
  }

  return (
    <Suspense fallback={<Spinner/>}>

        <div className="matchFeed">
          <div className="nav_matchFeed">
            <h2>Match Feed</h2>
          </div>

        <div className="container_box_table">
          <FilterMatch/>

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
                          finishDate={item.finishDate}
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
        </div>
    </Suspense>
  )
}

export default MatchFeed