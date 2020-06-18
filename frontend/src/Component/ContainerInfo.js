import React from "react";
import styles from './../style/InfoPlayer.module.css'


export function ContainerInfo({title,value}) {
    return <div className={styles.infoPlayerWrap}>
        <span>{value}</span>
        <span>{title}</span>
    </div>
}