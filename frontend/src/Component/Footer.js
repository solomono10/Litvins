import React from "react";
import styles from "./../style/Footer.module.css"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVk, faTwitter, faYoutube, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {Link, NavLink} from "react-router-dom";
import clubLogo1 from './../logo/club-logo.png'
import clubLogo2 from './../logo/club-logo1.png'
import SliderNextGames from "./SliderNextGames";

export const games = [
    {nameFirst: 'China', nameSecond: 'England', logoFirst: clubLogo1, logoSecond: clubLogo2, id: 1},
    {nameFirst: 'China', nameSecond: 'England', logoFirst: clubLogo1, logoSecond: clubLogo2, id: 2},
    {nameFirst: 'China', nameSecond: 'England', logoFirst: clubLogo1, logoSecond: clubLogo2, id: 3},
    {nameFirst: 'China', nameSecond: 'England', logoFirst: clubLogo1, logoSecond: clubLogo2, id: 4},
    {nameFirst: 'China', nameSecond: 'England', logoFirst: clubLogo1, logoSecond: clubLogo2, id: 5}
]

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <div className={styles.container__info}>
                    <div className={styles.container__info__panel}>
                        <div className={styles.container__info__footerLogo}>
                            <span>Лицвины</span>
                        </div>
                        <div className={styles.container__info__footerSocials}>
                            <Link to={'#'}><FontAwesomeIcon icon={faVk}/></Link>
                            <Link to={'#'}><FontAwesomeIcon icon={faTwitter}/></Link>
                            <Link to={'#'}><FontAwesomeIcon icon={faYoutube}/></Link>
                            <Link to={'#'}><FontAwesomeIcon icon={faInstagram}/></Link>
                            <Link to={'#'}><FontAwesomeIcon icon={faGoogle}/></Link>
                        </div>
                    </div>
                    <p className={styles.container__info__AboutText}>
                        Cras convallis feugiat felis eget venenatis.
                        Sed leo tellus, luctus eget ante quis, rutrum dignissim enim.
                        Morbi efficitur tellus non mauris tincidunt feugiat.
                        Vestibulum quis nunc in nibh eleifend convallis.
                        Vestibulum nec viverra dui. Suspendisse vel neque eros.
                        Donec tincidunt tempus massa sed vehicula.
                        Integer ullamcorper at elit eu commodo.
                    </p>
                </div>
                <div className={styles.container__center}>
                    <div className={styles.container__center__slider}>
                        <SliderNextGames/>
                    </div>
                    <div className={styles.container__form}>
                        <form action="">
                            <div className={styles.container__form__info}>
                                <div className={styles.container__form_title}>
                                    <span>NEWSLETTERS</span>
                                </div>
                                <div className={styles.container__form_introText}>
                                    <span>Suspendisse sodales, magna at dignissim cursus, velit ex porttitor eros.</span>
                                </div>
                            </div>
                            <div className={styles.container__form_subscribe}>
                                <div className={styles.container__form_subscribe__input}>
                                    <input type="text"/>
                                </div>
                                <div className={styles.container__form_subscribe__button}><button><span>Subscribe</span></button></div>
                            </div>
                        </form>
                    </div>
                </div>
                <footer className={styles.wrapper__footer}>
                    <div className={styles.wrapper__footer__wrap}>
                        <div className={styles.wrapper__footer__wrap__footMenu}>
                            <NavLink to='#'><span>About</span></NavLink>
                            <NavLink to='#'><span>Players</span></NavLink>
                            <NavLink to='#'><span>Match</span></NavLink>
                            <NavLink to='#'><span>Results</span></NavLink>
                            <NavLink to='#'><span>News</span></NavLink>
                        </div>
                        <div className={styles.wrapper__footer__wrap__copyrights}>
                            <span>Copyright © 2015 Sportak Team. All Rights Reserved.</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    )
}