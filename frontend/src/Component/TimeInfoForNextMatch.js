import React, {useEffect, useRef, useState} from 'react';
import styles from "../style/TimeInfoForNextMatch.module.css";
import clubLogo1 from "../logo/club-logo.png";
import clubLogo2 from "../logo/club-logo1.png";
import cn from 'classnames'
import Timer from "react-compound-timer";
import moment from 'moment';
import TimerComponent from "./TimerComponent";


export default function TimeInfoForNextMatch({nextMatch, header, dateTime}) {
    return (
        <div className={styles.wrapper}>
            <div className={cn({[styles.listItem]: header}, styles.container__singleNextMatch__listItem)}>
                <div className={cn({[styles.count]: header}, styles.container__singleNextMatch__listItem__count)}>
                    <div
                        className={cn({[styles.container]: header}, styles.container__singleNextMatch__listItem__count__container)}>
                        <TimerComponent dateTime={dateTime}/>
                    </div>
                </div>
            </div>
            <div className={styles.container__singleNextMatch__listItem__aboutMatch}>
                <div className={styles.container__singleNextMatch__listItem__aboutMatch__info}>
                    <div
                        className={cn({[styles.logo]: header}, styles.container__singleNextMatch__listItem__aboutMatch__info__logo)}>
                        <img src={clubLogo1} alt=""/>
                    </div>
                    <div
                        className={cn({[styles.teamName]: header}, styles.container__singleNextMatch__listItem__aboutMatch__info__teamName)}>
                        <span>{nextMatch.namesClub && nextMatch.namesClub.firstClub}</span>
                    </div>
                    <div className={styles.container__singleNextMatch__listItem__aboutMatch__info__versus}>
                        <span>Vs</span>
                    </div>
                    <div
                        className={cn({[styles.teamName]: header}, styles.container__singleNextMatch__listItem__aboutMatch__info__teamName)}>
                        <span>{nextMatch.namesClub && nextMatch.namesClub.secondClub}</span>
                    </div>
                    <div
                        className={cn({[styles.logo]: header}, styles.container__singleNextMatch__listItem__aboutMatch__info__logo)}>
                        <img src={clubLogo2} alt=""/>
                    </div>
                </div>
                <div
                    className={cn({[styles.infoDate]: header}, styles.container__singleNextMatch__listItem__aboutMatch__infoDate)}>
                    <span>{nextMatch.data && nextMatch.data.month} {nextMatch.data && nextMatch.data.day}, 2020 | 12.15 am</span>
                </div>
                <div
                    className={cn({[styles.infoLocation]: header}, styles.container__singleNextMatch__listItem__aboutMatch__infoLocation)}>
                    <address>{nextMatch.location}</address>
                </div>
            </div>
        </div>
    )
}



