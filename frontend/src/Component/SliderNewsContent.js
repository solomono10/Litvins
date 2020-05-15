import React from 'react'
import styles from "../style/SliderNewsContent.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight ,faCalendarAlt,faUser, faListUl} from "@fortawesome/free-solid-svg-icons";
import AliceCarousel from "react-alice-carousel";
import newsImg1 from "../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg";
import newsImg2 from "../logo/5276.jpg";
import newsImg3 from "../logo/Best-Football-Score-Apps-for-Android-feature-image.jpg";

export const newsArr = [
    {img:{backgroundImage:`url(${newsImg1})`}, id:1, data: 'March 25, 2020', user:'Guest',categories:'Life'},
    {img:{backgroundImage:`url(${newsImg2})`},id:2, data: 'April 20, 2020', user:'Imbacow',categories:'Life'},
    {img:{backgroundImage:`url(${newsImg3})`},id:3, data: 'May 9, 2020', user:'Denis',categories:'Life'}
];
export default class SliderNewsContent extends React.PureComponent {
    state = {mouseTrackingEnabled: true, preventEventOnTouchMove: true}
    responsive = {
        0: {items: 1},
    }
    stagePadding = {
        paddingLeft: 0,
        paddingRight: 0,
    }

    render() {
        const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
        return (
            <div className={styles.wrap} id="app">
                <div className={styles.item__wrap__btn}>
                    <button className={styles.btnPrev} onClick={()=> this.Carousel.slidePrev()}>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                    </button>
                    <button className={styles.btnNext} onClick={()=> this.Carousel.slideNext()}>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </button>
                </div>
                <AliceCarousel
                    preventEventOnTouchMove={preventEventOnTouchMove}
                    mouseTrackingEnabled={mouseTrackingEnabled}
                    responsive={this.responsive}
                    infinite={true}
                    stagePadding={this.stagePadding}
                    buttonsDisabled={true}
                    autoPlayInterval={4000}
                    dotsDisabled={true}
                    transitionTimingFunction={'ease-in-out'}
                    ref={(el)=> (this.Carousel =el)}>

                    {newsArr.map(news => {
                        return (
                            <div className={styles.item}>
                                <div className={styles.item__wrap} style={news.img}  key={news.id} >
                                </div>
                                <div className={styles.item__bottom}>
                                    <div className={styles.item__bottom__data}>
                                        <FontAwesomeIcon icon={faCalendarAlt}/>
                                        <span>{news.data}</span>
                                    </div>
                                    <div className={styles.item__bottom__author}>
                                        <FontAwesomeIcon icon={faUser}/>
                                        <span>{news.user}</span>
                                    </div>
                                    <div className={styles.item__bottom__categories}>
                                        <FontAwesomeIcon icon={faListUl}/>
                                        <span>{news.categories}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </AliceCarousel>
            </div>
        )
    }
}