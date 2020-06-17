import React from "react";
import styles from './../../style/Registration.module.css'
import {Field, FieldArray, FormSection, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../redux/AuthReducer";
import {Input} from "../FormsControls/FormsControls";
import {required} from "../FormsControls/validation";
import {Redirect} from "react-router-dom";
import {Birthday, InfoAbout, Name, Statistic} from "../FormsControls/FormsComponent";

const RegistrationForm = (props) => {
    return (
        <form action="" className={styles.form} onSubmit={props.handleSubmit}>
            <FormSection name={'name'}>
                <div className={styles.name}>
                    <Name/>
                </div>
            </FormSection>
            <FormSection name={'birthday'}>
                <div className={styles.birthday}>
                    <span>Дата рождения</span>
                    <Birthday/>
                </div>
            </FormSection>
            <FormSection name={'infoAbout'}>
                <div className={styles.infoAbout}>
                    <InfoAbout/>
                </div>
            </FormSection>
            <FormSection name={'infoStatistic'}>
                <Statistic/>
            </FormSection>

            {/*<FormSection name={'statistic'}>*/}
            {/*    <div className={styles.statistic}>*/}
            {/*       <Statistic/>*/}
            {/*    </div>*/}
            {/*</FormSection>*/}

            <FormSection name={'personalData'}>
                <div className={styles.personalData}>
                    <Field name='email' type='text' component={Input} label='Почта' placeholder='ivaninanov@mail.ru'
                           validate={[required]}/>
                    <Field name='password' type='password' component={Input} label='Пароль'
                           placeholder='Придумайте пароль' validate={[required]}/>
                    <Field name='repeatPassword' type='password' component={Input} label='Подтверждение пароля'
                           placeholder='Подтверждение пароля' validate={[required]}/>
                </div>
            </FormSection>
            <div className={styles.btn}>
                <button type="submit">Зарегистрироваться</button>
            </div>
        </form>
    )
}
const RegistrationReduxForm = reduxForm({
    form: 'Registration',
})(RegistrationForm);

export default function Registration() {
    // const player = useSelector(state => state.authPage.playerId)
    const isAuth = useSelector(state => state.authPage.isAuth)
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        console.log(formData)
        // dispatch(registration(formData))
    }
    if (isAuth) {
        return <Redirect to={"/"}/>;
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <RegistrationReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}