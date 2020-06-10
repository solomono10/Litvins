import React from "react";
import styles from './../../style/LogOut.module.css'
import {useDispatch} from "react-redux";
import {logOut} from "../../redux/AuthReducer";

export default function LogOut() {
    const dispatch = useDispatch()
    return <div className={styles.wrapper}>
        <div className={styles.container}>
            <h1>LogOut</h1>
            <button onClick={()=> dispatch(logOut())}>Log Out</button>
        </div>
    </div>
}
