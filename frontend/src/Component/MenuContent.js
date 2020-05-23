import React, {Component} from 'react'
import {NavLink} from "react-router-dom";
import styles from './../style/MenuContent.module.css'
import logo from '../logo/Litvin-LOGO.png';


export default function MenuContent({closeCallback, links}) {
    return (
        <div className={styles.menu}>
            <div className={styles.menu_logo}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.menu_links}>
                {links.map((link) => {
                    return <NavLink exact
                                    key={link.id}
                                    to={link.address}
                                    activeClassName={styles.activeLink}
                                    onClick={closeCallback}
                                    >
                        {link.title}
                    </NavLink>
                })}
            </div>
        </div>
    )
}