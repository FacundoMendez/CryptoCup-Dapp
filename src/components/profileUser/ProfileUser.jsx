import React, { Suspense, useEffect , useState , useContext } from 'react'
import "./profileUser.css"
import Spinner from "../config/spinner/Spinner"
import paisesJson from "../config/paises2.json"
import ContextConnected from '../config/context/ConnectedContext'
import profileTicketsMovement from './profileTicketsMovement'
import ticketBasicImg from "../nav_inventario/src/ticketBasic.png"
import ticketBoostImg from "../nav_inventario/src/ticketBoost.png"
import api from '../../api'



const ProfileUser = () => {
  
  const Connected = useContext(ContextConnected)

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
     {
      Connected.userLogginActive ? 
        <div className="profileUser">

          <div className="nav_profileUser">
            <img src={paisesJson[Connected.userData.flag].img} alt="Flag user" />
            <div className="data_user_name">
              <h2>{Connected.userData.username}</h2>
              <p>{Connected.userData.address}</p>
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


      :
      window.location.href = "/"
    }
      
    </Suspense>
  )
}

export default ProfileUser