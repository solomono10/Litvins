import React, {useCallback, useEffect} from "react";
import styles from './../style/InfoPlayer.module.css'
import avatar from "./../logo/f401649c954a6ca111acf083eac616cf.jpg"
import SliderPlayers from "./Sliders/SliderPlayers";
import {useDispatch, useSelector} from "react-redux";
import {getPlayer, getPlayers} from "../redux/TeamReducer";
import {IndicatorStatistic} from "./IndicatorStatistic";
import {ContainerInfo} from "./ContainerInfo";



const infoForPlayer = [
    {heading: 'POSITION', value: 'Forward'}, {heading: 'Матчи', value: '122'}, {
        heading: 'Голов забито',
        value: '155'
    }, {heading: 'Желтые карточки', value: '30'},
    {heading: 'Красные карточки', value: '5'},
    {heading: 'Дата Рождения', value: '12.01.1997'}, {heading: 'Национальность', value: 'Беларус'}, {
        heading: 'Рост',
        value: '1.8M'
    }, {heading: 'Вес', value: '72 KG'}
]

export default function InfoPlayer(props) {
    const dispatch = useDispatch();
    const player = useSelector(state => state.teamPage.player)
    const players = useSelector(state => state.teamPage.players)

    const getInfoPlayer = useCallback(() => {
        try {
            dispatch(getPlayer(parseInt(props.match.params.userId)))

        } catch (e) {
            console.log("Error Server")
        }
    },[])

    useEffect(() => {
        getInfoPlayer()
        dispatch(getPlayers(1, 15))
    }, [])

        return (
            <div>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.headerContainer}>
                            <div className={styles.headerInfo}>
                                <div className={styles.headerInfoName}>
                                    <span>Иван</span>
                                    <span className={styles.lastName}>Данцевич</span>
                                </div>
                                <span className={styles.headerInfoPosition}>Защитник</span>
                                <span className={styles.headerInfoNumber}>17</span>
                                <div className={styles.headerInfoInner}>
                                    <span>5</span>
                                    <span>30</span>
                                </div>
                            </div>
                            <div className={styles.avatar}>
                                <img src={avatar} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoPlayer}>
                        <ContainerInfo value={'12.01.1997'} title={'Дата рождения '}/>
                        <ContainerInfo value={'180/72'} title={'Рост/Вес'}/>
                        <ContainerInfo value={'122'} title={'Сыгранные матчи '}/>
                        <ContainerInfo value={'155'} title={'Голов забито'}/>
                    </div>
                    <div className={styles.statistic}>
                        <div className={styles.statisticContainer}>
                            <div className={styles.statistics}>
                                <span className={styles.statisticTitle}>Статистика</span>
                                <div className={styles.listStatistic}>
                                    <IndicatorStatistic/>
                                    <IndicatorStatistic/>
                                    <IndicatorStatistic/>
                                    <IndicatorStatistic/>
                                    <IndicatorStatistic/>
                                    <IndicatorStatistic/>

                                </div>
                            </div>
                            <div className={styles.rating}>
                                <span className={styles.statisticTitle}>Рейтинг</span>
                                <div className={styles.circle}>
                                    <span className={styles.ratingNumber}>90</span>
                                    <div className={styles.slice}>
                                        <div className={styles.sliceBar}></div>
                                        <div className={styles.sliceFill}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.sliderContainer}>
                    <h3 className={styles.otherTitle}>Другие игроки</h3>
                    <div className={styles.playerWrap}>
                        <SliderPlayers players={players}/>
                    </div>
                </div>
            </div>
        )
}