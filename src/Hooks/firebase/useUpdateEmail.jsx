import { updateEmail } from "firebase/auth"
import Swal from "sweetalert2"

//ACTUALIZAR EMAIL
export const newEmail = (user, newEmail) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "Email will be changed!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: "#3dc795",
        cancelButtonColor: "#c73d3d",
        confirmButtonText: 'Yes, change it!'
    }).then((result) => {
        if (result.value) {
            updateEmail(user, newEmail)
                .then(() => {
                    Swal.fire({
                        title: 'Well!',
                        text: 'Email has been updated',
                        icon: 'success',
                        showConfirmButton: false,
                })
                    window.location.reload()
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