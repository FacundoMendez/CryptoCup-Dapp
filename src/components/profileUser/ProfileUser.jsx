import React, { Suspense, useEffect , useState , useContext } from 'react'
import "./profileUser.css"
import Spinner from "../config/spinner/Spinner"
import paisesJson from "../config/paises2.json"
import ContextConnected from '../config/context/ConnectedContext'
import profileTicketsMovement from './profileTicketsMovement'
import ticketBasicImg from "../nav_inventario/src/ticketBasic.png"
import ticketBoostImg from "../nav_inventario/src/ticketBoost.png"
import logoMTM from "./src/metamask.png"
import api from '../../api'
import { ethers } from 'ethers'


const ProfileUser = () => {
  
  const Connected = useContext(ContextConnected)
  const [userAddress,setUserAddress] = useState(undefined)

  useEffect(() => {
    profileTicketsMovement()
  }, [Connected.userData])



  const [ticketBasic, setTicketBasic] = useState(true)
  const [ticketBoost, setTicketBoost] = useState()
  const [arrayTicketBasic, setArrayTicketBasic] = useState([])
  const [arrayTicketBoost, setArrayTicketBoost] = useState([])


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

  const connectAddress = async () => {
    try {
      if (window.ethereum) {
        const newProvider = await new ethers.providers.Web3Provider(window.ethereum);
        const { chainId } = await newProvider.getNetwork();
        const newAccount = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const newSigner = await newProvider.getSigner();
        if (chainId === 56) {
          Connected.setProvider(newProvider)
          Connected.setAccount(newAccount)
          Connected.setSigner(newSigner)
          console.log(newAccount[0]);
          try {
            const updateAddress = await api('/user/connectAddress' , {
              method:"PUT",
              headers:{
                'Authorization' : 'Bearer ' + Connected.userToken
              },
              data:{
                address: newAccount[0]
              }
            }) 
            Connected.setUserData(updateAddress.data)
            alert("address agregada")
          } catch (error) {
            alert(error.response.data)
          }
         
        } else {
          alert("error . Chain must be BSC ")
        }  
    }
    } catch (error) {
      console.log(error);
    }
   
   
  }

  console.log(Connected.basicTicketsInv)
  console.log(Connected.boostTicketsInv)
  return (

    <Suspense fallback={<Spinner /> }>    
     {
      Connected.userLogginActive ? 
        <div className="profileUser">

          <div className="nav_profileUser">
            <img src={paisesJson[Connected.userData.flag].img} alt="Flag user" />
            <div className="data_user_name">
              <h2>{Connected.userData.username}</h2>
              {
                Connected.userData.address ? 
                  <p>{Connected.userData.address}</p>
                  :
                  <button className='button_connectAddress' onClick={connectAddress}> Connect your address </button>
              }
             
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
                {
                  Connected.basicTicketsInv.length > 0 ?
                  Connected.basicTicketsInv.map((item, index)=> {
                        return <div className="box_tickets_profileUser ">
                          <div className="ticket_box">
                              <img className='ticketImg' src={ticketBasicImg} alt="ticketBasic" />
                              <p className='puntuacion_ticket'>#0</p>
                          </div>
                        </div>
                    })
                  : 
                  
                  Connected.basicTicketsInv.length <= 0  && ticketBasic ? <p className='noPredictions'> NO TICKETS BASIC </p> : null 

                  
                }
                 
                
              </div>
              :
              <div className="container_tickets_profile">
                {
                  Connected.basicTicketsInv.length > 0 ?
                  Connected.basicTicketsInv.map((item, index)=> {
                          return <div className="box_tickets_profileUser ">
                            <div className="ticket_box">
                              <img className='ticketImg' src={ticketBoostImg} alt="ticketBoost" />
                              <p className='puntuacion_ticket'>#0</p>
                            </div>
                          </div>
                      })
                : 
                Connected.basicTicketsInv.length <= 0  && !ticketBasic ? <p className='noPredictions'> NO TICKETS BOOST </p> : null 
                }
              
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