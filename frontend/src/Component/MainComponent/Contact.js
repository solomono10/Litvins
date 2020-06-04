import React, {useEffect} from "react";
import styles from '../../style/Contact.module.css'
import HeaderContainer from "../HeaderContainer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faVk, faTwitter, faYoutube, faInstagram, faGoogle} from '@fortawesome/free-brands-svg-icons'
import {NavLink} from "react-router-dom";
import ContactCell from "../ContactCell";
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../redux/ContactReducer";

export default function Contact() {
    const dispatch = useDispatch()
    const contactsList = useSelector(state => state.contactPage.contacts)

    useEffect(() => {
        dispatch(getContacts())
    },[])

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
                            <NavLink to='#'><FontAwesomeIcon icon={faGoogle}/></NavLink>
                        </ul>
                    </div>
                    <div className={styles.contact_cell}>
                        {contactsList.map((contact) =>{
                                return <ContactCell contact={contact} key={contact.id} />
                        })}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}