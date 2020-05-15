import React from "react";
import styles from './../style/Contact.module.css'
import HeaderContainer from "./HeaderContainer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faEnvelope,faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import {faVk, faTwitter, faYoutube, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {NavLink} from "react-router-dom";
import ContactCell from "./ContactCell";

export default function Contact() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <HeaderContainer activeLink={'Контакты'} title={'Контакты'}/>
            </div>
            <div className={styles.contact_wrap}>
                <div className={styles.container}>
                    <div className={styles.contact_title}>
                        <h2>NULLA VEHICULA SEM ID NISL FRINGILLA PORTA</h2>
                    </div>
                    <div className={styles.contact_text}>
                        <span>
                            Aenean aliquam, dolor eu lacinia pellentesque, dui arcu condimentum nisl, quis sollicitudin mi lorem quis leo.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc quis sapien a ante rutrum pulvinar quis ac tellus.
                            Proin facilisis dui at mollis tincidunt. Sed dignissim orci non arcu luctus pretium.
                            Donec at ex aliquet, porttitor lacus eget, ullamcorper quam.
                            Integer pellentesque egestas arcu, nec molestie leo sollicitudin et
                        </span>
                    </div>
                    <div className={styles.contact_socials}>
                        <ul>
                            <NavLink to='#'><FontAwesomeIcon icon={faVk}/></NavLink>
                            <NavLink to='#'><FontAwesomeIcon icon={faTwitter}/> </NavLink>
                            <NavLink to='#'><FontAwesomeIcon icon={faYoutube}/> </NavLink>
                            <NavLink to='#'><FontAwesomeIcon icon={faInstagram}/> </NavLink>
                            <NavLink to='#'><FontAwesomeIcon icon={faGoogle}/> </NavLink>
                        </ul>
                    </div>
                    <div className={styles.contact_cell}>
                        <ContactCell/>
                        <ContactCell/>
                        <ContactCell/>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}