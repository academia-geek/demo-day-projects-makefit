import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { registerAsync } from '../Redux/actions/actionRegister';
import styles from "../Styles/Login_Register/Login.module.scss";
import Logo from "../Styles/Images/logo-black.png";
import loginImg from "../Styles/Images/loginimg.png";

//validaciones de cada input
const SignupSchema = Yup.object().shape({
    nombre: Yup.string()
        .min(3, 'El nombre debe tener al menos 2 caracteres')
        .max(50, 'El nombre debe tener como máximo 50 caracteres')
        .required('Este campo es obligatorio'),
    email: Yup.string()
        .email('Ingrese un correo válido')
        .required('Este campo es obligatorio'),
    password: Yup.string()
        .min(6, 'La contraseña debe tener al menos 6 caracteres')
        .max(50, 'La contraseña debe tener como máximo 50 caracteres')
        .required('Este campo es obligatorio'),
    pass2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Las contraseñas no coinciden')
        .required('Este campo es obligatorio'),
});


const Register = () => {
    const dispatch = useDispatch();

    //funcion para dispatch de register y set usuario en localStorage
    const handleSubmit = (values) => {
        localStorage.setItem('email', values.email)
        dispatch(registerAsync(values.email, values.password, values.nombre))
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
                    <h1>Hello, there.</h1>
                    <h2>
                        Signup into your account to add new
                        recipes, create meal plans and much more.
                    </h2>
                    <h3>
                        Do you already have an account?
                        <Link to="/login"><button>Login here</button></Link>
                    </h3>
                </div>

                <div className={styles.login_form__container}>
                    <div>
                        <Formik
                            initialValues={{
                                nombre: "",
                                email: "",
                                password: "",
                                pass2: "",
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => {
                                handleSubmit(values)
                            }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <div className={styles.login_form__inputs}>
                                        <label>Nombre</label>
                                        <Field name="nombre" type="text" />
                                        {errors.nombre && touched.nombre ? (
                                            <div className={styles.login_error}>
                                                {errors.nombre}
                                            </div>
                                        ) : null}
                                    </div>

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
                                    </div >

                                    <div className={styles.login_form__inputs}>
                                        <label>Vuelva a escribir la contraseña</label>
                                        <Field name="pass2" type="password" autoComplete="off" />
                                        {errors.pass2 && touched.pass2 ? (
                                            <div className={styles.login_error}>
                                                {errors.pass2}
                                            </div>
                                        ) : null}
                                    </div>

                                    <button className={styles.login_continue__btn} type="submit">
                                        Create account
                                    </button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;