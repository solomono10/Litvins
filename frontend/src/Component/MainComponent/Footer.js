import React from "react";
import styles from "../../style/Footer.module.css"
// import {faVk, faTwitter, faYoutube, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {Link, NavLink} from "react-router-dom";
import logo from './../../logo/Litvin-LOGO.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPhoneAlt, faAngleRight, faChevronRight} from "@fortawesome/free-solid-svg-icons";
// import arrow from './../../logo/—Pngtree—right arrow line black icon_4008091.png'

const inputSubmitStyle = {
    // backgroundImg: 'url(' + arrow + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%'

};

export default function Footer() {
    return (
        <div className={styles.footer}>
            <footer className={styles.wrapper__footer}>
                <div className={styles.wrapper__footer_logo}>
                    <div className={styles.wrapper__footer_logo_img}>
                        <img src={logo} alt=""/>
                    </div>
                    {/*<span lassName={styles.wrapper__footer_logo_title}>Лицвины</span>*/}
                </div>
                <form action="" className={styles.wrapper__footer_form}>
                    <span>Подписаться</span>
                    <div className={styles.wrapper__footer_form_send}>
                        <input type="send" />
                        {/*<FontAwesomeIcon icon={faChevronRight}/>*/}
                    </div>
                </form>
                <div className={styles.wrapper__footer_contact}>
                    <span className={styles.wrapper__footer_contact_title}>Контакты</span>
                    <div className={styles.wrapper__footer_contact_info}>
                        <div className={styles.contact_enquiries_phone}>
                            <FontAwesomeIcon icon={faPhoneAlt}/>
                            <span>(29)534-53-48</span>
                        </div>
                        <div className={styles.contact_enquiries_mail}>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <NavLink to='#'>support@torbara.com</NavLink>
                        </div>
                        <div className={styles.contact_enquiries_location}>
                            <FontAwesomeIcon icon={faMapMarkerAlt}/>
                            <span>9478 Chestnut Street, Woodstock, GA 30188</span>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper__footer__footMenu}>
                    <NavLink exact to="/"><span>Главная</span></NavLink>
                    <NavLink to="/team"><span>Команда</span></NavLink>
                    <NavLink to="/list-matches"><span>Матчи</span></NavLink>
                    <NavLink to="/club"><span>Клуб</span></NavLink>
                    <NavLink to="/list-news"><span>Новости</span></NavLink>
                    <NavLink to="contact"><span>Контакты</span></NavLink>
                </div>
            </footer>
        </div>

    )
}

// <div className={styles.wrapper__footer__wrap__copyrights}>
//     <span>Copyright © 2015 Sportak Team. All Rights Reserved.</span>
// </div>
// <div className={styles.container__info__footerSocials}>
//     <Link to={'#'}><FontAwesomeIcon icon={faVk}/></Link>
//     <Link to={'#'}><FontAwesomeIcon icon={faTwitter}/></Link>
//     <Link to={'#'}><FontAwesomeIcon icon={faYoutube}/></Link>
//     <Link to={'#'}><FontAwesomeIcon icon={faInstagram}/></Link>
//     <Link to={'#'}><FontAwesomeIcon icon={faGoogle}/></Link>
// </div>