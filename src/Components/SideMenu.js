import React, { useEffect, useState } from 'react';
import styles from "../Styles/SideMenu/SideMenu.module.scss";
import LogoRec from "../Styles/Images/logo-white-img.png";
import { getAuth } from 'firebase/auth';
import md5 from "md5";
import { Link } from 'react-router-dom';
import { logoutAsync } from '../Redux/actions/actionLogin';
import { useDispatch } from 'react-redux';
import { emailAdmin } from '../utils/emailAdmin';

const SideMenu = () => {

    const dispatch = useDispatch();
    const [admin, setAdmin] = useState(false);

    //obtener usuraio
    const auth = getAuth()
    const user = auth.currentUser;

    useEffect(() => {
        if (user.email === emailAdmin) {
            setAdmin(true)
        }
    }, [user.email]);

    //Imagen de gravatar
    const hash = md5(user.email);
    const gravatar = `https://www.gravatar.com/avatar/${hash}?d=identicon`;


    //funcion para cerrar sesion
    const handleLogout = () => {
        dispatch(logoutAsync())
    }

    return (
        <div className={styles.sidemenu_container}>

            <div className={styles.sidemenu_body}>
                {/* Header */}
                <div className={styles.sidemenu_logo}>
                    <Link to="/home"><img src={LogoRec} alt="logo" /></Link>
                </div>


                {/* Profile */}
                <div className={styles.sidemenu_profile}>
                    <img src={gravatar} alt="perfil" />
                    <h1>{user.email}</h1>
                </div>

                {/* Items */}
                <div className={styles.sidemenu_items}>
                    <Link to="/blog"><i className="fa-solid fa-blog"></i> <span>Blog</span></Link>
                    {admin
                        ? <Link to="/blog/add">
                            <i className="fa-solid fa-plus"></i>
                            <span>Añadir entrada al blog</span>
                        </Link>
                        : null
                    }
                </div>

                {/* Footer */}
                <div className={styles.sidemenu_footer}>
                    <button onClick={() => handleLogout()}>
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                        <h1>Logout</h1>
                    </button>

                </div>
            </div>

        </div>
    )
}

export default SideMenu