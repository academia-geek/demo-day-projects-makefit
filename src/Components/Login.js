import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { loginEmailPassAsync, loginFacebook, loginGoogle } from '../Redux/actions/actionLogin';
import styles from "../Styles/Login_Register/Login.module.scss";
import Logo from "../Styles/Images/logo-black.png";
import loginImg from "../Styles/Images/loginimg.png";

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Ingrese un correo válido')
        .required('Este campo es obligatorio'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(50, 'La contraseña debe tener como máximo 50 caracteres')
        .required('Este campo es obligatorio'),
});

const Login = () => {

    const dispatch = useDispatch()

    //funcion para enviar el formulario
    const handleSubmit = (values) => {
        localStorage.setItem('email', values.email)
        dispatch(loginEmailPassAsync(values.email, values.password))
        localStorage.setItem('provider', values.password)
    }

    //funcion para iniciar sesion con google
    const handleGoogle = () => {
        dispatch(loginGoogle())
        localStorage.setItem('provider', 'google')
    }

    //funcion para iniciar sesion con facebook
    const handleFacebook = () => {
        dispatch(loginFacebook())
        localStorage.setItem('provider', 'facebook')
    }

    return (
        <div className={styles.login_container}>

            <div className={styles.login_nav}>
                <Link to="/landingpage">
                    <img src={Logo} alt="logo" className={styles.logo} />
                </Link>
            </div>

            <div className={styles.login_home}>

                <div className={styles.login_ilustration}>
                    <img src={loginImg} alt="logo" className={styles.logo} />
                    <h1>Welcome back.</h1>
                    <h2>
                        Signup into your account to add new
                        recipes, create meal plans and much more.
                    </h2>
                    <h3>
                        Don’t have an account yet?
                        <Link to="/register"><button>Sign up here.</button></Link>
                    </h3>
                </div>


                <div className={styles.login_form__container}>
                    <div>
                        <Formik
                            initialValues={{
                                nombre: "",
                                email: "",
                                password: "",
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => {
                                handleSubmit(values)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className={styles.login_form__inputs}>
                                        <label>Email</label>
                                        <Field name="email" type="text" />
                                        {errors.email && touched.email ? (
                                            <div className={styles.login_error}>
                                                {errors.email}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className={styles.login_form__inputs}>
                                        <label>Contraseña</label>
                                        <Field name="password" type="password" autoComplete="off" />
                                        {errors.password && touched.password ? (
                                            <div className={styles.login_error}>
                                                {errors.password}
                                            </div>
                                        ) : null}
                                    </div>

                                    <h3>
                                        Restore your password
                                        <Link to="/restorepass">Restore.</Link>
                                    </h3>

                                    <button className={styles.login_continue__btn} type="submit">
                                        Login
                                    </button>

                                </Form>
                            )}
                        </Formik>
                    </div>

                    <div className={styles.login_social__btn}>
                        <button onClick={handleGoogle}   >
                            <i className="fa-brands fa-google"></i>
                        </button>

                        <button onClick={handleFacebook} >
                            <i className="fa-brands fa-facebook"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
