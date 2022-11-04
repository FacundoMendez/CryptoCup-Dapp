import React from 'react'
import "./checkpoints.css"

const Checkpoints = ({setCheckpoints }) => {
  return (
    <div className="checkpoints">
        <div className="box_checkpoints">
            <div className="card_checkpoint">
                <h2>Connected With BSC Wallet</h2>
                <p>If not Connected, Click the "Log In" button in the top right corner</p>
            </div>
            <div className="card_checkpoint">
                <h2>CCT Available to Deposit</h2>
                <p className='cctDeposit'>0</p>
            </div>
            <div className="card_checkpoint">
                <h2>BNB Available in Wallet</h2>
                <p>BNB is requiered to pay transaction fees on the BSC Network.</p>
                <p className='bnbWallet'>0.00</p>
            </div>
        </div>

        <label className='label_match_stake'>
            <input type="radio" name="radio" value="accept_stake" onClick={() => setCheckpoints(true)}/>
            <span className='span_select_part'> I have read the </span><a href="/">Terms and Conditions.</a>
        </label>

    </div>
  )
}

export default Checkpoints