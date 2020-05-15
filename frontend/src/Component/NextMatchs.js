import React from 'react';
import styles from './../style/NextMatchs.module.css'
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import NextMatch from "./NextMatch";
import TimeInfoForNextMatch from "./TimeInfoForNextMatch";


export default function NextMatches() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.container__singleNextMatch}>
                    <div className={styles.container__singleNextMatch__title}>
                        <span className={styles.container__singleNextMatch__title_value}>Next <span>Match</span></span>
                    </div>
                    <TimeInfoForNextMatch/>
                </div>
                <div className={styles.container__listNextMatch}>
                    <NextMatch data={'March 29, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                    <NextMatch data={'April 5, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                    <NextMatch data={'April 12, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                    <NextMatch data={'April 19, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                    <NextMatch data={'November 19, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                    <NextMatch data={'November 19, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                    <NextMatch data={'November 19, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                    <NextMatch data={'November 19, 2020'}
                               firstLogo={clubLogo1}
                               secondLogo={clubLogo2}
                               firstTeamName={'England'}
                               secondTeamName={'China'}/>
                </div>
            </div>
        </div>
    )
}