import React , {useState , useContext} from 'react'
import "./challengeLadder.css"
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'
import NavChallenge from './navChallenge/NavChallenge'
import TableChallenge from './tableChalllenge/TableChallenge'


const ChallengeLadder = () => {

  const [publicRooms , setPublicRooms] = useState(true)
  const [myRooms , setMyRooms] = useState(false)
  const [history , setHistory] = useState(false)
  const Connected = useContext(ContextConnected)


  return (
        <div className="friendsLadder"> 
            <NavChallenge 
                ladder="Challenge Room"
                setMyRooms={setMyRooms}
                setPublicRooms={setPublicRooms}
                setHistory={setHistory}
              />

            <div className="container_friendsLadder">
              <div className="blur_boost"></div>
                {
                  publicRooms ? 
                  <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }

                {
                  myRooms ? 
            
                    <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }
                
                {
                  history ? 
             
                    <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }
              </div>
          </div>
  )
}

export default ChallengeLadder