import React from 'react';
import styles from './../style/NextMatch.module.css'



export default function NextMatch ({data,firstLogo, secondLogo, firstTeamName,secondTeamName}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.item__data}>
                <span>{data}</span>
            </div>
            <div className={styles.item__wrapper}>
                    <div className={styles.item__wrapper__logo}>
                        <img src={firstLogo} alt=""/>
                    </div>
                    <div className={styles.item__wrapper__teamName}>
                        <span>{firstTeamName}</span>
                    </div>
                    <div className={styles.item__wrapper__versus}>
                        <span>Vs</span>
                    </div>
                    <div className={styles.item__wrapper__teamName}>
                        <span>{secondTeamName}</span>
                    </div>
                    <div className={styles.item__wrapper__logo}>
                        <img src={secondLogo} alt=""/>
                    </div>
            </div>
        </div>
    )
}