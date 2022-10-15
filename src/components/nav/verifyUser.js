import api from "../../api"
import Cookies from "universal-cookie";


const cookies = new Cookies()

export const verificarExistencia = async (signer, signature)=>{
    try {
        const res = await api.post('/user', { address:signer, signature });
        const nextYear = new Date();
        if (res.data==="User does not exist.") {
            return false
        } else if (res.data==="User exists.") {

            cookies.set('gandalf' ,"asd232eadas", {maxAge: 86400000  , path : '/' })
            return true
        }
        else {
            return false
        }

    } catch (error) {
        console.log(error)
    }
}

export const getUserData = async (signer, signature)=>{
    try {
        const res = await api.post('/user/getUser', { address: signer, signature });
        return res.data
    } catch (error) {
        console.log(error)
    }
}