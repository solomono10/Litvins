import React from "react";
import styles from "../style/news.module.css";
import img1 from "../logo/853d071dfa2f869fbd2a70dbcb3a8f5e.jpg";
import {NavLink} from "react-router-dom";


export default function ArticleContainer() {
    return (
        <div className={styles.wrapper__container__article}>
            <div className={styles.wrapper__container__article__imgWrap} style={{backgroundImage: `url(${img1})`}} >
            </div>
            <div className={styles.wrapper__container__article__info}>
                <div className={styles.wrapper__container__article__info__data}>
                    <span> Mart 29, 2020</span>
                </div>
                <div className={styles.wrapper__container__article__info__name}>
                    <h4>NULLAM ENIM ANTE, VOLUTPAT NON VIVERRA EGET</h4>
                </div>
                <div className={styles.wrapper__container__article__info__text}>
                    <p>
                        Vivamus hendrerit, tortor sed luctus maximus,
                        nunc urna hendrerit nibh, sit amet efficitur libero lorem quis mauris.
                        Nunc a pulvinar lectus.
                    </p>
                    <div className={styles.wrapper__container__article__info__text__readMore}>
                        <NavLink to='#'>Read More</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}