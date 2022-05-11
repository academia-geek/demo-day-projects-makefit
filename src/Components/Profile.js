import { useEffect, useState } from 'react';
import { changeName } from '../Hooks/firebase/useChangeName';
import { getDetailsUser } from '../Hooks/firebase/useGetDetailsUser';
import { verificationEmail } from '../Hooks/firebase/useVerificationEmail';
import styles from "../Styles/Profile/Profile.module.scss";
import ModalAuth from './ModalAuth';

const Profile = () => {

    const [verified, setVerified] = useState(false)
    const [user, setUser] = useState()
    const [image, setImage] = useState("")
    const [modal, setModal] = useState(false)
    const [provider, setProvider] = useState("")
    const [newPassword, setNewPassword] = useState()
    const [newEmail, setNewEmail] = useState()
    const [isDelete, setIsDelete] = useState()
    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)


    //ACTUALIZAR EMAIL
    const handleEmail = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        setNewEmail(email)
        setModal(true)
        e.target.reset()
    }

    //ACTUALIZAR CONTRASEÑA
    const handlePassword = (e) => {
        e.preventDefault()
        const password = e.target.password.value;
        const passwordConfirm = e.target.passwordConfirm.value;
        if ((password === passwordConfirm) && (password.length >= 6)) {
            setModal(true)
            setNewPassword(password)
            e.target.reset()
        }
    }

    //Enviar email de verificacion de correo electronico
    const emailVerification = () => {
        verificationEmail(user)
    }

    //Actualizar nombre del usuario
    const handleName = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        changeName(user, name)
    }

    //Eliminar usuario
    const handleDelete = () => {
        setIsDelete(true)
        setModal(true)
    }

    useEffect(() => {
        getDetailsUser(setUser, setProvider, setImage, setVerified)
    }, []);

    return (
        <div className={styles.profile_container}>


            {/* MOSTRAR IMAGEN Y EDITAR NOMBRE */}
            <div className={styles.profile_img__name}>
                <img src={image} alt="perfil" />
                <div className={styles.profile_img__text}>
                    <h1>
                        {user?.displayName}
                        <button onClick={() => setIsName(!isName)}>
                            <i className="fa-solid fa-pen-to-square"></i>
                        </button>
                    </h1>
                    {
                        isName
                            ? <form
                                onSubmit={handleName}
                                className={styles.profile_name__form}>
                                <input
                                    type="text"
                                    placeholder="Enter a new nickname"
                                    name="name" />
                                <button type="submit">
                                    <i className="fa-solid fa-floppy-disk"></i>
                                </button>
                            </form>
                            : null
                    }
                    <h2><strong>user id:</strong> {user?.uid}</h2>
                </div>
            </div>

            {/* MOSTRAR Y EDITAR EMAIL */}
            <div className={styles.profile_email}>
                <h1>Email</h1>
                {
                    verified ?
                        null
                        :
                        <div className={styles.profile_verified__email}>
                            <h1>
                                <i className="fa-solid fa-envelope"></i>
                                Please check your email
                            </h1>
                            <button onClick={emailVerification}>Send verification email</button>
                        </div>
                }
                <h2>
                    {user?.email}
                    <button onClick={() => setIsEmail(!isEmail)}>
                        <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                </h2>
                {
                    isEmail
                        ? <form className={styles.profile_actualizar__email} onSubmit={handleEmail}>
                            <input type="email" placeholder="New email" name="email" />
                            <button type='submit'>
                                <i className="fa-solid fa-floppy-disk"></i>
                            </button>
                        </form>
                        : null
                }

            </div>

            <form className={styles.profile_password} onSubmit={handlePassword}>
                <h1>Password</h1>
                <h2>Change password</h2>
                <input
                    type="password"
                    placeholder="New password"
                    name='password'
                    autoComplete="off" />
                <input
                    type="password"
                    placeholder="Confirm new password"
                    name="passwordConfirm"
                    autoComplete="off" />
                <button type='submit'>
                    <i className="fa-solid fa-floppy-disk"></i>
                    Save
                </button>
            </form>

            <div className={styles.profile_delete__btn}>
                <button onClick={() => handleDelete(user)}>Delete account</button>
            </div>

            {
                modal ?
                    <ModalAuth
                        close={setModal}
                        user={user}
                        provider={provider}
                        email={newEmail}
                        setemail={setNewEmail}
                        password={newPassword}
                        setpassword={setNewPassword}
                        isDelete={isDelete}
                        setdelete={setIsDelete}
                    />
                    : null
            }
        </div>
    )
}

export default Profile