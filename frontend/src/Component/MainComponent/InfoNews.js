import React, {useCallback, useEffect} from 'react'
import HeaderContainer from "../HeaderContainer";
import styles from '../../style/InfoNews.module.css'
import SliderNewsContent from "../Sliders/SliderNewsContent";
import SliderListNews from "../Sliders/SliderListNews";
import AsideContainer from "./AsideContainer";
import {useDispatch, useSelector} from "react-redux";
import {getListNews, getNews} from "../../redux/NewsReducer";


export default function InfoNews(props){
    const dispatch = useDispatch();
    const news = useSelector(state => state.newsPage.news)
    const newsList = useSelector(state => state.newsPage.newsList)

    const getInfoNews = useCallback(() => {
        try {
            dispatch(getNews(parseInt(props.match.params.newsId)))
        } catch (e) {
            console.log("Error Server")
        }
    },[])

    useEffect(() => {
        getInfoNews()
        dispatch(getListNews(1, 15))
    }, [])

        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderContainer title={news.name} activeLink={'Новости'} link={'list-news'}
                                     childrenLink={news.name}/>
                </div>
                <div className={styles.wrapper__container}>
                    <AsideContainer/>
                    <div className={styles.wrapper__container_wrap}>
                        <div className={styles.wrapper__container__content}>
                            <SliderNewsContent/>
                            <div className={styles.wrapper__container__content__infoText}>
                                <p>
                                    Vivamus hendrerit, tortor sed luctus maximus, nunc urna hendrerit nibh, sit amet
                                    efficitur libero lorem quis mauris.
                                    Nunc a pulvinar lectus. Pellentesque aliquam justo ut rhoncus lobortis. In sed
                                    venenatis
                                    massa.
                                    Sed sodales faucibus odio, eget tempus nibh accumsan ut. Fusce tincidunt semper
                                    finibus.
                                    Nullam consequat non leo interdum pulvinar.
                                </p>
                                <p>
                                    Suspendisse odio erat, suscipit vel aliquam tristique, dapibus at neque.
                                    Aliquam lectus tellus, feugiat non sodales nec, rhoncus a est.
                                    Etiam hendrerit, eros nec mollis blandit, velit sem aliquet ex, id tristique metus
                                    ligula tincidunt nisi.
                                    Ut porta augue at molestie feugiat. Donec quis neque molestie, interdum sapien at,
                                    dictum diam.
                                    Nam aliquam diam vitae purus vestibulum, sit amet rutrum tortor aliquet.
                                    Curabitur rhoncus consectetur tempor.
                                    Vivamus volutpat, mauris non auctor molestie, est ex auctor eros, vel egestas eros
                                    tellus non dui.
                                </p>
                            </div>
                            <div className={styles.wrapper__container__content__slider}>
                                <SliderListNews newsList={newsList}/>
                            </div>
                            <div className={styles.wrapper__container__content__commentsWrap}>
                                <div className={styles.wrapper__container__content__commentsWrap__content}>
                                    <h3>Comments: <span>3</span></h3>
                                    <div>

                                    </div>
                                </div>
                                <div>
                                    <h3></h3>
                                    <form action=""></form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}