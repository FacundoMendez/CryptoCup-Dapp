import React , {useState , useContext} from 'react'
import NavLadder from "../componentsLadders/navLadder/NavLadder"
import "./friendsLadder.css"
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'

const FriendsLadder = () => {

  const [Matches , setMatches] = useState(true)
  const [myRecord , setMyRecord] = useState(false)
  const [ranking , setRanking] = useState(false)
  const Connected = useContext(ContextConnected)

  return (
    <>
    {
      Connected.userLogginActive ? 
        <div className="friendsLadder"> 
            <NavLadder 
                ladder="Challenge Room"
                setMyRecord={setMyRecord}
                setMatches={setMatches}
                setRanking={setRanking}
            />
            <div className="container_friendsLadder">
              
              <div className="blur_boost"></div>
                {
                  Matches ? 
                  /*   <Predictions/> */
                  <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }

                {
                  myRecord ? 
                    /* <MyPredictions/> */
                    <img className='candado' src={candado} alt="candado" />
                  :
                  null
                }
                
                {
                  ranking ? 
                    /* <Ranking/> */
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

export default FriendsLadder