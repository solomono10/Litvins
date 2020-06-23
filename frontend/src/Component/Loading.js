import React from "react";
import styles from './../style/Loading.module.css'
import {faFutbol} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export function Loading() {
    return <div className={styles.wrap}>
       <FontAwesomeIcon icon={faFutbol} className={styles.icon}/>
    </div>

}