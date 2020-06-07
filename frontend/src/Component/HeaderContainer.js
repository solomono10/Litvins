import React from 'react';
import styles from "../style/HeaderContainer.module.css";
import {NavLink} from "react-router-dom";
import TimeInfoForNextMatch from "./TimeInfoForNextMatch";
import cn from 'classnames'

export default function HeaderContainer({title, activeLink, link, childrenLink = null, extraInfo,header}) {
    return (
        <div className={styles.headerContainer}>
            <div className={cn({[styles.header]:!extraInfo},styles.headerContainer__title)}>
                <h1>{title}</h1>
            </div>
            {extraInfo ?
                <div className={styles.headerContainer__extraInfo}>
                    <TimeInfoForNextMatch header={header} nextMatch={extraInfo}/>
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