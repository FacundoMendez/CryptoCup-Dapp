import api from "../../api"

export const verificarExistencia=async (signer,signature,message)=>{
    try {
        const res=await api.post('/user',
            {address:signer,signature,message},{withCredentials: true, credentials: 'include'})
        if (res.data==="User does not exist.") {
            return false
        } else {
            return true
        }
    } catch (error) {
        console.log(error)
    }
}