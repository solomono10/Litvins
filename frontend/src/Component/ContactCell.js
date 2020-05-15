import React from "react";
import styles from "../style/ContactCell.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faMapMarkerAlt, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";


export default function ContactCell({}) {
    return (
        <div className={styles.contact_enquiries}>
            <div className={styles.contact_enquiries_title}>
                <span>CLUB ENQUIRIES</span>
            </div>
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
    )
}