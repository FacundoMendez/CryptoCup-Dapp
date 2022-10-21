import React from 'react'
import { useParams } from 'react-router-dom'

const DetailChallenge = () => {
    let roomId = useParams()
    console.log(roomId)
  return (
    <div>
        
        <p>id Usuario: <p>{roomId}</p></p>

    </div>
  )
}

export default DetailChallenge