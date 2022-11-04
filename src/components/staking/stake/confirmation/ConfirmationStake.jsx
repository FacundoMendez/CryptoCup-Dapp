import React  from 'react'
import "./confirmation.css"

const ConfirmationStake = ({iconConfirm}) => {

  return (

    <div className="confirmationStake">
        {
          <div className="confirmStakeIcon">
              <img src={iconConfirm} alt="successfully"  />
          </div>
               
        }

    </div>
  )
}

export default ConfirmationStake