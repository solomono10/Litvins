import React from "react";
import styles from "../style/NewsPage.module.css";
import {NavLink} from "react-router-dom";
import imgNews from './../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg'
import { faComments} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function NewsContent({news}) {
    return (
        <div className={styles.wrapper__container__content__cell}>
            <div className={styles.wrapper__container__content__cell__info}>
                <div className={styles.wrapper__container__content__cell__info__img}>
                    <NavLink to={'/news/' + news.id}>
                        <div style={{backgroundImage: `url(${imgNews})`}}></div>
                    </NavLink>
                </div>
                <div className={styles.wrapper__container__content__cell__info__infoText}>
                    <div className={styles.wrapper__container__content__cell__info__infoText__date}>
                        <span>November 25, 2020</span>
                    </div>
                    <div className={styles.wrapper__container__content__cell__info__infoText__name}>
                        <h4>
                            <NavLink to={'/news/' + news.id} >{news.name}</NavLink>
                        </h4>
                    </div>
                    <div className={styles.wrapper__container__content__cell__info__infoText__text}>
                        <p>
                            Vivamus hendrerit, tortor sed luctus maximus, nunc urna hendrerit nibh, sit amet efficitur libero
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper__container__content__cell__bottom}>
                <div  className={styles.wrapper__container__content__cell__bottom__count}>
                    <FontAwesomeIcon icon={faComments}/>
                    <span>3</span>
                </div>
                <div  className={styles.wrapper__container__content__cell__bottom__button}>
                    <NavLink to={'/news/' + news.id}>Read More</NavLink>
                </div>
            </div>
        </div>
    )
}