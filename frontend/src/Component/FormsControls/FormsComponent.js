import styles from "../../style/FormsComponent.module.css";
import {Field, FieldArray} from "redux-form";
import {required} from "./validation";
import React from "react";
import {Input, renderFieldStatistic} from "./FormsControls";

const optionsMouth = ['Сентябрь', 'Октябрь', 'Ноябрь']
const optionsPosition = ['Goalkeepers', 'Defenders', 'Midfielders', 'Forward']
const optionsDay = []
const optionsNumber = []
const optionsYear = []
for (let i = 1; i <= 31; i++) {
    optionsDay.push(i)
}
for (let i = 1; i <= 99; i++) {
    optionsNumber.push(i)
}
for (let i = 1901; i <= 2004; i++) {
    optionsYear.push(i)
}

export const Birthday = () => {
    return <div className={styles.selects}>
        <Field name="mouth" component='select' validate={[required]}>
            <option className={styles.title}>{'Месяц'}</option>
            {optionsMouth.map((option) => {
                return <option className={styles.option} value={option} key={option}>{option}</option>
            })}
        </Field>
        <Field name="day" component='select' validate={[required]}>
            <option>{'День'}</option>
            {optionsDay.map((option) => {
                return <option value={option} key={option}>{option}</option>
            })}
        </Field>
        <Field name="year" component='select' validate={[required]}>
            <option>{'Год'}</option>
            {optionsYear.reverse().map((option) => {
                return <option value={option} key={option}>{option}</option>
            })}
        </Field>
    </div>
}
export const Name = () => {
    return <div>
        <Field name='firstName' type='text' component={Input} label='Имя' placeholder='Иван' validate={[required]}/>
        <Field name='lastName' type='text' component={Input} label='Фамилия' placeholder='Иванов'
               validate={[required]}/>
    </div>
}
export const InfoAbout = () => {
    return <div className={styles.infoAbout}>
        <div className={styles.inputSelects}>
            <div className={styles.select}>
                <span>Позиция</span>
                <Field name="position" component='select' validate={[required]}>
                    <option className={styles.title}>{'Выберите'}</option>
                    {optionsPosition.map((option) => {
                        return <option className={styles.option} value={option} key={option}>{option}</option>
                    })}
                </Field>
            </div>
            <div className={styles.select}>
                <span>Номер</span>
                <Field name="numberPlayer" component='select' validate={[required]}>
                    <option className={styles.title}>{'Выберите'}</option>
                    {optionsNumber.map((option) => {
                        return <option className={styles.option} value={option} key={option}>{option}</option>
                    })}
                </Field>
            </div>
        </div>
        <Field name='height/weight' type='text' component={Input} label='Рост/Вес' placeholder='180/72'
               validate={[required]}/>
    </div>
}
export const Statistic = () => {
    return <div className={styles.wrapStatistic}>
            <Field name='speed' type='text' component={renderFieldStatistic} label='Скорость' placeholder='75'
                   validate={[required]}/>
            <Field name='protection' type='text' component={renderFieldStatistic} label='Защита' placeholder='62'
                   validate={[required]}/>
            <Field name='feed' type='text' component={renderFieldStatistic} label='Подача' placeholder='90'
                   validate={[required]}/>
            <Field name='dribble' type='text' component={renderFieldStatistic} label='Дриблинг' placeholder='80'
                   validate={[required]}/>
            <Field name='transfer' type='text' component={renderFieldStatistic} label='Передача' placeholder='70'
                   validate={[required]}/>
            <Field name='physicalData' type='text' component={renderFieldStatistic} label='Физ. данные' placeholder='85'
                   validate={[required]}/>
    </div>
}
