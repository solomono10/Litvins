import React from 'react';
import HeaderContainer from "./HeaderContainer";
import styles from './../style/NewsPage.module.css'
import NewsContent from "./NewsContent";
import PaginatorNews from "./Paginator";
import AsideContainer from "./AsideContainer";

const arrNews = [
    {id: 1, name: 'Тренировка сегодня'},
    {id: 2, name: 'ДР Кости'}, {id: 3, name: 'Тренирвка во вторник'},
    {id: 4, name: 'ДР Денис'}, {id: 5, name: 'Тренировка завтра'}
    , {id: 6, name: 'Игра завершилась со счетом 5/2'}, {id: 7, name: 'Тренировка сегодня'},
    {id: 8, name: 'Гуляем в бане'}, {id: 9, name: 'Пьем в баре'}]

const NewsPage = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer title={'Новости'} activeLink={'Новости'}/>
            </div>
            <div className={styles.wrapper__container}>
                <div className={styles.wrapper__container__wrap}>
                    <AsideContainer/>
                    <div className={styles.wrapper__container__wrap__info}>
                        <div className={styles.wrapper__container__content}>
                            {arrNews.map(news => {
                                return <NewsContent news={news} key={news.id}/>
                            })}
                        </div>
                        <div className={styles.paginator}>
                            <PaginatorNews/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsPage