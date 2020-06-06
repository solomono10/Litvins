import styles from "../../style/Registration.module.css";
import {Field} from "redux-form";
import React from "react";
import {required} from "./validation";

const optionsMouth = ['Jan', 'Fab', 'March']
const optionsDay = []
const optionsYear = []
for (let i = 1; i <= 31; i++) {
    optionsDay.push(i)
}
for (let i = 1901; i <= 2004; i++) {
    optionsYear.push(i)
}

export const Birthday = () => {
    return <div className={styles.brth_container}>
        <Field name="day" component='select' validate={[required]} >
            <option>{'Day'}</option>
            {optionsDay.map((option) => {
                return <option value={option} key={option}>{option}</option>
            })}
        </Field>
        <Field name="mouth" component='select' validate={[required]}>
            <option>{'Mouth'}</option>
            {optionsMouth.map((option) => {
                return <option value={option} key={option} >{option}</option>
            })}
        </Field>
        <Field name="year" component='select' validate={[required]}>
            <option>{'Year'}</option>
            {optionsYear.reverse().map((option) => {
                return <option value={option} key={option}>{option}</option>
            })}
        </Field>
    </div>
}
export const Name = () => {
    return <div>
        <Field name='firstName' type='text' component={Input} label='Your first name' validate={[required]}/>
        <Field name='lastName' type='text' component={Input} label='Your last name' validate={[required]}/>
    </div>
}

export const Input = ({input, label, type, meta: {touched, error, warning}, ...props}) => (
    <div className={styles.fieldInput}>
        <label>{label}:</label>
        <div>
            <input {...input} placeholder={label} type={type} {...props}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)