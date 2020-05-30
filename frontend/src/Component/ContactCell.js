import React from "react";
import styles from "../style/ContactCell.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";



export default function ContactCell({contact}) {
    return (
        <div className={styles.contact_enquiries}>
            <div className={styles.contact_enquiries_title}>
                <span>{contact.position}</span>
            </div>
            <div className={styles.contact_enquiries_phone}>
                <FontAwesomeIcon icon={faPhoneAlt}/>
                <span>{contact.phone}</span>
            </div>
            <div className={styles.contact_enquiries_mail}>
                <FontAwesomeIcon icon={faEnvelope}/>
                <NavLink to='#'>{contact.mail}</NavLink>
            </div>
            <div className={styles.contact_enquiries_location}>
                <FontAwesomeIcon icon={faMapMarkerAlt}/>
                <span>{contact.address}</span>
            </div>
        </div>
    )
}