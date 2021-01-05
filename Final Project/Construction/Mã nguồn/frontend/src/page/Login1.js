import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// import { accountService, alertService } from '../../services';

function Login1() {



    const initialValues = {
        cardCode: '',
        owner: '',
        cvvCode: '',
        dateExpire: ''
    };

    const validationSchema = Yup.object().shape({
        cardCode: Yup.string().required('Card Code is required'),
        owner: Yup.string()
            .required('owner is required'),
        cvvCode: Yup.string()
            .required('Cvv code is required'),
        dateExpire: Yup.string()
            .required('Date Expire is required'),
    });

    function onSubmit({ cardCode, cvvCode, owner, dateExpire }, { setSubmitting }) {
        let body = {
            cardCode: cardCode,
            cvvCode: cvvCode
        }
        // accountService.login(body)
        //     .then(() => {
        //         const { from } = location.state || { from: { pathname: "/" } };
        //         history.push(from);
        //     })
        //     .catch(error => {
        //         setSubmitting(false);
        //         alertService.error(error);
        //     });
    }

    return (
        <Formik initialValues={ initialValues } validationSchema={ validationSchema } onSubmit={ onSubmit }>
            {({ errors, touched, isSubmitting, values }) => (
                <Form className="form-container">
                    <div className="login__form">
                        <p className="login-header">Card Input</p>
                        <div className="ps-rl input-swapper" style={ { marginBottom: 50 } }>
                            <span className="icon--user input__icon">
                                <i className="far fa-credit-card"></i>
                            </span>
                            <Field
                                type="text"
                                className={ "form__input" + (!values.cardCode ? "" : " has-value") + (errors.cardCode && touched.cardCode ? ' is-invalid' : '') }
                                name="cardCode"
                            />
                            <span className="input__focus" data-name="Card Code"></span>
                            <ErrorMessage name="cardCode" component="div" className="invalid-feedback err" />
                        </div>
                        <div className="ps-rl input-swapper" style={ { marginBottom: 50 } }>
                            <span className="icon--user input__icon">
                                <i className="far fa-user"></i>
                            </span>
                            <Field
                                type="text"
                                className={ "form__input" + (!values.owner ? "" : " has-value") + (errors.owner && touched.owner ? ' is-invalid' : '') }
                                name="owner"
                            />
                            <span className="input__focus" data-name="Owner"></span>
                            <ErrorMessage name="owner" component="div" className="invalid-feedback err" />
                        </div>
                        <div className="ps-rl input-swapper" style={ { marginBottom: 50 } }>
                            <span className="icon--user input__icon">
                                <i className="far fa-user"></i>
                            </span>
                            <Field
                                type="text"
                                className={ "form__input" + (!values.cvvCode ? "" : " has-value") + (errors.cvvCode && touched.cvvCode ? ' is-invalid' : '') }
                                name="cvvCode"
                            />
                            <span className="input__focus" data-name="cvvCode"></span>
                            <ErrorMessage name="cvvCode" component="div" className="invalid-feedback err" />
                        </div>
                        <div className="ps-rl input-swapper">
                            <span className="icon--password input__icon">
                                <i className="fas fa-lock"></i>
                            </span>
                            <Field
                                type="text"
                                className={ "form__input is-invalid" + (!values.dateExpire ? "" : " has-value") + (errors.dateExpire && touched.dateExpire ? ' is-invalid' : '') }
                                name="dateExpire"
                            />
                            <span className="input__focus" data-name="Date Expired"></span>
                            <ErrorMessage name="dateExpire" component="div" className="invalid-feedback err" />
                        </div>
                        <div className="text-right">
                            {/* <Link to="forgot-password" className="btn btn-link pr-0">Quên mật khẩu?</Link> */ }
                        </div>
                        <button type="submit" disabled={ isSubmitting } className="btn btn-success">
                            { isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span> }
                            Login
                        </button>
                        {/* <div className="register">
                            <div className="divider"></div>
                            <p>Bạn chưa có tài khoản</p>
                            <div className="divider"></div>
                        </div> */}

                        {/* <Link to="register" className="btn btn-info btn--register">Đăng ký ngay</Link> */ }
                    </div>
                </Form>
            ) }
        </Formik>
    )
}

export default Login1; 