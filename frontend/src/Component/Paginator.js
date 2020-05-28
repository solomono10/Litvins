import React from "react"
import styles from "../style/Paginator.module.css";
import {NavLink} from "react-router-dom";
import cn from "classnames"


export default function Paginator({currentPage, pageSize, totalPlayersCount, onPageChanged,onPageChangedNextPrev,portionNumber, portionSize=4}) {
    let pagesCount = Math.ceil(totalPlayersCount / pageSize)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.wrapper__container__wrap__paginator}>
            { portionNumber > 1 &&
                <div className={styles.paginatorPrev}>
                    <NavLink to='#' onClick={() =>onPageChangedNextPrev('Prev')}>Prev</NavLink>
                </div>
            }
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
            {pages.length === 1 || portionCount > portionNumber || pages.length === portionNumber  ? null :

                <div className={styles.paginatorNext}>
                    <NavLink to='#' onClick={() => onPageChangedNextPrev('Next')}>Next</NavLink>
                </div>}

        </div>
    )
}