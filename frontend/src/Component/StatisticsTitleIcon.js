import React from "react";
import styles from "../style/Statistics.module.css";


export default function StatisticsTitleIcon({title}) {
    return (
        <span className={styles.titleIcon}>{title}</span>
    )
}