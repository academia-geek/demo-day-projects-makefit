import React from 'react';
import styles from "../Styles/LandingPage/LandingPage.module.scss";
import Logo from "../Styles/Images/logo-black.png";
import foodHome from "../Styles/Images/food.png";
import foodAnalyze from "../Styles/Images/food-analyze.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const redirectionLogin = () => {
        navigate("/login");
    }

    return (

        <div className={styles.landing_container}>

            <nav className={styles.landing_nav}>
                <img src={Logo} alt=""></img>
            </nav>

            <div id="home" className={styles.landing_home}>
                <motion.div
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
                <motion.img
                    initial={{ x: 700 }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                    src={foodHome}
                    alt="food" />
            </div>

            <div id="home" className={styles.landing_analyze}>
                <motion.img
                    initial={{ x: -700, opacity: 0 }}
                    src={foodAnalyze}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
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

        </div>
    )
}

export default LandingPage