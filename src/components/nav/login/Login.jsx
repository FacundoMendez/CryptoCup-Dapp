import React, {useEffect, useContext} from 'react'
import "./login.css"
import loginFuncional from './loginFuncional'
import SelectFlags from './selectFlags/SelectFlags'
import ContextConnected from '../../config/context/ConnectedContext'
import x from "../src/x.png"

const Login = () => {

    useEffect(() => {
        loginFuncional()
    },[])

    const Connected = useContext(ContextConnected)

  return (
    <div className="blurLogin">
        <div className="blurLogin_exit" onClick={() => Connected.setActiveLogin(false)}></div>
        <div className=" containerLogin">
            <div className="exit_login_x" onClick={() => Connected.setActiveLogin(false)}>
                <img src={x} alt="exit" />
            </div>
            <div className='welcome_login'>
                <h1>Welcome to Crypto Cup</h1>
            </div>
            <div className="content_user_login">
                <div className="username">
                    <label className='userName_label' htmlFor="userName_label">UserName:</label>
                    <input id="userName_id" name='userName'  type="text" />
                </div>

                <SelectFlags/>
            </div>

            <div className="buttonAcept_login">
                <p>Confirm</p>
            </div>
        </div>
    </div>
  )
}

export default Login