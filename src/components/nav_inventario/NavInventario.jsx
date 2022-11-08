import React, {useContext, useState} from 'react'
import "./navInventario.css"
import arrow from "./src/arrow.png"
import ContextConnected from '../config/context/ConnectedContext'
import ticketBoost from "./src/ticketBoost.png"
import token from "./src/tokenNav.png"
import multix2 from "./src/multix2.png"
import multix3 from "./src/multix3.png"
import multix5 from "./src/multix5.png"
import enviar from "../config/src/enviar.png"


const NavInventario = () => {



  const Connected = useContext(ContextConnected)

  /* contador de multiplicadores */


  const [cantMutlix2, setCantMultix2] = useState(1)
  const [cantMutlix3, setCantMultix3] = useState(1)
  const [cantMutlix5, setCantMultix5] = useState(1)



  /* prices multiplicadores */

  const [priceMultiX2, setPriceMultix2] = useState(100)
  const [priceMultiX3, setPriceMultix3] = useState(200)
  const [priceMultiX5, setPriceMultix5] = useState(500)


  const [activeButtonDeposit , setActiveButtonDeposit] = useState(false)
  const [activeButtonWithdrawl , setActiveButtonWithdrawl] = useState(false)

  const handlerActiveDeposit = () => {
   /*  setActiveButtonDeposit(!activeButtonDeposit) */
  }
  const handlerActiveWithdrawl = () => {
   /*  setActiveButtonWithdrawl(!activeButtonWithdrawl) */
  }

 
  return (
    <>
    { Connected.userLogginActive ?    

      <div className="nav_inventario">
        <div className="nav_Toggle_inventario" aria-label="Abrir menú">
            <img  className='arrowDesplegable' src={arrow} alt="arrow" />
        </div>
        <div className="box_navHorizontal-contadores">
            
            <div className="tickets_navHorizontal-Boost">
                <img src={ticketBoost} alt="Nav Tickets" />
                <div className="tickets_navHorizontal-Boost-cant">
                <p>{Connected.boostTicketsInv.length}</p>
                </div>
            </div>

            <div className="token_navHorizontal">
                <img src={token} alt="Token Nav" />
                <div className="contadorToken_navHorizontal">
                    <p>{Connected.userData.inventory.tokenBalance}</p>
                </div>
            </div>
        </div>


        <div className="claim">
          <div className="box_claim">
            <p onClick={() => handlerActiveDeposit() }>DEPOSIT</p>
            {
              activeButtonDeposit ? 
                <div className="cant_claim">
                  <input type="number"/>
                  <button type='submit'> <img src={enviar} alt="submit" /></button>

                </div>
              :
              null
            }

          </div>

          <div className="box_claim">
            <p onClick={() => handlerActiveWithdrawl() }>WITHDRAWL</p>
              {
                activeButtonWithdrawl ? 
                  <div className="cant_claim">
                    <input type="number"/>
                    <button type='submit'> <img src={enviar} alt="submit" /></button>
                  </div>
                :
                null
              }
          </div>
      </div>

        

        <div className="box_multi">
            <div className="contain_multi">
              <div className="boxPrice">
                <img src={token} alt="token" />
                <div className="priceMulti"> {priceMultiX2} </div>
              </div>

              <div className="box_img_multi">
                <img className='imgMulti2' src={multix2} alt="img multiplicador" />
                <div className="cant_multi_user">0</div>
              </div>

              <div className="box_agregar_multi">
                <div className="buttonCant decr_button" onClick={() => {
                  if ( cantMutlix2 >= 2){
                    setCantMultix2(cantMutlix2 - 1)
                    setPriceMultix2( priceMultiX2 - 100)
                  }
                }}>-</div>
                <div className="valor_cant_multi">{cantMutlix2}</div>
                <div className="buttonCant incr_button"onClick={() => {
                    setCantMultix2(cantMutlix2 + 1)
                    setPriceMultix2( priceMultiX2 + 100)
                }}>+</div>
              </div>
              <div className="buy_multi" id='buyMulti_x2'>
                Buy
              </div>
            </div>


            <div className="contain_multi">

              <div className="boxPrice">
                <img  src={token} alt="token" />
                <div className="priceMulti"> {priceMultiX3} </div>
              </div>

              <div className="box_img_multi">
                <img className='imgMulti3' src={multix3} alt="img multiplicador" />
                <div className="cant_multi_user">0</div>
              </div>

              <div className="box_agregar_multi">
                <div className="buttonCant decr_button" onClick={() => {
                  if ( cantMutlix3 >= 2 ){
                    setCantMultix3(cantMutlix3 - 1)
                    setPriceMultix3( priceMultiX3 - 200)
                  }
                }}>-</div>
                <div className="valor_cant_multi">{cantMutlix3}</div>
                <div className="buttonCant incr_button"onClick={() => {
                    setCantMultix3(cantMutlix3 + 1)
                    setPriceMultix3( priceMultiX3 + 200)
                }}>+</div>
              </div>
              <div className="buy_multi" id='buyMulti_x3'>
                Buy
              </div>
            </div>


            <div className="contain_multi">

              <div className="boxPrice">
                <img src={token} alt="token" />
                <div className="priceMulti"> {priceMultiX5} </div>
              </div>

              <div className="box_img_multi">
                <img className='imgMulti5' src={multix5} alt="img multiplicador" />
                <div className="cant_multi_user">0</div>
              </div>

              <div className="box_agregar_multi">
                <div className="buttonCant decr_button" onClick={() => {
                  if ( cantMutlix5 >= 2 ){
                    setCantMultix5(cantMutlix5 - 1)
                    setPriceMultix5( priceMultiX5 - 500)
                  }
                }}>-</div>
                <div className="valor_cant_multi">{cantMutlix5}</div>
                <div className="buttonCant incr_button"onClick={() => {
                    setCantMultix5(cantMutlix5 + 1)
                    setPriceMultix5( priceMultiX5 + 500)
                }}>+</div>
              </div>

              <div className="buy_multi" id='buyMulti_x5'>
                Buy
              </div>

            </div>
        </div>

      </div>
      :
      null
    }
    </>

  )
}

export default NavInventario