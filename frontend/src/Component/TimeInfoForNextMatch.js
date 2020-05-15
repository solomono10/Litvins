import React from 'react';
import styles from "../style/TimeInfoForNextMatch.module.css";
import clubLogo1 from "../logo/club-logo.png";
import clubLogo2 from "../logo/club-logo1.png";
import cn from 'classnames'


export default function TimeInfoForNextMatch({match, header}) {
    return (
    <div className={styles.wrapper}>
        <div className={cn({[styles.listItem]:header},styles.container__singleNextMatch__listItem)}>
            <div className={cn({[styles.count]:header},styles.container__singleNextMatch__listItem__count)}>
                <div className={ cn({[styles.container]:header},styles.container__singleNextMatch__listItem__count__container)}>
                    <span className={styles.count__container__number}>7</span>
                    <span className={styles.count__container__word}>days</span>
                    <span className={styles.count__container__separator}>:</span>
                    <span className={styles.count__container__number}>08</span>
                    <span className={styles.count__container__word}>hrs</span>
                    <span className={styles.count__container__separator}>:</span>
                    <span className={styles.count__container__number}>26</span>
                    <span className={styles.count__container__word}>min</span>
                    <span className={styles.count__container__separator}>:</span>
                    <span className={styles.count__container__number}>40</span>
                    <span className={styles.count__container__word}>sec</span>
                </div>
            </div>
        </div>

        <div className={styles.container__singleNextMatch__listItem__aboutMatch}>
            <div className={styles.container__singleNextMatch__listItem__aboutMatch__info}>
                <div className={cn({[styles.logo]:header},styles.container__singleNextMatch__listItem__aboutMatch__info__logo)}>
                    <img src={clubLogo1} alt=""/>
                </div>
                <div className={cn({[styles.teamName]:header},styles.container__singleNextMatch__listItem__aboutMatch__info__teamName)}>
                    <span>England</span>
                </div>
                <div className={styles.container__singleNextMatch__listItem__aboutMatch__info__versus}>
                    <span>Vs</span>
                </div>
                <div className={cn({[styles.teamName]:header},styles.container__singleNextMatch__listItem__aboutMatch__info__teamName)}>
                    <span>Amsterdam</span>
                </div>
                <div className={cn({[styles.logo]:header},styles.container__singleNextMatch__listItem__aboutMatch__info__logo)}>
                    <img src={clubLogo2} alt=""/>
                </div>
            </div>
            <div className={cn({[styles.infoDate]:header},styles.container__singleNextMatch__listItem__aboutMatch__infoDate)}>
                <span>March 29, 2020 | 12.15 am</span>
            </div>
            <div className={cn({[styles.infoLocation]:header},styles.container__singleNextMatch__listItem__aboutMatch__infoLocation)}>
                <address>СШ №180 Радужная 8/3</address>
            </div>
        </div>
    </div>
    )
}