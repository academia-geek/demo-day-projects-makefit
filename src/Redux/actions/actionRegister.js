import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"
import Swal from "sweetalert2"
import { typesRegister } from "../types/types"

export const registerAsync =(email, pass, name)=>{
    return(dispatch)=>{
            const auth = getAuth()
            createUserWithEmailAndPassword(auth, email, pass)
            .then(async({user})=>{
                await updateProfile(auth.currentUser, {displayName: name})
                dispatch(registerSync(email, pass, name))
        })
        .catch(error=>{
            Swal.fire(
                'Error',
                'Este email ya fue registrado, por favor intente con un email diferente',
                'error'
            )
        })
    }
}

export const registerSync =(email, pass, name)=>{
    return{
        type: typesRegister.register,
        payload: {
            email, pass, name
        }
    }
}