import React, {useEffect} from 'react'
import "./preload.css"
import preloadFuncional from './preloadFuncional'
import logo from "../../nav/src/logoPng.png"

const Preload = () => {

    useEffect(()=>{
        preloadFuncional()
    },[])

  return (
    <div className="preload">
        <div className="preload__img">
            <img className="imgLogo" src={logo} alt="Logo CryptoCup"/>
            <div className="ball"></div>
        </div>
    </div>
  )
}

export default Preload