import styles from "../../style/InnerComponent.module.css";
import React from "react";
import cn from "classnames";


export const Input = ({input, label, type,placeholder, meta: {touched, error, warning}, ...props}) => (
    <div className={styles.fieldInput}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} {...props}  className={cn({[styles.inputError]:touched},styles.input)}/>
            {touched &&
            ((error && <span className={styles.error}>{error}</span>) ||
                (warning && <span className={styles.warning}>{warning}</span>))}
        </div>
    </div>
)


export const renderFieldStatistic = ({ input, label,placeholder, type, meta: { touched, error } }) => (
    <div className={styles.fieldStatistic}>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={placeholder} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
)