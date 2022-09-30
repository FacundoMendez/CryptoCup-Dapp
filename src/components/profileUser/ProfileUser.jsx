import React, { Suspense, useEffect , useState /* useContext */ } from 'react'
import "./profileUser.css"
import Spinner from "../config/spinner/Spinner"
import paisesJson from "../config/paises2.json"
/* import ContextConnected from '../config/context/ConnectedContext' */
import profileTicketsMovement from './profileTicketsMovement'
import ticketBasicImg from "../nav_inventario/src/ticketBasic.png"
import ticketBoostImg from "../nav_inventario/src/ticketBoost.png"



const ProfileUser = () => {
  
/*   const Connected = useContext(ContextConnected) */

  useEffect(() => {
    profileTicketsMovement()
  },[])

  const [ticketBasic, setTicketBasic] = useState(true)
  const [ticketBoost, setTicketBoost] = useState()

  
  const [colorBa, setColorBa] = useState("#bebdff")
  const [colorBo, setColorBo] = useState("#white")


  const colorBasic= ( ) => {
    setColorBa('#bebdff')
    setColorBo('white')
  }
  const colorBoost= ( ) => {
    setColorBa('white')
    setColorBo('#bebdff')
  }


  return (

    <Suspense fallback={<Spinner /> }>    
    
      <div className="profileUser">

        <div className="nav_profileUser">
          <img src={paisesJson["Argentina"].img} alt="Flag user" />
          <div className="data_user_name">
            <h2>Name User</h2>
            <p>0xcD914730f947186d58b64b999Cd7c9B6f90c0EA2</p>
          </div>
        </div>

        <div className=" profile_cabecera">
          <div className="box_cabecera">
            <p style={{color : colorBa}}  onClick={() => {
                setTicketBasic(true)
                setTicketBoost(false)
                colorBasic()
              }}>Tickets Basic
            </p>

            <p style={{color : colorBo}}  onClick={() => {
                setTicketBoost(true)
                setTicketBasic(false)  
                colorBoost()
              }}>Tickets Boost
            </p>

          </div>
        </div>

        <div className="container_profileUser">
          
          <div className="blur_profileUser"></div>

          {ticketBasic ? 

            <div className="container_tickets_profile">
              <div className="box_tickets_profileUser ">
                  <div className="ticket_box">
                      <img className='ticketImg' src={ticketBasicImg} alt="ticketBasic" />
                      <p className='puntuacion_ticket'>#0</p>
                  </div>
              </div>
            </div>
            :
            <div className="container_tickets_profile">
            <div className="box_tickets_profileUser ">
                <div className="ticket_box">
                  <img className='ticketImg' src={ticketBoostImg} alt="ticketBoost" />
                  <p className='puntuacion_ticket'>#0</p>
                </div>
            </div>
          </div>
          }

        </div>

      </div>
    </Suspense>
  )
}

export default ProfileUser