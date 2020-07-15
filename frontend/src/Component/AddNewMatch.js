import {Field, reduxForm} from "redux-form";
import React, {useState} from "react";
import styles from './../style/AddNewMatch.module.css'
import {useDispatch} from "react-redux";
import {Button, Radio} from 'antd';
import {ADatePicker, AInput, ARadioGroup, ATimePicker, renderInput} from "./FormsControls/FormsControls";
import {required} from "./FormsControls/validation";
import moment from 'moment';
import {AddMatch} from "../redux/MatchsReducer";


let NewMatchForm = ({handleSubmit, onCheck, placeMatch,initialValues}) => {
    return (
        <form onSubmit={handleSubmit}>
             <div className={styles.dateAndTime}>
                 <Field
                     name="matchDate"
                     component={ADatePicker}
                     placeholder={'Match Day'}
                     hasFeedback
                     defaultData={moment().format('DD/MM/YYYY')}
                     validate={[required]}
                     onFocus={e => e.preventDefault()}
                     onBlur={e => e.preventDefault()}
                 />
                 <Field
                     name="time"
                     component={ATimePicker}
                     placeholder={'Time'}
                     hasFeedback
                     defaultData={moment().format('HH:mm')}
                     validate={[required]}
                     onFocus={e => e.preventDefault()}
                     onBlur={e => e.preventDefault()}
                 />
             </div>
             <div className={styles.check}>
                 <div className={styles.title}>
                     <span>Матч будет проходить:</span>
                     <Field name="game" component={ARadioGroup} value="game" >
                         <Radio value="home" onClick={onCheck}>Home</Radio>
                         <Radio value="exit" onClick={onCheck}>Exit</Radio>
                     </Field>
                 </div>
                 {
                     placeMatch === 'home' ? <PlayHome initialValues={initialValues}/> :placeMatch === 'exit'? <PlayExit initialValues={initialValues}/> :null
                 }
             </div>
                <Button type="primary" htmlType="submit" style={{ marginRight: "10px" }} onClick={handleSubmit}>
                    Add Match
                </Button>
        </form>
    )
};
const AddNewMatchForm = reduxForm({
    form: 'myForm',
    initialValues:{
        team: 'Литвины'
    },
    destroyOnUnmount: false,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(NewMatchForm);
export default function AddNewMatch({onAddMatchBtn,success}) {
    const [placeMatch, setPlaceMatch] = useState('')
    const dispatch = useDispatch()

    const onCheck = (e) => {
        const value = e.currentTarget.value
        setPlaceMatch(value)

    }
    const onSubmit = (formData) => {
        dispatch(AddMatch(formData))
        onAddMatchBtn()
        success()
    }

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <button className={styles.buttonClose} onClick={onAddMatchBtn}>X</button>
                <AddNewMatchForm onSubmit={onSubmit}
                                 onCheck={onCheck}
                                 placeMatch={placeMatch}/>
            </div>
        </div>
    )
}
const PlayHome = ({initialValues}) =>{
    return(
        <div className={styles.match}>
            <Field
                name="team"
                component={renderInput}
                defaultValue={initialValues.team}
                onFocus={e => e.preventDefault()}
                onBlur={e => e.preventDefault()}
            />
            <Field
                name="opposingTeam"
                component={renderInput}
                validate={[required]}
                onFocus={e => e.preventDefault()}
                onBlur={e => e.preventDefault()}
                placeholder={'Команда противников'}
            />
        </div>
    )
}
const PlayExit = ({initialValues}) =>{
    return(
        <div className={styles.match}>
            <Field
                name="opposingTeam"
                component={renderInput}
                validate={[required]}
                onFocus={e => e.preventDefault()}
                onBlur={e => e.preventDefault()}
                placeholder={'Команда противников'}
            />
            <Field
                name="team"
                component={renderInput}
                defaultValue={initialValues.team}
                onFocus={e => e.preventDefault()}
                onBlur={e => e.preventDefault()}
            />
        </div>
    )
}
