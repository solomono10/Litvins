import React, {useEffect} from 'react';
import HeaderContainer from "./HeaderContainer";
import styles from './../style/Match.module.css'
import AsideContainer from "./AsideContainer";
import SimpleMap from "./SimpleMap";
import arrangement from './../logo/rI61HzFz5pc.jpg'
import GalleryPhotosMatch from "./GalleryPhotosMatch";
import {useDispatch, useSelector} from "react-redux";
import {getMatch} from "../redux/MatchsReducer";


export default function Match(props) {
    const dispatch = useDispatch();
    const match = useSelector(state => state.matchesPage.match)
    useEffect(() => {
        dispatch(getMatch(parseInt(props.match.params.matchId)))
    },[])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer
                    title={'ENGLAND VS AMSTERDAM'}
                    extraInfo={true}
                    activeLink={'Matches List'}
                    header={true}
                    link={'list-matches'}
                    childrenLink={'ENGLAND VS AMSTERDAM'}/>
            </div>
            <div className={styles.container}>
                <div className={styles.container_content}>
                    <AsideContainer/>
                    <div className={styles.infoMatch}>
                        <div className={styles.infoMatch_content}>
                            <div className={styles.infoMatch_aboutMatch}>
                                <div className={styles.aboutMatch_title}>
                                    <h3>About <span>Match</span></h3>
                                </div>
                                <div className={styles.aboutMatch_text}>
                                    <p>
                                        Vivamus hendrerit, tortor sed luctus maximus, nunc urna hendrerit nibh, sit amet
                                        efficitur libero lorem quis mauris.
                                        Nunc a pulvinar lectus. Pellentesque aliquam justo ut rhoncus lobortis.
                                        In sed venenatis massa. Sed sodales faucibus odio, eget tempus nibh accumsan ut.
                                        Fusce tincidunt semper finibus. Nullam consequat non leo interdum pulvinar.
                                    </p>
                                </div>
                            </div>
                            <div className={styles.infoMatch_map}>
                                <SimpleMap/>
                            </div>
                        </div>
                        <div className={styles.infoMatch_wrap}>
                            {
                                !match.score ?
                                    <div className={styles.article}>
                                        <h3>Match <span>placement</span></h3>
                                        <div className={styles.article_wrap}>
                                            <div className={styles.article_arrangement}>
                                                <div className={styles.article_arrangement_img}
                                                     style={{backgroundImage: `url('${arrangement}')`}}>
                                                </div>
                                            </div>
                                            <div className={styles.article_arrangement_text}>
                                                <p>
                                                    <span>Состав: </span>
                                                    Артём Филип (в.)
                                                    / Ермолович (к.) - Крук
                                                    / Синицкий Д.
                                                    / Салим - Данцевич
                                                    / Микола - Антон - Александр Калистратов
                                                    <br/>
                                                    <span>Замена: </span> Жуковец, Яблочкин, Север
                                                </p>
                                            </div>
                                        </div>
                                        <div className={styles.line}></div>
                                        <div className={styles.article_bottom}>
                                            <p>
                                                Да пребудет с нами сила и футбольное мастерство!
                                                <br/>
                                                С уважением,
                                                <br/>
                                                Константин Ермолович
                                            </p>
                                        </div>
                                    </div> :
                                    <div className={styles.info_lastMatch}>
                                        <div className={styles.info_lastMatch_text}>
                                            <p>
                                                <span>Начальный состав: </span>
                                                <br/>
                                                Жуковец (в.) / Крук - Ермолович (к.) / Скачков - Синицкий В. - Микола -
                                                Синицкий Д. / Белый Д.
                                                <br/>
                                                <span>Замены: </span> Белый В.
                                                <br/>
                                                <span>Голы забивали: </span> Микола, Синицкий В., Белый В.
                                            </p>
                                        </div>
                                        <div className={styles.info_lastMatch_gallery}>
                                            <h3>Photos <span>from the Match</span></h3>
                                            <GalleryPhotosMatch/>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
