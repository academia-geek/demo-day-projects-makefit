import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../Styles/LandingPage/LandingPage.module.scss";
import Logo from "../Styles/Images/logo-yellow.png";
import ilustration from "../Styles/Images/illustration-features-tab-3.svg";

const LandingPage = () => {
    return (

        <div className={styles.landing_container}>
            <nav className={styles.landing_nav}>
                <img src={Logo} alt=""></img>
                <div>
                    <Link className="links_landing" to="/register"><h1>Register</h1></Link>
                    <Link className="links_landing" to="/login"><h1>Login</h1></Link>
                </div>
            </nav>
            <div className={styles.img_landing}>
                <h6>Está será nuestra futura landing page</h6>
                <img  src={ilustration} alt=""></img>
            </div>

        </div>
    )
}

export default LandingPage