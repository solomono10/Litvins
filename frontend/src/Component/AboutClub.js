import React from 'react';
import style from './../style/AboutClub.module.css'
import SlidesTrainer from "./Sliders/SlidesTrainer";
import {NavLink} from "react-router-dom";

export default function AboutClub ({infoAboutClub}){
    return (
        <div className={style.wrapper}>
            <div className={style.containerAboutTeam}>
                <div className={style.aboutWrap}>
                    <span className={style.title}>About <span>Лицвины</span></span>
                    <p>{infoAboutClub.text}</p>
                        <button className={style.learnMore}>
                            <NavLink to="/club" ><span className={style.buttonText}>Reade More</span></NavLink>
                        </button>
                </div>
            </div>
            <div className={style.containerTrainers}>
                <div className={style.trainers}>
                    <h1>Trainers</h1>
                    <div className={style.trainersWrapper}>
                        <SlidesTrainer trainers={infoAboutClub.trainers}/>
                    </div>
                </div>
            </div>
        </div>
    )
}