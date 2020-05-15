import React from "react";
import styles from './../style/SliderNextGames.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import 'react-alice-carousel/lib/alice-carousel.css'
import {games} from "./Footer";
import {NavLink} from "react-router-dom";
import { faAngleRight, faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default class SliderNextGames extends React.PureComponent {
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
            <div className="app" id="app">
                <div className={styles.header}>
                    <div className={styles.title}><span>Next Match</span></div>
                    <div className={styles.btn}>
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
                    responsive={this.responsive}
                    infinite={true}
                    stagePadding={this.stagePadding}
                    buttonsDisabled={true}
                    autoPlay={true}
                    autoPlayInterval={4000}
                    dotsDisabled={true}
                    transitionTimingFunction={'ease-in-out'}
                    ref={(el)=> (this.Carousel =el)}
                >
                    {games.map((game) => {
                        return (
                            <div className="item">
                                <div className={styles.wrap} key={game.id} >
                                    <div className={styles.wrap__container}>
                                        <div className={styles.item__wrap__logo}>
                                            <img src={game.logoFirst} alt=""/>
                                        </div>
                                        <div className={styles.item__wrap__teamName}>
                                            <span>{game.nameFirst}</span>
                                        </div>
                                        <div className={styles.item__wrap__versus}>
                                            <span>Vs</span>
                                        </div>
                                        <div className={styles.item__wrap__teamName}>
                                            <span>{game.nameSecond}</span>
                                        </div>
                                        <div className={styles.item__wrap__logo}>
                                            <img src={game.logoSecond} alt=""/>
                                        </div>
                                    </div>
                                    <div className={styles.item__wrap__link}>
                                        <NavLink to={'#'}><span>Read More</span></NavLink>
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