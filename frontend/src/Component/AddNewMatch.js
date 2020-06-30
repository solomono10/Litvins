import {Field, reduxForm} from "redux-form";
import React, {useState} from "react";
import styles from './../style/AddNewMatch.module.css'
import {useDispatch} from "react-redux";
import {required} from "./FormsControls/validation";
import {ACheckbox, ADatePicker, makeField, renderInput} from "./FormsControls/FormsControls";
import {ARangePicker} from "./MainComponent/Registration";
import moment from 'moment';


let NewMatchForm = ({handleSubmit, onCheck, matchHome}) => {
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <div className={styles.dateAndTime}>
                    <Field
                        name="matchDay"
                        component={ARangePicker}
                        placeholder={'Match Day'}
                        hasFeedback
                        validate={[required]}
                        onFocus={e => e.preventDefault()}
                        onBlur={e => e.preventDefault()}
                    />
                    <Field
                        name="time"
                        component={ADatePicker}
                        placeholder={'Time'}
                        hasFeedback
                        defaultValue={moment('00:00:00', 'HH:mm')}
                        validate={[required]}
                        onFocus={e => e.preventDefault()}
                        onBlur={e => e.preventDefault()}
                    />
                </div>
                <div className={styles.check}>
                    <span>Матч будет проходить дома:</span>
                    <Field
                        name="MatchHome"
                        component={ACheckbox}
                        hasFeedback
                        validate={[required]}
                        // defaultValue={matchHome}
                        onFocus={e => e.preventDefault()}
                        onBlur={e => e.preventDefault()}
                        onChange={onCheck}
                    />
                    {
                        matchHome ?
                            <div className={styles.match}>
                                <Field name='firstTeam' type='text' component={renderInput} defaultValue={'Лицвины'} validate={[required]}/>
                                <Field name='secondTeam' type='text' component={renderInput} placeholder='противники'
                                       validate={[required]}/>
                            </div> : null
                    }
                </div>


                <button onClick={handleSubmit}>Add New Match</button>
            </form>
        </div>)
};

const AddNewMatchForm = reduxForm({
    form: 'NewMatch'
})(NewMatchForm);


export default function AddNewMatch({onAddMatchBtn}) {
    const [matchHome, setCheck] = useState(false)

    const onCheck = () => {
        setCheck(!matchHome)
    }
    const dispatch = useDispatch()
    const onSubmit = (formData) => {
        // dispatch()
        console.log(formData)
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <button onClick={onAddMatchBtn}>X</button>
                <AddNewMatchForm onSubmit={onSubmit} onCheck={onCheck} matchHome={matchHome}/>
            </div>
        </div>
    )
}