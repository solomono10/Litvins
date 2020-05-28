import React, {useEffect, useState} from 'react';
import styles from './../style/Club.module.css'
import CurrentYears from "./CurrentYears";
import SliderAwards from "./SliderAwards";
import HeaderContainer from "./HeaderContainer";
import {useDispatch, useSelector} from "react-redux";
import {getInfoClubPage, getInfoYear} from "../redux/ClubReducer";


const tabsarr = [
    {name: 'Lorem', id: 1, activeClass: true},
    {name: 'Ipsum', id: 2, activeClass: false},
    {name: 'Dolor', id: 3, activeClass: false}
]


export default function Club (){
    const dispatch =useDispatch()
    const numberYears = useSelector(state => state.clubPage.infoForClub)

    useEffect(()=>{
        dispatch(getInfoClubPage())

    },[])


    const currentActiveClass = (id) => {
        dispatch(getInfoYear(id))
    }

        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <HeaderContainer title={'Клуб'} activeLink={'Клуб'}/>
                </div>
                <div className={styles.container}>
                    <div className={styles.informationText}>
                        <h2>About <span>Лицвины</span></h2>
                        <p>Pellentesque a urna sit amet turpis tristique facilisis. Pellentesque commodo turpis leo, id
                            pulvinar turpis rhoncus interdum.</p>
                        <p>Nunc ullamcorper varius magna eu tincidunt. Vestibulum eget nisi mattis, feugiat nisl ac,
                            tempor lacus. Proin a velit rhoncus, imperdiet orci quis, tempus orci.
                            Duis tincidunt dui nec orci imperdiet, at scelerisque augue iaculis. Fusce non arcu tortor.
                            Vivamus sapien metus, porta ut ipsum sit amet, accumsan volutpat libero.
                        </p>
                    </div>
                    <div className={styles.informationImg}>
                        <div className={styles.position_cover}></div>
                    </div>
                </div>
                <div className={styles.history}>
                    <div className={styles.historyTitle}>
                        <h2>Our <span>History</span></h2>
                    </div>
                    <div className={styles.historyTop}>
                        <div>
                            <ul className={styles.historyTimeLine}>
                                {numberYears && numberYears.map((year) => {
                                    return <CurrentYears year={year} currentActiveClass={currentActiveClass}/>
                                })}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.blockMedium}>
                        <div>
                            <h3 className={styles.history_title}>Maecenas <span>Dapibus</span></h3>
                        </div>
                        <div>
                            <h3 className={styles.history_title}>Prasent <span>Dictum</span></h3>
                        </div>
                        <div>
                            <h3 className={styles.history_title}>Statistic</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.awards}>
                    <div className={styles.titleAwards}>
                        <h3>Our <span>Awards</span></h3>
                        <p>
                            Nullam quis eros tellus. Duis sit amet neque nec orci feugiat tincidunt.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <br/>
                            Nulla sed turpis aliquet, pharetra enim sit amet, congue erat.
                        </p>
                    </div>
                    <SliderAwards/>
                </div>
            </div>
        )
}