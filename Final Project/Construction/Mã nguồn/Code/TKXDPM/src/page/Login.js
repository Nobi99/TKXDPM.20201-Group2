import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// import { accountService, alertService } from '../../services';

function Login() {
    const [passwordType, setPasswordType] = useState("password");
    const changePasswordType = () => {
        if (passwordType === 'password') {
            setPasswordType('text');
        }
        else setPasswordType('password');
    }



    const initialValues = {
        email: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    });

    // function onSubmit({ email, password }, { setSubmitting }) {
    //     let body = {
    //         username: email,
    //         password: password
    //     }
    //     accountService.login(body)
    //         .then(() => {
    //             const { from } = location.state || { from: { pathname: "/" } };
    //             history.push(from);
    //         })
    //         .catch(error => {
    //             setSubmitting(false);
    //             alertService.error(error);
    //         });
    // }

    return (
        <Formik initialValues={ initialValues } validationSchema={ validationSchema }>
            {({ errors, touched, isSubmitting, values }) => (
                <Form className="form-container">
                    <div className="login__form">
                        <p className="login-header">Đăng nhập</p>
                        <div className="ps-rl input-swapper" style={ { marginBottom: 50 } }>
                            <span className="icon--user input__icon">
                                <i className="far fa-user"></i>
                            </span>
                            <Field
                                type="email"
                                className={ "form__input" + (!values.email ? "" : " has-value") + (errors.email && touched.email ? ' is-invalid' : '') }
                                name="email"
                            />
                            <span className="input__focus" data-name="Email"></span>
                            <ErrorMessage name="email" component="div" className="invalid-feedback err" />
                        </div>
                        <div className="ps-rl input-swapper">
                            <span className="icon--password input__icon">
                                <i className="fas fa-lock"></i>
                            </span>
                            <Field
                                type={ passwordType }
                                className={ "form__input is-invalid" + (!values.password ? "" : " has-value") + (errors.password && touched.password ? ' is-invalid' : '') }
                                name="password"
                            />
                            <span className="input__focus" data-name="Password"></span>
                            <span className="toggle-password" onClick={ changePasswordType }>
                                { passwordType === "text" ? <i className="fas fa-eye"></i> : <i className="fas fa-eye-slash"></i> }
                            </span>
                            <ErrorMessage name="password" component="div" className="invalid-feedback err" />
                        </div>
                        <div className="text-right">
                            {/* <Link to="forgot-password" className="btn btn-link pr-0">Quên mật khẩu?</Link> */ }
                        </div>
                        <button type="submit" disabled={ isSubmitting } className="btn btn-success">
                            { isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span> }
                            Login
                        </button>
                        <div className="register">
                            <div className="divider"></div>
                            <p>Bạn chưa có tài khoản</p>
                            <div className="divider"></div>
                        </div>

                        {/* <Link to="register" className="btn btn-info btn--register">Đăng ký ngay</Link> */ }
                    </div>
                </Form>
            ) }
        </Formik>
    )
}

export default Login; 