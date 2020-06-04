import React from "react";
import styles from './../../style/Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {renderField} from "../PlayerForm";
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/AuthReducer";
import {NavLink} from "react-router-dom";


export const validate = values => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password){
        errors.password = 'Required'
    }
    return errors
}

const LoginForm = (props) => {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
            <Field name='email' component={renderField} type='text' label='Email'/>
            <Field name='password' component={renderField} type='password' label='Password'/>
            <button type={"submit"}>Войти</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'Login',
    validate
})(LoginForm);

export default function Login() {
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        dispatch(logIn(formData.login,formData.password))
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <button><NavLink to={'/'}>X</NavLink></button>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
                <NavLink to='/registration'>Sing up</NavLink>
            </div>
        </div>
    )
}