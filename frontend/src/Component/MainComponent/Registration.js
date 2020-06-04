import React from "react";
import styles from './../../style/Registration.module.css'
import {Field, FormSection, reduxForm} from "redux-form";
import {renderField} from "../PlayerForm";
import {validate} from "./Login";
import {useDispatch} from "react-redux";
import {registration} from "../../redux/AuthReducer";


const optionsMouth = ['Jan', 'Fab', 'March']
const optionsDay = []
const optionsYear = []
for (let i = 1; i <= 31; i++) {
    optionsDay.push(i)
}
for (let i = 1901; i <= 2004; i++) {
    optionsYear.push(i)
}
const Birthday = () => {
    return <div className={styles.brth_container}>
        <Field name="day" component='select' >
            <option>{'Day'}</option>
            {optionsDay.map((option) => {
                return <option value={option} key={option}>{option}</option>
            })}
        </Field>
        <Field name="mouth" component='select'>
            <option>{'Mouth'}</option>
            {optionsMouth.map((option) => {
                return <option value={option} key={option}>{option}</option>
            })}
        </Field>
        <Field name="year" component='select'>
            <option>{'Year'}</option>
            {optionsYear.reverse().map((option) => {
                return <option value={option} key={option}>{option}</option>
            })}
        </Field>
    </div>
}
const Name = () => {
    return <div>
        <Field name='firstName' type='text' component={renderField} label='Your first name'/>
        <Field name='lastName' type='text' component={renderField} label='Your last name'/>
    </div>
}
const RegistrationForm = (props) => {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
            <FormSection name={'name'}>
                <Name/>
            </FormSection>
            <span>Birthday</span>
            <FormSection name={'birthday'}>
                <Birthday/>
            </FormSection>
            <Field name='email' type='text' component={renderField} label='Your email'/>
            <Field name='password' type='password' component={renderField} label='Your password'/>
            <button type="submit">Next</button>
        </form>
    )
}
const RegistrationReduxForm = reduxForm({
    form: 'Registration',
    validate,
})(RegistrationForm);
export default function Registration() {
    const dispatch =useDispatch()
    const onSubmit = (formData) => {
        dispatch(registration(formData))
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
