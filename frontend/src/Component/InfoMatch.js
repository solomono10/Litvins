import React from 'react';
import styles from './../style/InfoMatch.module.css'
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";


export default function InfoMatch({match}) {
    console.log(match)
    return (
        <div className={styles.item}>
            <div className={styles.item_info}>
                <div className={styles.item_data}>
                    <span>{match.data.day}</span>
                    <span>{match.data.month}</span>
                </div>
                <div className={styles.item_nameAnLogo}>
                    <img src={clubLogo1} alt=""/>
                    <span>{match.namesClub.firstClub}</span>
                </div>
                <div className={styles.item_separator}>
                    {match.score ?
                        <div className={styles.item_score}>
                            <span>{match.scoreValue.firstValue}</span>
                            <span>:</span>
                            <span>{match.scoreValue.secondValue}</span>
                        </div> :
                        <div className={styles.item_versus}>
                            <span>Vs</span>
                        </div>}
                </div>
                <div className={styles.item_nameAnLogo}>
                    <span>{match.namesClub.secondClub}</span>
                    <img src={clubLogo2} alt=""/>
                </div>
                <div className={styles.item_location}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    <span>{match.location}</span>
                </div>
            </div>
            <div className={styles.item_viewWrap}>
                <NavLink to={`/list-matches/match/`+ match.id}>View</NavLink>
            </div>
        </div>
    )
}