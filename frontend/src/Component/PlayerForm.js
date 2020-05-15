import {Field, reduxForm} from "redux-form";
import React from "react";
import styles from './../style/Team.module.css'

const renderField = ({input, label, type, meta: {touched, error, warning}}) => (
    <div className={styles.fieldInput}>
        <label>{label}:</label>
        <div>
            <input {...input} placeholder={label} type={type}/>
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
)


let PlayerForm = props => {
    const {handleSubmit} = props;
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <Field name='firstName' type='text' component={renderField} label='First Name'/>
                <Field name='lastName' type='text' component={renderField} label='Last Name'/>

                <div>
                    <label htmlFor="">First Name:</label>
                    <Field name='position' component='select' type='text'>
                        <option/>
                        <option>Defenders</option>
                        <option>Midfielders</option>
                        <option>Forwards</option>
                        <option>Goalkeepers</option>
                    </Field>
                </div>
                <Field name='playerNumber' type='text' component={renderField} label='Player Number'/>
                <div>
                    <label htmlFor="hasEmail">Captain</label>
                    <Field
                        name="captain"
                        id="captain"
                        component="input"
                        type="checkbox"
                    />
                    <span>/</span>
                    <label htmlFor="hasEmail">Captain's Assistant</label>
                    <Field
                        name="captainAssistant"
                        id="captainAssistant"
                        component="input"
                        type="checkbox"
                    />
                </div>
            </div>
            <button type='submit'>Submit</button>
        </form>)
};

export default PlayerForm = reduxForm({
    form: 'player'
})(PlayerForm);