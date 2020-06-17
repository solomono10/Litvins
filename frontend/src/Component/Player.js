import React from 'react';
import styles from './../style/Player.module.css'
import {NavLink, Redirect} from "react-router-dom";
import avatar from './../logo/f401649c954a6ca111acf083eac616cf.jpg'
import {IndicatorPlayer} from "./IndicatorPlayer";

export default function Player({player}) {

    return (
        <div className={styles.playerArticle}>
            <div className={styles.number}>
                <span>{player.numberPlayer}</span>
            </div>
            <div className={styles.container}>
                <div className={styles.avatar}>
                    <img src={avatar} alt=""/>
                </div>
                <div className={styles.name}>
                    <NavLink to={'/team/player/' + player.id}>{player.name}</NavLink>
                    <span>Фамилия</span>
                </div>
                <div className={styles.position}>
                    <span>{player.position}</span>
                </div>
                <div className={styles.indicators}>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                    <IndicatorPlayer/>
                </div>
            </div>
        </div>
    )
}
// <NavLink to={'/team/player/' + player.id}></NavLink>
