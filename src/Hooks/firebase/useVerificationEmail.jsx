import { sendEmailVerification } from "firebase/auth"
import Swal from "sweetalert2"

export const verificationEmail = (user) => {
    sendEmailVerification(user)
        .then(() => {
            Swal.fire({
                title: "E-mail sent",
                text: "Please check your email",
                icon: "success",
            })
        })
        .catch((error) => {
            Swal.fire({
                title: "Error",
                text: "Many requests, the email has already been sent, check your email or spam folder",
                icon: "error",
            })
        })
}