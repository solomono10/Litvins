import React from 'react';
import styles from './../style/InfoMatch.module.css'
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";
import moment from 'moment';

export default function InfoMatch({match}) {
    const matchData = moment(match.dateTime).format('MMM Do').split(' ')
    return (
        <div className={styles.item}>
            <div className={styles.item_info}>
                <div className={styles.item_data}>
                    <span>{matchData[1]}</span>
                    <span>{matchData[0]}</span>
                </div>
                <div className={styles.item_nameAnLogo}>
                    <img src={clubLogo1} alt=""/>
                    {match.game === 'home'?<span>{match.team}</span>:<span>{match.opposingTeam}</span>}
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
                    {match.game === 'exit'?<span>{match.team}</span>:<span>{match.opposingTeam}</span>}
                    <img src={clubLogo2} alt=""/>
                </div>
                <div className={styles.item_location}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    {/*<span>{match.location}</span>*/}
                </div>
            </div>
            <div className={styles.item_viewWrap}>
                <NavLink to={`/list-matches/match/`+ match._id}>View</NavLink>
            </div>
        </div>
    )
}