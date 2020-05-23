import React from 'react';
import {CarouselProvider, Slide, Slider} from "pure-react-carousel";
import 'pure-react-carousel/dist/react-carousel.es.css';
import slide_1 from './../logo/main-slider-img.jpg'
import slide_2 from './../logo/14606.jpg'
import slide_3 from './../logo/5276.jpg'
import slide_4 from './../logo/main-slider-img1.jpg'
import style from './../style/SliderNeader.module.css'

const images = [slide_1, slide_2, slide_3, slide_4];

const SliderHeader = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <CarouselProvider
                    naturalSlideWidth={1}
                    naturalSlideHeight={1}
                    totalSlides={4}
                    interval={4000}
                    isPlaying={true}
                    className={style.carouselProvider}>
                    <Slider className={style.sliderWrapper}>
                        {images.map(image => (
                            <Slide index={image} key={image}>
                                <div className={style.container__slider}>
                                    <div className={style.sliderImg} style={{backgroundImage: `url(${image})`}}>

                                    </div>
                                </div>
                            </Slide>
                        ))}
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
    )
}


export default SliderHeader