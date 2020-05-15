import React from 'react'
import styles from './../style/TagComponent.module.css'
import {NavLink} from "react-router-dom";

export default function TagComponent ({title}) {
return(
    <div className={styles.tagElement}>
        <NavLink to='#'>
            <span>
                {title}
            </span>
        </NavLink>
    </div>
)
}