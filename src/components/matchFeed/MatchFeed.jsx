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
  const [filterBusqueda , setFilterBusqueda] = useState()

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

      /* paginacion */

/*       const [number, setNumber] = useState(1); 
      const [postPerPage] = useState(8);
      const lastPost = number * postPerPage;
      const firstPost = lastPost - postPerPage;
      const currentPost = matchs.slice(firstPost, lastPost);
      const pageNumber = [];

      for (let i = 1; i <= Math.ceil(matchs.length / postPerPage); i++) {
        pageNumber.push(i);
      }

 */

      /* ------------ */


  return (
    <Suspense fallback={<Spinner/>}>
      
        <div className="matchFeed">
          <div className="nav_matchFeed">
            <h2>Match Feed</h2>
            
          </div>

        <div className="container_box_table">

            <FilterMatch 
                getMatchs = {getMatchs}
                setMatchs = {setMatchs} 
                filterBusqueda={filterBusqueda}  
                setFilterBusqueda={setFilterBusqueda}
              />

            <div className="table">
        <div className="popup_create_rom"></div>

              <div className="table_cabecera">
                <ul>
                  <li className='game_cabecera'>GAME</li>
                  <li>TEAM </li>
                  <li className='vs_cabecera'>VS</li>
                  <li>TEAM </li>
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
{/*                   {!loading ?  
                    <Paginacion 
                      setNumber={setNumber}
                      number= {number}
                      pageNumber={ pageNumber}
                    />
                  : 
                  null} */}
       
                  </Suspense>
              </div>
            </div>  
          </div>
        </div>
    </Suspense>
  )
}

export default MatchFeed