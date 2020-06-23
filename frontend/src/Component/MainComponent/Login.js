import React from "react";
import styles from './../../style/Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/AuthReducer";
import {NavLink} from "react-router-dom";
import {email, required} from "../FormsControls/validation";
import {renderInput} from "../FormsControls/FormsControls";


const LoginForm = (props) => {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
            <Field name='email' component={renderInput} placeholder='ivaninanov@mail.ru' type='text' label='Почта' validate={[required, email]}/>
            <Field name='password' component={renderInput}  placeholder='Введите пароль' type='password' label='Пароль' validate={[required]}/>
            <button type={"submit"} className={styles.button}>Войти</button>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: 'Login',
})(LoginForm);
export default function Login() {
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        dispatch(logIn(formData.login, formData.password))
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {/*<button><NavLink to={'/'}>X</NavLink></button>*/}
                {/*<h1>Login</h1>*/}
                <LoginReduxForm onSubmit={onSubmit}/>
                <NavLink to='/registration'>Зарегистрироваться</NavLink>
            </div>
        </div>
    )
}