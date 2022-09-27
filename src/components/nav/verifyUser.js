import api from "../../api"

export const verificarExistencia = async (signer, signature)=>{
    try {
        const res = await api.post('/user', { address:signer, signature });
        console.log(res)

        if (res.data==="User does not exist.") {
            return false
        } else if (res.data==="User exists.") {
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
        console.log(signer)
        const res = await api.post('/user/getUser', { address: signer, signature });
        console.log(res)
        return res.data
    } catch (error) {
        console.log(error)
    }
}