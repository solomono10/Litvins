import React from "react"
import styles from "../style/Paginator.module.css";
import {NavLink} from "react-router-dom";
import cn from "classnames"


export default function Paginator({currentPage, pageSize, totalPlayersCount, onPageChanged}) {
    let pagesCount = Math.ceil(totalPlayersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.wrapper__container__wrap__paginator}>
            <div className={styles.paginatorPrev}>
                <NavLink to='#'>Prev</NavLink>
            </div>
            {pages.map((page) => {
                return (
                    <div key={page}
                         className={cn({
                             [styles.activePaginator]: currentPage === page
                         }, styles.paginatorNav)}
                         onClick={() => onPageChanged(page)}>
                        <span>{page}</span>
                    </div>
                )
            })}
            {pages.length === 1 ? null :
                <div className={styles.paginatorNext}>
                    <NavLink to='#'>Next</NavLink>
                </div>}

        </div>
    )
}