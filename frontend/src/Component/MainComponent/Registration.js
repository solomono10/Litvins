import React from "react";
import styles from './../../style/Registration.module.css'
import {Field, FormSection, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../redux/AuthReducer";
import {Input} from "../FormsControls/FormsControls";
import {required} from "../FormsControls/validation";
import {Redirect} from "react-router-dom";
import {Birthday, Name} from "../FormsControls/FormsComponent";

const RegistrationForm = (props) => {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
            <FormSection name=''>
                <FormSection name={'name'}>
                    <Name/>
                </FormSection>
                <FormSection name={'birthday'}>
                    <span>Birthday</span>
                    <Birthday/>
                </FormSection>
                <Field name='email' type='text' component={Input} label='Your email' validate={[required]}/>
                <Field name='password' type='password' component={Input} label='Your password' validate={[required]}/>
            </FormSection>
            <button type="submit">Next</button>
        </form>
    )
}
const RegistrationReduxForm = reduxForm({
    form: 'Registration',
})(RegistrationForm);

export default function Registration() {
    // const player = useSelector(state => state.authPage.playerId)
    const isAuth = useSelector(state => state.authPage.isAuth)
    const dispatch =useDispatch()
    const onSubmit = (formData) => {
        dispatch(registration(formData))
    }
    if (isAuth){
        return <Redirect to={"/"} />;
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                Registration
                <RegistrationReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
