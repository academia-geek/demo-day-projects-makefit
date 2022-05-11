import { deleteUser } from "firebase/auth"
import Swal from "sweetalert2"

export const deleteUserProfile = (user) => {
    Swal.fire({
        title: "Are you sure?",
        text: "Once deleted you will not be able to recover your account",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3dc795",
        cancelButtonColor: "#c73d3d",
        confirmButtonText: "Yes, delete",
        cancelButtonText: "No, cancel",
    }).then((result) => {
        if (result.value) {
            deleteUser(user)
                .then(() => {
                    Swal.fire({
                        title: "User Deleted",
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                    })
                })
        }
    })
}