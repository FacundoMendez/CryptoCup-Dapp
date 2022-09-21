import React, {useEffect} from 'react'
import "./login.css"
import loginFuncional from './loginFuncional'


const Login = () => {

    useEffect(() => {
        loginFuncional()
    },[])

  return (
    <div className="blurLogin">
        <div className=" containerLogin">
            <div className="content_user_login">
                <div className="username">
                    <label htmlFor="UserName">UserName</label>
                    <input id="userName_id" name='userName'  type="text" />
                </div>

                <div className="flag">
                    <div className="box_flag"></div>
                </div>
            </div>

            <div className="buttonAcept_login">
                <p>Confirm</p>
            </div>
        </div>
    </div>
  )
}

export default Login