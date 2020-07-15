import React, {useEffect, useRef, useState} from "react";
import styles from "../style/TimeInfoForNextMatch.module.css";


export default function TimerComponent({dateTime}) {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')
    let internal = useRef()
    const startTimer = () => {

        const countdownDate = new Date(dateTime?dateTime:0).getTime()

        internal = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                //stop our timer
                clearInterval(internal.current)
            } else {
                setTimerDays(days)
                setTimerHours(hours)
                setTimerMinutes(minutes)
                setTimerSeconds(seconds)
            }
        }, 1000)
    };
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(internal.current)
        }

    })
    return (
        <section>
            <span className={styles.count__container__number}>{timerDays}</span>
            <span className={styles.count__container__word}>days</span>
            <span className={styles.count__container__separator}>:</span>
            <span className={styles.count__container__number}>{timerHours}</span>
            <span className={styles.count__container__word}>hrs</span>
            <span className={styles.count__container__separator}>:</span>
            <span className={styles.count__container__number}>{timerMinutes}</span>
            <span className={styles.count__container__word}>min</span>
            <span className={styles.count__container__separator}>:</span>
            <span className={styles.count__container__number}>{timerSeconds}</span>
            <span className={styles.count__container__word}>sec</span>
        </section>
    )
}