import React from "react";
import styles from './../../style/Registration.module.css'
import {Field, FormSection, reduxForm} from "redux-form";
import {useDispatch, useSelector} from "react-redux";
import {registration} from "../../redux/AuthReducer";
import {makeField, renderInput} from "../FormsControls/FormsControls";
import {required} from "../FormsControls/validation";
import {Redirect} from "react-router-dom";
import {InfoAbout, Name, Statistic} from "../FormsControls/FormsComponent";
import {DatePicker, Input, Space} from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import moment from 'moment';

export const ARangePicker = makeField(DatePicker);

const RegistrationForm = ({handleSubmit}) => {
    return (
        <form action="" className={styles.form} onSubmit={handleSubmit}>
            <FormSection name={'name'}>
                <div className={styles.name}>
                    <Name/>
                </div>
            </FormSection>
            <FormSection name={'birthday'}>
                <div className={styles.birthday}>
                    <span className={styles.birthdayTitle}>Дата рождения</span>
                    {/*<Field*/}
                    {/*    name="birthdayDay"*/}
                    {/*    component={ARangePicker}*/}
                    {/*    placeholder={'You birthday'}*/}
                    {/*    format={'DD-MM-YYYY'}*/}
                    {/*    hasFeedback*/}
                    {/*    validate={[required]}*/}
                    {/*    onFocus={e => e.preventDefault()}*/}
                    {/*    onBlur={e => e.preventDefault()}*/}
                    {/*/>*/}
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
            <FormSection name={'personalData'}>
                <div className={styles.personalData}>
                    <Field name='email' type='text' component={renderInput} label='Почта' placeholder='ivaninanov@mail.ru'
                           validate={[required]}/>

                    <Input.Password
                        placeholder="Придумайте пароль"
                        name='password' label='Пароль'
                        validate={[required]}
                        className={styles.fieldPassword}/>
                    <Input.Password
                        placeholder="Подтверждение пароля"
                        name='repeatPassword'
                        label='Подтверждение пароля'
                        validate={[required]}
                        className={styles.fieldPassword}
                    />
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
    const isAuth = useSelector(state => state.authPage.isAuth)//true or false
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        // console.log(formData)
        console.log(moment(formData.birthday.birthdayDay._d).format('MM/DD/YYYY'))
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