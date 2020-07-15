import styles from "../../style/InnerComponent.module.css";
import React from "react";
import cn from "classnames";
import {Form, Radio, TimePicker,DatePicker,Input} from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
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
export const makeField = Component => ({ input, meta,children,hasFeedback, label, ...rest }) => {
    const hasError = meta.touched && meta.invalid;
    return (
        <FormItem
            {...formItemLayout}
            label={label}
            validateStatus={hasError ? "error" : "success"}
            hasFeedback={hasFeedback && hasError}
            help={hasError && meta.error}
            className={styles.formItem}
        >
            <Component
                {...input}
                {...rest}
                children={children}
                format={rest.defaultData? rest.defaultData._f: null}
                size={'large'}
                value={rest.defaultValue}
                className={styles.fieldComponent}
            />
        </FormItem>
    );
};
export const ADatePicker = makeField(DatePicker);
export const ATimePicker = makeField(TimePicker);
export const AInput = makeField(Input);
export const ARadioGroup = makeField(RadioGroup);









export const renderInput = ({input, label, type,placeholder,defaultValue, meta: {touched, error, warning}, ...props}) => (
    <div className={styles.fieldInput}>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} value={defaultValue} type={type} {...props}  className={cn({[styles.inputError]:touched},styles.input)}/>
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
    </div>)