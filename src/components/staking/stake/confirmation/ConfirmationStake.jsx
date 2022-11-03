import React from 'react'

const ConfirmationStake = ({setConfirmation , confirmation}) => {
  return (
    <div className="confirmStake">
        {
            confirmation ?
                <img src="" alt="successfully" />
            :
                <img src="" alt="error" />
        }

    </div>
  )
}

export default ConfirmationStake