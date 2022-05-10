import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from "../Styles/Login_Register/Login.module.scss";
import Logo from "../Styles/Images/logo-black.png";
import loginImg from "../Styles/Images/loginimg.png";
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import Swal from 'sweetalert2';

const SignupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Ingrese un correo válido')
        .required('Este campo es obligatorio'),
});

const RestorePass = () => {

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
                    <h1>Restore your password</h1>
                    <h2>
                        Complete the following fields to reset your password.
                    </h2>
                    <h3>
                        do you remember your password?
                        <Link to="/login"><button>Login here.</button></Link>
                    </h3>
                </div>


                <div className={styles.login_form__container}>
                    <div>
                        <Formik
                            initialValues={{
                                email: "",
                            }}
                            validationSchema={SignupSchema}
                            onSubmit={(values) => {
                                const auth = getAuth();
                                sendPasswordResetEmail(auth, values.email);
                                Swal.fire({
                                    title: 'Email sent',
                                    text: 'Check your email to reset your password',
                                    icon: 'success',
                                });
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

                                    <button className={styles.login_continue__btn} type="submit">
                                        Send email
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

export default RestorePass;
