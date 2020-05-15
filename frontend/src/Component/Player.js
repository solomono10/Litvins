import React from 'react';
import styles from './../style/Player.module.css'
import {NavLink} from "react-router-dom";


export default function Player ({player}) {
    return(
        <div className={styles.playerArticle}>
            <div className={styles.imgWrap}>
                <div className={styles.playerNumber}><span>{player.numberPlayer}</span></div>
                <div className={styles.bio}><NavLink to={'/player/' + player.id}><span>bio</span></NavLink></div>
            </div>
            <div className={styles.info}>
                <h3><NavLink to={'/player/' + player.id}>{player.name}</NavLink></h3>
                <span>{player.position}</span>
            </div>
        </div>
    )
}