import { getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import Swal from "sweetalert2"
import { facebook, google } from "../../Firebase/credentials"
import { typesLogin } from "../types/types"



//Logout
export const logoutAsync = () => {
    return (dispatch) => {
        const auth = getAuth()
        signOut(auth)
            .then(( user ) => {
                dispatch(logoutSync())
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    'Could not sign out',
                    'error'
                )
            })
    }
}
export const logoutSync = () => {
    return {
        type: typesLogin.logout
    }
}

//Login con Google
export const loginGoogle = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, google)
            .then(({ user }) => {
                localStorage.setItem('email', user.email)
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    'This email has already been registered, please try a different Google account',
                    'error'
                )
            })
    }
}

//Login con Facebook
export const loginFacebook = () => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithPopup(auth, facebook)
            .then(({ user }) => {
                localStorage.setItem('email', user.email)
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    'This email has already been registered, please try a different Facebook account',
                    'error'
                )
            })
    }
}



//validar usuario y Contraseña
export const loginEmailPassAsync = (email, password) => {
    return (dispatch) => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                dispatch(loginSincronico(user.email, user.password))
            })
            .catch(error => {
                Swal.fire(
                    'Error',
                    'Existing username or wrong password',
                    'error'
                )
            })

    }
}
export const loginSincronico = (email, password) => {
    return {
        type: typesLogin.login,
        payload: {
            email, password
        }
    }
}