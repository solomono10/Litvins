import React from "react"
import styles from "../style/NewsPage.module.css";
import {NavLink} from "react-router-dom";

export default function Paginator () {
    return (
        <div className={styles.wrapper__container__wrap__paginator} >
            <div className={styles.paginatorPrev}>
                <NavLink to='#'>Prev</NavLink>
            </div>
            <div className={styles.activePaginator}>
                <span>1</span>
            </div>
            <div className={styles.paginatorNav}>
                <span>2</span>
            </div>
            <div className={styles.paginatorNext}>
                <NavLink to='#'>Next</NavLink>
            </div>
        </div>
    )
}