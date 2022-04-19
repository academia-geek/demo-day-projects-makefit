import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAsync } from '../Redux/actions/actionLogin';
import styles from "../Styles/Navbar/Navbar.module.scss";
import Logo from "../Styles/Images/LOGO.png"

const NavBarUser = () => {
    const dispatch = useDispatch()
	const navigate = useNavigate()
	//cerrar sesion
	const handleLogout = () => {
		dispatch(logoutAsync())
		navigate('/landingpage')
	}
    return (
        <div className={styles.nav_container}>
            <Link to="/home"><img src={Logo} alt=""></img></Link>
            <div className={styles.nav_options}>
                <Link to="/blog">Blog</Link>
                <Link to="/blog/add">Agregar entrada el blog</Link>
                <button onClick={() => handleLogout()}>
                <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </button>
            </div>
        </div>
    )
}

export default NavBarUser