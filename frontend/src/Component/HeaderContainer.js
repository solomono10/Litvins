import React from 'react';
import styles from "../style/HeaderContainer.module.css";
import {NavLink} from "react-router-dom";
import TimeInfoForNextMatch from "./TimeInfoForNextMatch";
import cn from 'classnames'

export default function HeaderContainer({teams={}, game, activeLink, link, childrenLink = null, extraInfo, header,dateTime}) {
    return (
        <div className={styles.headerContainer}>
            <div className={cn({[styles.header]: !extraInfo}, styles.headerContainer__title)}>
                {game === 'home' ?
                    <h1>
                        <span>{teams[0]} </span>
                        <span>{teams[1]}</span>
                    </h1>
                    : <h1>{teams[1]} {teams[0]}</h1>}
            </div>
            {extraInfo ?
                <div className={styles.headerContainer__extraInfo}>
                    <TimeInfoForNextMatch header={header} nextMatch={extraInfo} dateTime={dateTime} />
                </div>
                : null}
            <div className={styles.breadcrumb}>
                <div className={styles.breadcrumb__link}>
                    <NavLink to='/'>
                        <span className={styles.buttonText}>Главная</span>
                    </NavLink>
                </div>
                <div className={styles.breadcrumb__other}>
                    {childrenLink === null ?
                        <span className={styles.active}>{activeLink}</span>
                        : <NavLink to={`/${link}`} className={styles.activeLink}><span>{activeLink}</span></NavLink>
                    }
                </div>
                {
                    childrenLink !== null ?
                        <div className={styles.breadcrumb__other}>
                            <span className={styles.active}>{childrenLink}</span>
                        </div>
                        : null
                }
            </div>
        </div>
    )
}