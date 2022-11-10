import React, {useEffect, useContext, useState} from 'react'
import "./login.css"
import loginFuncional from './loginFuncional'
import SelectFlags from './selectFlags/SelectFlags'
import ContextConnected from '../../config/context/ConnectedContext'
import x from "../src/x.png"
import api from '../../../api'


const Login = () => {

    useEffect(() => {
        loginFuncional()
    },[])

    const Connected = useContext(ContextConnected)

    const [buttonActive , setButtonActive] = useState(false)

    const register = async (username, flag) => {

        if (Connected.userEmail) {
            const res = await api.post('/user/createGoogleUser', { email:Connected.userEmail , username,  flag });
            if(res.status === 200){
                Connected.setUserData(res.data.user);
                Connected.setUserToken(res.data.token)
                Connected.setActiveLogin(false);
                Connected.setUserLoginActive(true);
            }
        } else {
            const res = await api.post('/user/createMetamaskUser', { address: Connected.account[0], signature: Connected.signature, username,  flag });
            if(res.status === 200){
                
                Connected.setUserData(res.data.user);
                Connected.setUserToken(res.data.token)
    
                Connected.setActiveLogin(false);
                Connected.setUserLoginActive(true);
            }
        }

    
    }


    const valueImput = (e) => {
        e.preventDefault()
        if(e.target.value.length > 12){
            e.target.value = e.target.value.slice(0,12);
        }

        var iChars = "!@#$%^&*()+=-[]\\\';,./{}|' '\":<>?";

        for (var i = 0; i < e.target.value.length; i++) {
            if (iChars.indexOf(e.target.value.charAt(i)) != -1) {
                setButtonActive(false)
                return false;
            }else{
                setButtonActive(true)
            }
        }
    }




  return (
    <div className="blurLogin">
        <div className="blurLogin_exit" onClick={() => Connected.setActiveLogin(false)}></div>
        <div className=" containerLogin" /* onSubmit={submit} */>
            <div className="exit_login_x" onClick={() => Connected.setActiveLogin(false)}>
                <img src={x} alt="exit" />
            </div>
            <div className='welcome_login'>
                <h1>Welcome to Crypto Cup </h1>
                {/* <p>V. Alpha</p> */}
            </div>
            <div className="content_user_login">
                <div className="username">
                    <label className='userName_label' htmlFor="userName_label">UserName:</label>
                    <input 
                        id="userName_id" 
                        name='userName' 
                        pattern="(?=.*[a-z])(?=.*[A-Z]).{,12}"
                        required 
                        maxLength={12}
                        minLength={3}
                        onKeyUp={valueImput}
                        title="Max letras 12"
                        onChange={valueImput} 
                        type="text" 
                    />
                </div>

                <SelectFlags/>
            </div>

            {buttonActive ?
            
                <div className="buttonAcept_login" type="submit" onClick={() => {
                        if(buttonActive){
                            register(document.querySelector("#userName_id").value, Connected.paisFlag)
                        }
                    }}>
                    <p>Confirm</p>
                </div>
        
                :

                <div className="buttonAcept_login" type="submit" style={{backgroundColor:"gray"}} disabled="disabled" > 
                    <p>Confirm</p>
                </div>
            }

        </div>
    </div>
  )
}

export default Login