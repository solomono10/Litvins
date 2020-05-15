import React from 'react';
import styles from './../style/InfoMatch.module.css'
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {NavLink} from "react-router-dom";

export default function InfoMatch({score,match}) {
    return (
        <div className={styles.item}>
            <div className={styles.item_info}>
                <div className={styles.item_data}>
                    <span>14</span>
                    <span>Nov</span>
                </div>
                <div className={styles.item_nameAnLogo}>
                    <img src={clubLogo1} alt=""/>
                    <span>ENGLAND</span>
                </div>
                <div className={styles.item_separator}>
                    {score ?
                        <div className={styles.item_score}>
                            <span>2</span>
                            <span>:</span>
                            <span>0</span>
                        </div> :
                        <div className={styles.item_versus}>
                            <span>Vs</span>
                        </div>}
                </div>
                <div className={styles.item_nameAnLogo}>
                    <span>AMSTERDAM</span>
                    <img src={clubLogo2} alt=""/>
                </div>

                <div className={styles.item_location}>
                    <FontAwesomeIcon icon={faMapMarkerAlt}/>
                    <span>СШ №180 Радужная 8/3</span>
                </div>
            </div>
            <div className={styles.item_viewWrap}>
                <NavLink to={`/matches/`+ match.id}>View</NavLink>
            </div>
        </div>
    )
}