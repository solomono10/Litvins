import React from 'react'
import styles from "../style/CurrentYears.module.css";
import cn from 'classnames'


export default function CurrentYears({year, currentActiveClass}) {
    return (
        <li className={cn({[styles.activeClass]: year.activeClass === true}, styles.defaultClass)}
            onClick={()=> currentActiveClass(year.id)}>
            <span>{year.year}</span>
        </li>
    )
}