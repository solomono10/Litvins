import React from 'react';
import styles from './../style/LatestResult.module.css'
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import {NavLink} from "react-router-dom";


export default function LatestResult({lastMatch}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.block__center}>
                <div className={styles.block__center__top}>
                    <h3>Latest <span>Results</span></h3>
                    <div className={styles.block__center__top__location}>
                        <address>
                            {lastMatch.location}
                        </address>
                    </div>
                    <div className={styles.block__center__top__data}>
                        {lastMatch.data && lastMatch.data.day} {lastMatch.data && lastMatch.data.month}, 2020 | 12:15 pm
                    </div>
                </div>
            </div>
            <div className={styles.block__result}>
                <div className={styles.block__result_container}>
                    <div className={styles.block__result__center}>
                        <img src={clubLogo1} alt=""/>
                    </div>
                    <div className={styles.block__result__center__nameClub}>
                        <span>{lastMatch.namesClub && lastMatch.namesClub.firstClub}</span>
                    </div>
                    <div className={styles.block__result__center__score}>
                        <div className={styles.block__result__center__score__title}>
                            <span>score</span>
                        </div>
                        <div className={styles.block__result__center__score__table}>
                            <div className={styles.block__result__center__score__table__left}>
                                <span>{lastMatch.scoreValue && lastMatch.scoreValue.firstValue}</span>
                            </div>
                            <div className={styles.block__result__center__score__table__right}>
                                <span>{lastMatch.scoreValue && lastMatch.scoreValue.secondValue}</span>
                            </div>
                            <div className={styles.block__result__center__score__table__clearfix}></div>
                        </div>
                    </div>
                    <div className={styles.block__result__center__nameClub}>
                        <span>{lastMatch.namesClub && lastMatch.namesClub.secondClub}</span>
                    </div>
                    <div className={styles.block__result__center}>
                        <img src={clubLogo2} alt=""/>
                    </div>
                </div>
            </div>
            <div className={styles.block__center}>
                <div className={styles.block__center__bottom}>
                    <div className={styles.block__center__bottom__text}>
                        <span>
                            Vivamus hendrerit, tortor sed luctus maximus, nunc urna hendrerit nibh, sit amet
                            efficitur libero lorem quis mauris. Nunc a pulvinar lectus. Pellentesque aliquam
                        </span>
                    </div>
                    <div className={styles.block__center__bottom__button}>
                        <NavLink to={`/list-matches/match/`+ lastMatch.id}><span>More info</span></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}