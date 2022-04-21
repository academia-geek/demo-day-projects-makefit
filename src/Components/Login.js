import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { loginEmailPassAsync, loginFacebook, loginGoogle } from '../Redux/actions/actionLogin';
import styles from "../Styles/Login_Register/Login.module.scss";
import Logo from "../Styles/Images/logo-black.png";

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
    }

    //funcion para iniciar sesion con google
    const handleGoogle = () => {
        dispatch(loginGoogle())
    }

    //funcion para iniciar sesion con facebook
    const handleFacebook = () => {
        dispatch(loginFacebook())
    }

    return (
        <div className={styles.login_container}>

            <div className={styles.login_logo}>
                <Link to="/"><img src={Logo} alt=""></img> </Link>
            </div>

            <div className={styles.login_form}>
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
                            <div>
                                <h1>Iniciar sesión</h1>
                            </div>

                            <div className={styles.login_form__inputs}>
                                <label>Email</label>
                                <Field name="email" type="text" />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red", fontSize: "13px" }}>
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>

                            <div className={styles.login_form__inputs}>
                                <label>Contraseña</label>
                                <Field name="password" type="password" autoComplete="off" />
                                {errors.password && touched.password ? (
                                    <div style={{ color: "red", fontSize: "13px" }}>
                                        {errors.password}
                                    </div>
                                ) : null}
                            </div>

                            <button className={styles.login_continue__btn} type="submit">
                                Continuar
                            </button>

                            <div className={styles.login_text}>
                                <h1>Al continuar, aceptas las
                                    <span>Condiciones de uso</span>
                                    y el
                                    <span>Aviso de privacidad</span>
                                    de Amazonas.
                                </h1>
                                <h2>
                                    <i className="fa-solid fa-caret-right"></i>
                                    ¿Necesitas ayuda?
                                </h2>
                            </div>
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

            <div className={styles.login_change}>
                <h1 ><span>¿Eres nuevo en Amazonas?</span></h1>
                <Link to="/register"><button>Crea tu cuenta de Amazonas</button></Link>
            </div>


        </div>
    );
};

export default Login;
