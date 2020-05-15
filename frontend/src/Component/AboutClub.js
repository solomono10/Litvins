import React from 'react';
import style from './../style/AboutClub.module.css'
import SlidesTrainer from "./SlidesTrainer";
import {NavLink} from "react-router-dom";

const AboutClub = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.containerAboutTeam}>
                <div className={style.aboutWrap}>
                    <span className={style.title}>About <span>Лицвины</span></span>
                    <p>Любительское объединение футбола "Литвины" является сообществом людей,увлечённых футболом.
                        Нас объединяет стремление к здоровому образу жизни и к победе путём совершенствования футбольного мастерства,
                        постоянных тренировок, поддержания физической формы на самом высоком уровне.</p>
                        <button className={style.learnMore}>
                            <NavLink to="/club" ><span className={style.buttonText}>Reade More</span></NavLink>
                        </button>
                </div>
            </div>
            <div className={style.containerTrainers}>
                <div className={style.trainers}>
                    <h1>Trainers</h1>
                    <div className={style.trainersWrapper}>
                        <SlidesTrainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutClub