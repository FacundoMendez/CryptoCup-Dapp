import React , {useState , Suspense} from 'react'
import AmountStake from './amountStake/AmountStake'
import Checkpoints from './checkpoints/Checkpoints'
import PreAuth from './preAuth/PreAuth'
import "./stake.css"



const Stake = () => {


    /* SELECTIONS */

    const [checkpoints, setCheckpoints] = useState(false)
    const [amountStake, setAmountStake] = useState(true)
    const [preAutorizacion, setPreAutorization] = useState(true)
    const [confirm, setConfirm] = useState(false)
    const [confirmation, setConfirmation] = useState(false)

    
    /*CONFIRM SELECTIONS  */
    const [numberConfirm, setNumberConfirm] = useState(1)



  return (
    <div className='stake'>

        <div className="box_cards_stake">
            <div className="card_stake">
                <h2>Number of Stakers</h2>
                <div className="line_card"></div>
                <p>2220</p>
            </div>
            <div className="card_stake">
                <h2>Total QTR22 Staked</h2>
                <div className="line_card"></div>
                <p>2220</p>
            </div>
            <div className="card_stake">
                <h2>APY</h2>
                <div className="line_card"></div>
                <p>220%</p>
            </div>
        </div>


        <div className="box_stake_next">
            <h2>STAKE YOUR CCT</h2>
            <div className="next_containers">

                <div className="chekpointsAccess">
                    <p>Checkpoints</p>
                </div>
                
                <div className="chekpointsAccess">
                    <p>Amount to Stake</p>
                </div>
                
                <div className="chekpointsAccess">
                    <p>Pre-Authorization</p>
                </div>
                
                <div className="chekpointsAccess">
                    <p>Confirm</p>
                </div>
                
                <div className="chekpointsAccess">
                    <p>Confirmation</p>
                </div>

            </div>


        </div>

        <div className="components_selection_stake">
            <h2>CHECKPOINTS</h2>

            {
                numberConfirm === 1 ?

                    <Checkpoints
                        setCheckpoints={setCheckpoints}
                    />
                :

                numberConfirm === 2 ? 
                    <AmountStake/>
                :

                numberConfirm === 3 ? 
                    <PreAuth/>
                :
                null

            }

        </div>

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

    </div>
  )
}

export default Stake