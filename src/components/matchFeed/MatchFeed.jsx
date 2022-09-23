import React,{Suspense, lazy} from 'react'
import "./matchFeed.css"
import Spinner from '../config/spinner/Spinner'
const Matchs = lazy(() => import ("./matchs/Matchs"))

const MatchFeed = () => {
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

          <Matchs /> 
          
        </div>  
      </div>
    </Suspense>
  )
}

export default MatchFeed