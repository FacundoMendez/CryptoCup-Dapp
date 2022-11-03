import React from 'react'
import "./preAuth.css"

const PreAuth = ({setPreAutorization}) => {

  setPreAutorization(true)  /* detectar si el usuario autorizo metamask */

  return (
    <div className='preAuth'>
      <div className="loader"></div>
    </div>
  )
}

export default PreAuth