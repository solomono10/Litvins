import React from 'react'
import styles from "../../style/AsideContainer.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleRight} from "@fortawesome/free-solid-svg-icons";
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
import {NavLink} from "react-router-dom";
import SideBarTitle from "../SideBarTitle";
import SideBarWrap from "../SideBarWrap";
import TagComponent from "../TagComponent";


export default function AsideContainer() {
    return (
        <div className={styles.wrapper__container__wrap__aside}>
            <aside className={styles.wrapper__container__sidebar}>
                <div className={styles.wrapper__container__SidebarCategories}>
                    <SideBarTitle title={'Categories'}/>
                    <div>
                        <ul className={styles.wrapper__container__SidebarCategories__navMenu}>
                            <li>
                                <FontAwesomeIcon icon={faAngleRight}/>
                                <NavLink to='#'>Overall <span>(3)</span></NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faAngleRight}/>
                                <NavLink to='#'>Players <span>(3)</span></NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faAngleRight}/>
                                <NavLink to='#'>Life <span>(3)</span></NavLink>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faAngleRight}/>
                                <NavLink to='#'>Entertainment <span>(3)</span></NavLink></li>
                            <li>
                                <FontAwesomeIcon icon={faAngleRight}/>
                                <NavLink to='#'>Uncategorized <span>(3)</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.wrapper__container__newsLetter}>
                    <SideBarTitle title={'NewsLetter'}/>
                    <div className={styles.wrapper__container__newsLetter__text}>
                        <span>Donec at ex aliquet, porttitor lacus eget</span>
                    </div>
                    <form action="" className={styles.wrapper__container__newsLetter__form}>
                        <input type="text" placeholder='Email'/>
                        <span><button className={styles.wrapper__container__newsLetter__form__submit}><FontAwesomeIcon icon={faTelegramPlane}/></button></span>
                    </form>
                </div>
                <div className={styles.wrapper__container__newsSidebar}>
                    <SideBarTitle title={'Latest News'}/>
                    <SideBarWrap/>
                    <SideBarWrap/>
                    <SideBarWrap/>
                </div>
                <div className={styles.wrapper__container__tagsSidebar}>
                    <SideBarTitle title={'Tags'}/>
                    <div className={styles.wrapper__container__tagsSidebar__container} >
                        <TagComponent title={'Soccer'}/>
                        <TagComponent title={'Kick'}/>
                        <TagComponent title={'Player'}/>
                        <TagComponent title={'Action'}/>
                        <TagComponent title={'Stadium'}/>
                        <TagComponent title={'Ball'}/>
                        <TagComponent title={'Boots'}/>
                        <TagComponent title={'Goal'}/>
                    </div>
                </div>
            </aside>
        </div>
    )
}