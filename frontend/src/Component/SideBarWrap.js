import React from 'react'
import styles from "../style/SideBarWrap.module.css";
import imgNews from "../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg";
import {NavLink} from "react-router-dom";



export default function SideBarWrap ({img, data, name}) {
return(
    <div className={styles.wrapper__container__newsSidebar_wrap}>
        <div className={styles.wrapper__container__newsSidebar_wrap_img} style={{backgroundImage: `url('${imgNews}')`}}>

        </div>
        <div className={styles.wrapper__container__newsSidebar_wrap_info}>
            <span className={styles.wrapper__container__newsSidebar_wrap_info__data}>November 25, 2015</span>
            <div className={styles.wrapper__container__newsSidebar_wrap_info_name}><h4 ><NavLink to='#'>Suspendisse purus enim,</NavLink></h4>
            </div>
        </div>
    </div>
)
}