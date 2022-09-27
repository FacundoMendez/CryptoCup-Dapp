import React, {useState} from 'react'
import "./claim.css"

const Claim = () => {

    const [activeClaim, setActiveClaim] = useState(false)

  return (
    <>
    { activeClaim ? 
        <div className="claim" onClick={() => setActiveClaim(false)}>
            <p>CLAIM</p>
        </div>
    :
        <div className="claim_disable">
            <p>CLAIM</p>
        </div>
    }
    </>
  )
}

export default Claim