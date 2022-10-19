import React , {useState , Suspense,  useContext} from 'react'
import Spinner from '../../config/spinner/Spinner'
import "./boostLadder.css"
import NavLadder from '../componentsLadders/navLadder/NavLadder'
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'
import Preload from '../../config/preload/Preload'

const BoostLadder = () => {

  const [myRecord , setMyRecord] = useState(false)
  const [Matches , setMatches] = useState(true)
  const [ranking , setRanking] = useState(false)
  const Connected = useContext(ContextConnected)

  return (
    <>
    {
      Connected.userLogginActive ? 
          <div className="boostLadder">
            <Preload/>
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
                  <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }

                {
                  myRecord ? 
                    <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }
                
                {
                  ranking ? 
                    <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }
              </div>
          </div>
        : 
        window.location.href = "/"
      }
    </>
  )
}

export default BoostLadder