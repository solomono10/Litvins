import React, {useCallback, useEffect} from 'react';
import HeaderContainer from "./HeaderContainer";
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import styles from '../style/ListMatch.module.css'
import AsideContainer from "./AsideContainer";
import InfoMatch from "./InfoMatch";
import {getMatches} from "../redux/MatchsReducer";
import {useDispatch, useSelector} from "react-redux";
import {getPlayers} from "../redux/TeamReducer";



export const nextMatchInfo = {
    timeBeforeMatch:{day:6,hrs:12,min:23,sec:30},
    clubF:{logo: clubLogo1 ,name:'England'},
    clubS:{logo: clubLogo2 ,name:'Amsterdam'},
    data:'March 29, 2020 | 12.15 am',
    location:'СШ №180 Радужная 8/3'
};
export default function ListMatches({}) {
    const dispatch = useDispatch()
    const listMatches = useSelector(state => state.matchesPage.matches)

    useEffect(()=>{
        dispatch(getMatches())
    },[])

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer  title={'MATCH LIST'} activeLink={'Список матчей'} extraInfo={nextMatchInfo} header={true}/>
            </div>
            <div className={styles.container}>
                <div className={styles.container__content}>
                    <AsideContainer/>
                    <div className={styles.listMatch}>
                        {
                            listMatches.map((match)=>{
                                return <InfoMatch match={match} key={match.id}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}