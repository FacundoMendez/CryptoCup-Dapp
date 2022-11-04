import React, {useState} from 'react'
import "./rewards.css"


const Rewards = ({setCheckpoints }) => {

    const [activePopup , setActivePopup] = useState(false)
    const [porcentajeUser , setPorcentajeUser] = useState([]) /* porcentaje que el usuario va recaudando */


    const active = () =>{
        setActivePopup(!activePopup)
    }

  return (
    <div className="checkpoints">
        <div className="box_checkpoints">
            <div className="card_rewards">
                <h2 className='titlebox'>Staked</h2>
                <p>0.00</p>
            </div>
 
            <div className="card_rewards">
                <h2 className='titlebox'>Rewards</h2>
                <p>0.00</p>
            </div>
        </div>

        <label className='label_match_stake'>
            <input type="radio" name="radio" value="accept_stake" onClick={() => setCheckpoints(true)}/>
            <span className='span_select_part'> I have read the </span><a href="/">Terms and Conditions.</a>
        </label>

    </div>
  )
}

export default Rewards