import React from 'react';
import { Zoom } from 'react-slideshow-image';
import style from '../../style/SlidesTrainer.module.css';
import trainer1 from '../../logo/EO5DUPDvd5o.jpg'
import trainer2 from '../../logo/5rTlSms1qP4.jpg'
const images = [
    trainer1,
    trainer2
];
const  zoomInProperties = {
    duration: 5000,
    transitionDuration: 500,
    indicators: true,
    scale: 1.4
}
export default function SlidesTrainer({trainers}) {
    return(
        <div className={style.slideContainer}>
            <Zoom {... zoomInProperties}>
                {images.map((each, index) => <div key={index} style={{backgroundImage: `url('${each}')`}} className={style.avatarTrainer}></div>)}
            </Zoom>

        </div>
    )
}