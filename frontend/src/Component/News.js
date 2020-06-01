import React from 'react';
import styles from './../style/news.module.css';
import {NavLink} from "react-router-dom";
import ArticleContainer from "./ArticleContainer";

export default function News({newsList}) {
    console.log(newsList)
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
                    {
                        newsList.map((news)=>{
                            return <ArticleContainer news={news} key={news.id}/>
                        })
                    }
                </div>
                <div className={styles.wrapper__container_allNewsBtn}>
                    <NavLink to='/list-news'><span>All News</span></NavLink>
                </div>
            </div>
        </div>
    )
}