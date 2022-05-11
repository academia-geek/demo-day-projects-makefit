import { updatePassword } from "firebase/auth"
import Swal from "sweetalert2";

//ACTUALIZAR CONTRASEÑA
export const newPassword = (user, newPassword) => {

    if (newPassword.length < 6) {
        Swal.fire({
            title: 'Error',
            text: 'The password must be at least 6 characters',
            icon: 'error'
        })
    } else {
        Swal.fire({
            title: 'Are you sure?',
            text: "The password will be changed!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: "#3dc795",
            cancelButtonColor: "#c73d3d",
            confirmButtonText: 'Yes, change it!'
        }).then((result) => {
            if (result.value) {
                updatePassword(user, newPassword)
                    .then(() => {
                        Swal.fire(
                            'Well!',
                            'The password has been updated',
                            'success'
                        )
                    }
                    )
                    .catch(err => {
                        Swal.fire(
                            'Error',
                            err.message,
                            'error'
                        )
                    }
                    )
            }
        })
    }
}