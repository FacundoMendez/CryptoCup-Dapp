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
import PopupChallenge from '../config/popupsChallenge/PopupChallenge'
import imgMetamask from "../nav/src/logoMetamask.png"

const ProfileUser = () => {
  
  const Connected = useContext(ContextConnected)
  const [userAddress,setUserAddress] = useState(undefined)

  useEffect(() => {
    profileTicketsMovement()
  }, [Connected.userData])



  const [ticketBasic, setTicketBasic] = useState(true)
  const [ticketBoost, setTicketBoost] = useState(true)
  const [arrayTicketBasic, setArrayTicketBasic] = useState([])
  const [arrayTicketBoost, setArrayTicketBoost] = useState([])

  const [successPopup , setSuccessPopup] = useState()
  const [messajePopup , setMessajePopup] = useState()


  const [colorBa, setColorBa] = useState("#bebdff")
  const [colorBo, setColorBo] = useState("#white")


  const colorBoost= ( ) => {
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
            setMessajePopup("address added")
            setSuccessPopup(true)
            setTimeout(() => {
                setMessajePopup("")
                setSuccessPopup()
            }, 6000);

          } catch (error) {

            setMessajePopup(error.response.data)
            setSuccessPopup(false)
            setTimeout(() => {
                setMessajePopup("")
                setSuccessPopup()
            }, 6000);
          }
         
        } else {
          setMessajePopup("error. Chain must be BSC ")
          setSuccessPopup(false)
          setTimeout(() => {
              setMessajePopup("")
              setSuccessPopup()
          }, 6000);
        }  
    }
    } catch (error) {
      console.log(error);
    }
   
   
  }

  return (

    <>

    
    { successPopup === true? 
        <PopupChallenge 
            salaCreada={successPopup} 
            messajePopup={messajePopup}
        /> 
    : successPopup === false?

        <PopupChallenge 
            salaCreada={successPopup} 
            messajePopup={messajePopup}
        /> 
    :
    null

    }



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
                  <div className='button_connectAddress' onClick={connectAddress}> 
                    Connect your Wallet  
                    <img className='logoMetamaskButton' src={imgMetamask} alt="logoMetamaskk" />
                  </div>
              }
             
            </div>
          </div>

          <div className=" profile_cabecera">
            <div className="box_cabecera">

              <p style={{color : colorBo}}  onClick={() => {
                  setTicketBoost(true)
                  setTicketBasic(false)  
                  colorBoost()
                }}>Tickets Boost
              </p>

            </div>
          </div>

          <div className="container_profileUser">
            

            {ticketBoost ? 

              <div className="container_tickets_profile">
                {
                  Connected.boostTicketsInv.length > 0 ?
                    Connected.boostTicketsInv.map((item, index)=> {
                          return <div className="box_tickets_profileUser ">
                            <div className="ticket_box">
                              <img className='ticketImg' src={ticketBoostImg} alt="ticketBoost" />
                              <p className='puntuacion_ticket'>#0</p>
                            </div>
                          </div>
                      })
                : 
                Connected.boostTicketsInv.length <= 0  && ticketBoost ? <p className='noPredictions'> NO TICKET BOOST </p> : null 
                }
              
            </div>
              :
            null
          }

          </div>
        </div>
      :
      window.location.href = "/"
    }
      
    </Suspense>

  </>
  )
}

export default ProfileUser