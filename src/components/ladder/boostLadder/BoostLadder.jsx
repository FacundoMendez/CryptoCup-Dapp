import React , {useState , Suspense} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./boostLadder.css"
import NavLadder from '../componentsLadders/navLadder/NavLadder'
/* import MyPredictions from '../componentsLadders/myPrediction/MyPredictions'
import Ranking from '../componentsLadders/ranking/Ranking' */
import candado from "../../config/src/candado.png"

const BoostLadder = () => {

  const [myRecord , setMyRecord] = useState(false)
  const [Matches , setMatches] = useState(true)
  const [ranking , setRanking] = useState(false)


  return (
    <Suspense fallback={<Spinner/>}>
      <div className="boostLadder">
        <NavLadder 
            ladder="Boost Ladder"
            setMyRecord={setMyRecord}
            setMatches={setMatches}
            setRanking={setRanking}
        />
        <div className="container_boostLadder">


        <div className="blur_boost"></div>


            {
              Matches ? 
         /*        <Suspense fallback={<Spinner/>}>
                  <Predictions/>
               </Suspense> */
               <img className='candado' src={candado} alt="candado" />
              :
              null
            }

            {
              myRecord ? 
       /*          <Suspense fallback={<Spinner/>}>
                  <MyPredictions/>
                </Suspense> */
                <img className='candado' src={candado} alt="candado" />
              :
              null
            }
            
            {
              ranking ? 
           /*      <Suspense fallback={<Spinner/>}>
                  <Ranking/>
                </Suspense> */
                <img className='candado' src={candado} alt="candado" />
              :
              null
            }
          </div>
      </div>
  </Suspense>
  )
}

export default BoostLadder