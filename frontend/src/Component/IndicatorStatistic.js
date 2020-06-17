import React from "react";
import styles from './../style/IndicatorStatistic.module.css'


export function IndicatorStatistic({style}) {
    return <div className={styles.skill}>
        <p className={styles.bar_title}>
            Скорость
            <span className={styles.percent}>50%</span>
        </p>
        <div className={styles.bar}>
            <div className={styles.bar_fill} style={{width:'50%'}}></div>
        </div>
    </div>
}