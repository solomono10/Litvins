import React from 'react';
import styles from './../style/SliderListNews.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import 'react-alice-carousel/lib/alice-carousel.css'
import newsImg1 from "../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg";
import newsImg2 from "../logo/5276.jpg";
import newsImg3 from "../logo/Best-Football-Score-Apps-for-Android-feature-image.jpg";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons";

const listNewsArr = [
    {img:{backgroundImage:`url(${newsImg1})`}, id:1, data: 'March 25, 2020',title:'INTERDUM ET MALESUADA FAMES AC ANTE IPSUM PRIMIS IN FAUCIBUS'},
    {img:{backgroundImage:`url(${newsImg2})`},id:2, data: 'April 20, 2020',title:'SUSPENDISSE PURUS ENIM, DICTUM SED LOREM AC, SODALES MAXIMUS EST'},
    {img:{backgroundImage:`url(${newsImg3})`},id:3, data: 'May 9, 2020',title:'NUNC IN INTERDUM NEQUE. MAURIS TINCIDUNT MOLESTIE FELIS'}
]
export default class SliderListNews extends React.PureComponent {
    state = {mouseTrackingEnabled: true, preventEventOnTouchMove: true}
    responsive = {
        0: {items: 1},
        200: {items: 2},
        400: {items: 3},
    }
    stagePadding = {
        paddingLeft: 0,
        paddingRight: 0,
    }
    render() {
        const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
        return (
            <div className={styles.wrapper} id="app">
                <div className={styles.wrapper__container}>
                    <div className={styles.wrapper__container__title}>
                        <h3>Other <span>Posts</span></h3>
                    </div>
                    <div className={styles.item__wrap__btn}>
                        <button className={styles.btnPrev} onClick={()=> this.Carousel.slidePrev()}>
                            <FontAwesomeIcon icon={faAngleLeft}/>
                        </button>
                        <button className={styles.btnNext} onClick={()=> this.Carousel.slideNext()}>
                            <FontAwesomeIcon icon={faAngleRight}/>
                        </button>
                    </div>
                </div>

                <AliceCarousel
                    preventEventOnTouchMove={preventEventOnTouchMove}
                    mouseTrackingEnabled={mouseTrackingEnabled}
                    // onSlideChanged={console.debug}
                    responsive={this.responsive}
                    infinite={true}
                    stagePadding={this.stagePadding}
                    buttonsDisabled={true}
                    // autoPlay={true}
                    autoPlayInterval={4000}
                    ref={(el) => (this.Carousel = el)}
                >
                    {listNewsArr.map((news) => {
                        return (
                            <div className={styles.item} key={news.id}>
                                <div className={styles.item__img} style={news.img}></div>
                                <div className={styles.item__info}>
                                    <div className={styles.item__info__data}>
                                        <span>{news.data}</span>
                                    </div>
                                    <div className={styles.item__info__name}>
                                        <h4><NavLink to='#'>{news.title}</NavLink></h4>
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