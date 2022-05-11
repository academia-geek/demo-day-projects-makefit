import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

export const changeName = (user, name) => {
    updateProfile(user, { displayName: name })
        .then(() => {
            Swal.fire({
                title: "The nickname has been updated",
                icon: "success",
                showConfirmButton: false,
            })
            window.location.reload()
        })
}