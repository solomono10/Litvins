import React from 'react';
import styles from './../style/NextMatchs.module.css'
import NextMatch from "./NextMatch";
import TimeInfoForNextMatch from "./TimeInfoForNextMatch";
export default function NextMatches({listMatches,nextMatch}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.container__singleNextMatch}>
                    <div className={styles.container__singleNextMatch__title}>
                        <span className={styles.container__singleNextMatch__title_value}>Next <span>Match</span></span>
                    </div>
                    <TimeInfoForNextMatch nextMatch={nextMatch}/>
                </div>
                <div className={styles.container__listNextMatch}>
                    {
                        listMatches.map((match)=>{
                            return <NextMatch match={match} key={match.id}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}