import React , {useState , Suspense} from 'react'
import "../stake/stake.css"
import PreAuth from '../stake/preAuth/PreAuth'
import ConfirmationStake from '../stake/confirmation/ConfirmationStake'
import AmountStake from '../stake/amountStake/AmountStake'


/* img */

import amountIcon from "../assets/AmountBlanco.png"
import amountIconColor from "../assets/AmountColor.png"

import checkpointsIcon from "../assets/CheckpointBlanco.png"
import checkpointsIconColor from "../assets/CheckpointColor.png"

import confirmationIcon from "../assets/ConfirmationBlanco.png"
import confirmationIconColor from "../assets/ConfirmationColor.png"

import confirmIcon from "../assets/ConfirmBlanco.png"
import confirmIconColor from "../assets/ConfirmColor.png"
import Rewards from './rewards/Rewards'
import AmountClaim from './amountClaim/AmountClaim'



const MyRewards = () => {


    /* SELECTIONS */

    const [checkpoints, setCheckpoints] = useState(false)
    const [amountStake, setAmountStake] = useState(false)
    const [preAutorizacion, setPreAutorization] = useState(false)

    
    /*CONFIRM SELECTIONS  */
    const [numberConfirm, setNumberConfirm] = useState(1)



  return (
    <div className='stake'>

        <div className="box_cards_stake">
            <div className="card_stake">
                <h2>Number of Stakers</h2>
                <div className="line_card"></div>
                <p>0</p>
            </div>
            <div className="card_stake">
                <h2>Total CCT Staked</h2>
                <div className="line_card"></div>
                <p>0</p>
            </div>
            <div className="card_stake">
                <h2>APY</h2>
                <div className="line_card"></div>
                <p>0%</p>
            </div>
        </div>


        <div className="box_stake_next">
            <h2>UNSTAKE YOUR CCT</h2>
            <div className="next_containers">

                <div className="chekpointsAccess">
                    { checkpoints? 
                            <img src={checkpointsIconColor} alt="checkpoints" />
                        :
                            <img src={checkpointsIcon} alt="checkpoints color" />
                    }
                    { checkpoints? 
                            <p style={{color:"rgb(127, 255, 206)"}}>My Rewards</p>
                        :
                            <p>My Rewards</p>
                    }
                   
                </div>
                
                <div className="chekpointsAccess">
                    { amountStake ? 
                            <img src={amountIconColor} alt="amountIcon" />
                        :
                            <img src={amountIcon} alt="amountIcon color" />
                    }

                    { amountStake? 
                            <p style={{color:"rgb(127, 255, 206)"}}>Amount to Stake</p>
                        :
                            <p>Amount to Claim</p>
                    }

                </div>
                
                <div className="chekpointsAccess">
                    { preAutorizacion? 
                            <img src={confirmIconColor} alt="Confirm" />
                        :
                            <img src={confirmIcon} alt="Confirm color" />
                    }
                    { preAutorizacion? 
                            <p style={{color:"rgb(127, 255, 206)"}}>Confirm</p>
                        :
                            <p>Confirm</p>
                    }
                </div>
                
                <div className="chekpointsAccess">
                    {
                        numberConfirm === 4  ?
                            <img src={confirmationIconColor} alt="Confirmation Color" />

                        :
                            <img src={confirmationIcon} alt="Confirmation " />

                    }
                    { numberConfirm === 4? 
                            <p style={{color:"rgb(127, 255, 206)"}}>Confirmation</p>
                        :
                            <p>Confirmation</p>
                    }
                </div>

            </div>


        </div>

        <div className="components_selection_stake">

        {
                numberConfirm === 1 ?
                    <h2>My Stake And Rewards</h2>
                :

                numberConfirm === 2 ? 
                    <h2>Amount to Claim</h2>
                :

                numberConfirm === 3 ? 
                    <h2>Confirm the Claiming Transaction</h2>
                :
                numberConfirm === 4 ? 
                    <h2>Your Claim was Confirmed Successfully</h2>
                :
                null

            }
       

            {
                numberConfirm === 1 ?

                    <Rewards
                        setCheckpoints={setCheckpoints}
                    />
                :

                numberConfirm === 2 ? 
                    <AmountClaim
                        setAmountStake={setAmountStake}
                    />
                :

                numberConfirm === 3 ? 
                    <PreAuth
                    setPreAutorization={setPreAutorization}
                    />
                :
                numberConfirm === 4 ? 
                    <ConfirmationStake 
                        iconConfirm = {confirmationIconColor}
                    />
                :
                null

            }

<div className="buttons_stake">
            {/* previus */}

            {numberConfirm === 1   ?           
                    <div className='buttonDisable'>PREVIUS</div>
                : 
            
            numberConfirm === 2   ?
                <button  onClick={() => {
                    setNumberConfirm(numberConfirm -1)
                    setCheckpoints(false)
                    setAmountStake(false)
                }}>PREVIUS</button>
                :

            numberConfirm === 3   ?
                <button  onClick={() => {
                    setNumberConfirm(numberConfirm -1)
                    setPreAutorization(false)
                    setAmountStake(false)
                }}>PREVIUS</button>
            :
                null
            } 



            {/* next */}

            { checkpoints && numberConfirm === 1  ?
                <button onClick={() => setNumberConfirm(numberConfirm +1)}>NEXT</button>
            : 
                !checkpoints && numberConfirm === 1  ?
                    <div className='buttonDisable'>NEXT</div>
            :



            amountStake && numberConfirm === 2  ?
                <button onClick={() => setNumberConfirm(numberConfirm +1)}>NEXT</button>
            :  

            !amountStake && numberConfirm === 2  ?
                <div className='buttonDisable'>NEXT</div>
            : 



            preAutorizacion && numberConfirm === 3  ?
                <button onClick={() => setNumberConfirm(numberConfirm +1)}>NEXT</button>
            :  

            !preAutorizacion && numberConfirm === 3  ?
                <div className='buttonDisable'>NEXT</div>

            :

            null
            }

        </div>
        <div className="separador"></div>
        </div>

    </div>
  )
}

export default MyRewards