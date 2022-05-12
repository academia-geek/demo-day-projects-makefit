import { EmailAuthProvider, FacebookAuthProvider, getAuth, GoogleAuthProvider, reauthenticateWithCredential, reauthenticateWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { newPassword } from "../Hooks/firebase/useUpdatePassword";
import { newEmail } from "../Hooks/firebase/useUpdateEmail";
import styles from "../Styles/General/ModalCustom.module.scss";
import { deleteUserProfile } from "../Hooks/firebase/useDeleteUser";

const ModalAuth = ({ close, user, password, provider, isDelete, email, setemail, setpassword, setdelete }) => {

    const handleClose = () => {
        close(false)
        setpassword(undefined)
        setemail(undefined)
        setdelete(undefined)
    }

    const handleReauthenticateSocial = () => {
        if (provider === "google.com") {
            const providerGoogle = new GoogleAuthProvider();
            const auth = getAuth();
            reauthenticateWithPopup(auth.currentUser, providerGoogle)
            if (password) { newPassword(user, password) }
            else if (email) { newEmail(user, email) }
            else if (isDelete) { deleteUserProfile(user) }
            handleClose()

        }
        else if (provider === "facebook.com") {
            const providerFacebook = new FacebookAuthProvider();
            const auth = getAuth();
            reauthenticateWithPopup(auth.currentUser, providerFacebook)
            if (password) { newPassword(user, password) }
            else if (email) { newEmail(user, email) }
            else if (isDelete) { deleteUserProfile(user) }
            handleClose()
        }
    }

    const handleReauthenticate = (e) => {
        e.preventDefault()
        const actualpassword = e.target.password.value;
        if (actualpassword.length >= 6) {
            const credential = EmailAuthProvider.credential(user.email, actualpassword)
            reauthenticateWithCredential(user, credential)
                .then(() => {
                    if (password) { newPassword(user, password) }
                    else if (email) { newEmail(user, email) }
                    else if (isDelete) { deleteUserProfile(user) }
                    handleClose()
                })
                .catch(() => {
                    Swal.fire({
                        title: "Error",
                        text: "The entered password is wrong",
                        icon: "error",
                    })
                    handleClose()
                })
        }
    }


    return (
        <div>
            <div className={styles.modal_container}>
                <div className={styles.modal_background}>
                    <div className={styles.modal_content}>

                        <div className={styles.modal_header}>
                            <h1>Reauthenticate with your login method</h1>
                            <button onClick={handleClose}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </div>

                        <div className={styles.modal_body}>
                            <form onSubmit={handleReauthenticate}>
                                <h1></h1>
                                <div className={styles.modal_form}>
                                    <input
                                        type="password"
                                        placeholder="Enter your current password"
                                        name="password"
                                        autoComplete="off"
                                    />
                                    <button type='submit'>
                                        <i className="fa-solid fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>
                            <div className={styles.modal_auth__social}>
                                <h1>If you enter with a social network,
                                    please click on the following button
                                </h1>
                                <button
                                    onClick={handleReauthenticateSocial}>
                                    <span> <i className="fa-brands fa-google"></i></span>
                                    or
                                    <span><i className="fa-brands fa-facebook-f"></i></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ModalAuth