import React from 'react';
import style from './../style/Statistics.module.css'
import StatisticsPlayer from "./StatisticsPlayer";
import StatisticsTitleIcon from "./StatisticsTitleIcon";


export default function Statistics({statisticsPlayers}) {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapper_title}>
                <h3>Statistic <span>players</span></h3>
            </div>
            <div className={style.container}>
                {statisticsPlayers.map((categories) => {
                    return (
                        <div className={style.item} key={categories.id}>
                            <StatisticsTitleIcon title={categories.name}/>
                            {
                                categories.listPlayers.map((player) => {
                                    return <StatisticsPlayer player={player} key={player.id}/>
                                })
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}