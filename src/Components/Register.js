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
        .min(3, 'The name must have at least 2 characters')
        .max(50, 'The name must have a maximum of 50 characters')
        .required('This field is required'),
    email: Yup.string()
        .email('Enter a valid email')
        .required('This field is required'),
    password: Yup.string()
        .min(6, 'The password must be at least 6 characters')
        .max(50, 'The password must have a maximum of 50 characters')
        .required('This field is required'),
    pass2: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords do not match')
        .required('This field is required'),
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
                                        <label>Password</label>
                                        <Field name="password" type="password" autoComplete="off" />
                                        {errors.password && touched.password ? (
                                            <div className={styles.login_error}>
                                                {errors.password}
                                            </div>
                                        ) : null}
                                    </div >

                                    <div className={styles.login_form__inputs}>
                                        <label>Enter the password again</label>
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