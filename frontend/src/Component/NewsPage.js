import React, {useEffect} from 'react';
import HeaderContainer from "./HeaderContainer";
import styles from './../style/NewsPage.module.css'
import NewsContent from "./NewsContent";
import PaginatorNews from "./Paginator";
import AsideContainer from "./AsideContainer";
import {useDispatch, useSelector} from "react-redux";
import {getListNews} from "../redux/NewsReducer";

export default function NewsPage () {
    const dispatch =useDispatch()
    const listNews = useSelector(state => state.newsPage.newsList)
    const currentPage = useSelector(state => state.newsPage.currentPage)
    const pageSize = useSelector(state => state.newsPage.pageSize)
    const totalPlayersCount = useSelector(state => state.newsPage.totalPlayersCount)

    const getAllNews = () =>{
        dispatch(getListNews(1,9))
    }
    useEffect(()=>{
        getAllNews()
    },[])
    const dispatchMethod = (pageNumber) =>{
        dispatch(getListNews(pageNumber,pageSize))
    }


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
                            {listNews.map(news => {
                                return <NewsContent news={news} key={news.id}/>
                            })}
                        </div>
                        <div className={styles.paginator}>
                            <PaginatorNews
                                currentPage={currentPage}
                                pageSize={pageSize}
                                totalPlayersCount={totalPlayersCount}
                                onDispatchMethod={dispatchMethod}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}