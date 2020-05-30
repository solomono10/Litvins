import React, {useState} from "react"
import styles from "../style/Paginator.module.css";
import {NavLink} from "react-router-dom";
import cn from "classnames"
import {getListNews} from "../redux/NewsReducer";
import {useDispatch} from "react-redux";


export default function Paginator({currentPage, pageSize, totalPlayersCount, portionSize=4,onDispatchMethod}) {
    const [portionNumber, setPortionNumber] = useState(1)
    let pagesCount = Math.ceil(totalPlayersCount / pageSize)
    let portionCount = Math.ceil(pagesCount / portionSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const onPageChanged = (pageNumber) =>{
        setPortionNumber(()=>{
            let newCurrentPage
            if(pageNumber>currentPage){
                newCurrentPage = portionNumber+1
            }else {
                newCurrentPage = portionNumber-1
            }
            return newCurrentPage
        })
        onDispatchMethod(pageNumber,pageSize)
    }
    const onPageChangedNextPrev = (value) =>{
        setPortionNumber(()=>{
            if(value === 'Next'){
                setPortionNumber(portionNumber+1)
                onDispatchMethod(currentPage+1)
            }else {
                setPortionNumber(portionNumber-1)
                onDispatchMethod(currentPage-1)
            }
        })
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