import React from 'react';
import styles from './../style/NextMatch.module.css'
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'



export default function NextMatch ({match}){
    return(
        <div className={styles.wrapper}>
            <div className={styles.item__data}>
                <span>{match.data.day} {match.data.month} 2020</span>
            </div>
            <div className={styles.item__wrapper}>
                    <div className={styles.item__wrapper__logo}>
                        <img src={clubLogo1} alt=""/>
                    </div>
                    <div className={styles.item__wrapper__teamName}>
                        <span>{match.namesClub.firstClub}</span>
                    </div>
                    <div className={styles.item__wrapper__versus}>
                        <span>Vs</span>
                    </div>
                    <div className={styles.item__wrapper__teamName}>
                        <span>{match.namesClub.secondClub}</span>
                    </div>
                    <div className={styles.item__wrapper__logo}>
                        <img src={clubLogo2} alt=""/>
                    </div>
            </div>
        </div>
    )
}