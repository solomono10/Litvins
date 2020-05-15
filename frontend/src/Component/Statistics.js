import React from 'react';
import style from './../style/Statistics.module.css'
import StatisticsPlayer from "./StatisticsPlayer";
import StatisticsTitleIcon from "./StatisticsTitleIcon";

const Statistics = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_title}>
                <h3>Statistic <span>players</span></h3>
            </div>
            <div className={style.container}>
                <div className={style.item}>
                    <StatisticsTitleIcon title={'Бомбардиры'}/>
                    <StatisticsPlayer/>
                    <StatisticsPlayer/>
                    <StatisticsPlayer/>
                </div>
                <div className={style.item}>
                    <StatisticsTitleIcon title={'Ассисты'}/>
                        <StatisticsPlayer/>
                        <StatisticsPlayer/>
                        <StatisticsPlayer/>
                </div>
                <div className={style.item}>
                    <StatisticsTitleIcon title={'Лучшие игроки'}/>
                        <StatisticsPlayer/>
                        <StatisticsPlayer/>
                        <StatisticsPlayer/>
                </div>
            </div>
        </div>
    )
}

export default Statistics