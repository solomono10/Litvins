import React from 'react';
import styles from './../style/news.module.css';
import img1 from './../logo/853d071dfa2f869fbd2a70dbcb3a8f5e.jpg';
import {NavLink} from "react-router-dom";
import ArticleContainer from "./ArticleContainer";

export default function News() {


    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__title}>
                <h3 className={styles.wrapper__title__name}>Our <span>News</span></h3>
                <div className={styles.wrapper__title__text}>
                    <span >
                    Nullam quis eros tellus. Duis sit amet neque nec orci feugiat tincidunt. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Nulla sed turpis aliquet, pharetra enim sit amet, congue erat.
                    </span>
                </div>
            </div>
            <div className={styles.wrapper__container}>
                <div className={styles.wrapper__container__center}>
                    <ArticleContainer/>
                    <ArticleContainer/>
                </div>
                <div className={styles.wrapper__container_allNewsBtn}>
                    <NavLink to='/news'><span>All News</span></NavLink>
                </div>
            </div>
        </div>
    )
}