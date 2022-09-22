import React, {useEffect} from 'react'
import "./login.css"
import loginFuncional from './loginFuncional'
import SelectFlags from './selectFlags/SelectFlags'


const Login = () => {

    useEffect(() => {
        loginFuncional()
    },[])




  return (
    <div className="blurLogin">
        <div className="blurLogin_exit"></div>
        <div className=" containerLogin">
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