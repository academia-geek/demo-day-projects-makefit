import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { registerAsync } from '../Redux/actions/actionRegister';

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
        <div>

            <div >
            <Link to="/">LOGO MAKEFIT </Link>
            </div>

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
                            <div>
                                <h1>Crear cuenta</h1>
                            </div>

                            <div>
                                <label>Nombre</label>
                                <Field name="nombre" type="text" />
                                {errors.nombre && touched.nombre ? (
                                    <div style={{ color: "red", fontSize: "13px" }}>
                                        {errors.nombre}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label>Email</label>
                                <Field name="email" type="text" />
                                {errors.email && touched.email ? (
                                    <div style={{ color: "red", fontSize: "13px" }}>
                                        {errors.email}
                                    </div>
                                ) : null}
                            </div>

                            <div>
                                <label>Contraseña</label>
                                <Field name="password" type="password" autoComplete="off" />
                                {errors.password && touched.password ? (
                                    <div style={{ color: "red", fontSize: "13px" }}>
                                        {errors.password}
                                    </div>
                                ) : null}
                                <h5>
                                    <i className="fa-solid fa-info"></i>
                                    La contraseña debe contener al menos seis caracteres.
                                </h5>
                            </div>

                            <div>
                                <label>Vuelva a escribir la contraseña</label>
                                <Field name="pass2" type="password" autoComplete="off" />
                                {errors.pass2 && touched.pass2 ? (
                                    <div style={{ color: "red", fontSize: "13px" }}>
                                        {errors.pass2}
                                    </div>
                                ) : null}
                            </div>

                            <button type="submit">
                                Registrarse
                            </button>

                            <div>
                                <h1>Al crear un cuenta, aceptas las
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

            <div>
                <h1 ><span>¿Ya tienes una cuenta?</span></h1>
                <Link to="/login"><button>Inicia sesión</button></Link>
            </div>
        </div>
    );
};

export default Register;