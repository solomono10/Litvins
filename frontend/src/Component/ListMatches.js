import React from 'react';
import HeaderContainer from "./HeaderContainer";
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import styles from '../style/ListMatch.module.css'
import AsideContainer from "./AsideContainer";
import InfoMatch from "./InfoMatch";



export const nextMatchInfo = {
    timeBeforeMatch:{day:6,hrs:12,min:23,sec:30},
    clubF:{logo: clubLogo1 ,name:'England'},
    clubS:{logo: clubLogo2 ,name:'Amsterdam'},
    data:'March 29, 2020 | 12.15 am',
    location:'СШ №180 Радужная 8/3'
};
const ListMatches = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer  title={'MATCH LIST'} activeLink={'Список матчей'} extraInfo={nextMatchInfo} header={true}/>
            </div>
            <div className={styles.container}>
                <div className={styles.container__content}>
                    <AsideContainer/>
                    <div className={styles.listMatch}>
                       <InfoMatch score={true} match={[{id:1}]}/>
                       <InfoMatch score={true} match={[{id:2}]}/>
                       <InfoMatch score={true} match={[{id:3}]}/>
                       <InfoMatch score={true} match={[{id:4}]}/>
                       <InfoMatch score={true} match={[{id:5}]}/>
                       <InfoMatch score={false} match={[{id:6}]}/>
                       <InfoMatch score={false} match={[{id:7}]}/>
                       <InfoMatch score={false} match={[{id:8}]}/>
                       <InfoMatch score={false} match={[{id:9}]}/>
                       <InfoMatch score={false} match={[{id:10}]}/>
                       <InfoMatch score={false} match={[{id:11}]}/>
                       <InfoMatch score={false} match={[{id:12}]}/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ListMatches