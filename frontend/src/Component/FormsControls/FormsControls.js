import styles from "../../style/InnerComponent.module.css";
import React from "react";
import cn from "classnames";
import {Form} from 'antd';



const FormItem = Form.Item;
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
    },
    wrapperCol: {
        xs: { span: 50 },
        sm: { span: 50 }
    }
};

export const makeField = Component => ({ input, meta, children, hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <FormItem
            {...formItemLayout}
            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
        >
            <Component
                {...input}
                {...rest}
                children={children}
                format={'DD-MM-YYYY'}
                size={'large'}
                className={styles.fieldComponent}
            />
        </FormItem>
    );
};




export const renderInput = ({input, label, type,placeholder, meta: {touched, error, warning}, ...props}) => (
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