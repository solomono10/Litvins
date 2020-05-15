import React from 'react'
import styles from "../style/SideBarTitle.module.css";



export default function SideBarTitle ({title}) {
return(
    <h3 className={styles.wrapper__container__SidebarCategories__title}>{title}</h3>
)
}