import React from 'react';
import styles from "../Styles/LandingPage/LandingPage.module.scss";
import Logo from "../Styles/Images/logo-black.png";
import foodHome from "../Styles/Images/food.png";
import foodAnalyze from "../Styles/Images/food-analyze.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const LandingPage = () => {
    const navigate = useNavigate();

    //FUNCION PARA REDIRECCIONAR LA PAGINA AL LOGIN
    const redirectionLogin = () => {
        navigate("/login");
    }

    //FUNCION PARA OBTENER DATOS DEL FORMULARIO
    const handleContact = (e) => {
        e.preventDefault();
        const mailto = "jesudpf21@hotmail.com"
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;

        //VALIDACION DE CAMPOS
        if (name === "" || email === "" || message === "") {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, llena todos los campos',
            })
        } else {
            //ENVIO DE DATOS AL MAIL
            window.location.href = `mailto:${mailto}?subject=${name} - ${email}&body=${message}`;
            //ALERTA DE ENVIO CORRECTO
            Swal.fire({
                icon: 'success',
                title: 'Enviado',
                text: 'Tu mensaje ha sido enviado correctamente',
            })
            //RESETEAR FORMULARIO
            e.target.reset();
        }
    }

    return (

        <div className={styles.landing_container}>

            <nav className={styles.landing_nav}>
                <img src={Logo} alt=""></img>
            </nav>

            <div id="home" className={styles.landing_home}>
                <motion.div
                    className={styles.landing_home__text}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}>
                    <h1>Multifaceted recipe finder</h1>
                    <h2>
                        We present the most complete website of healthy
                        recipes where you will find countless healthy food
                        recipes with all their nutritional properties and an
                        amount of information about each recipe like you have
                        never seen before.
                    </h2>
                    <button onClick={() => redirectionLogin()}>Get Started</button>
                </motion.div>
                <motion.div
                    className={styles.landing_home__img}
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}>
                    <img src={foodHome} alt="" />
                </motion.div>
            </div>

            <div className={styles.landing_analyze}>
                <motion.img
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    src={foodAnalyze}
                    alt="food" />
                <motion.div
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}>
                    <h1>
                        Analyze nutritional and calorie information for any recipe
                    </h1>
                    <h2>
                        Quickly and easily access detailed nutritional breakdowns and
                        calculate calories in any recipe—from recipes you’ve discovered
                        online to recipes you’ve created yourself.
                    </h2>
                </motion.div>
            </div>

            <div id='contact' className={styles.landing_contactForm}>
                <form onSubmit={handleContact}>
                    <label>Name</label>
                    <input name="name" type="text" placeholder="Name"></input>

                    <label>Email</label>
                    <input name="email" type="email" placeholder="Email"></input>

                    <label>Message</label>
                    <textarea name="message" placeholder="Message"></textarea>

                    <button>Send</button>
                </form>

            </div>

            <div id='nutitrionalInfo' className={styles.landing_nutitrionalInfo}>

            </div>

            <div id='footer' className={styles.landing_footer}>

            </div>

        </div>
    )
}

export default LandingPage