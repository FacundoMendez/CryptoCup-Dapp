import React , {useState , useContext} from 'react'
import "./challengeLadder.css"
import candado from "../../config/src/candado.png"
import ContextConnected from '../../config/context/ConnectedContext'
import NavChallenge from './navChallenge/NavChallenge'
import TableChallenge from './tableChalllenge/TableChallenge'
import MyRoomsData from './myRooms/MyRoomsData'



const ChallengeLadder = () => {

  const [publicRooms , setPublicRooms] = useState(true)
  const [myRooms , setMyRooms] = useState(false)

  const Connected = useContext(ContextConnected)


  return (

    <>
    {
      Connected.userLogginActive ?  

        <div className="friendsLadder"> 
            <NavChallenge 
                ladder="Challenge Room"
                setMyRooms={setMyRooms}
                setPublicRooms={setPublicRooms}

              />

            <div className="container_friendsLadder">
              <div className="blur_boost"></div>
                {
                  publicRooms ? 
                    <TableChallenge/>
                  :
                  null
                }

                {
                  myRooms ? 
            
                    <MyRoomsData/>
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

export default ChallengeLadder