import React from 'react';
import styles from './../style/SliderPlayers.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import 'react-alice-carousel/lib/alice-carousel.css'
import Player from "./Player";


export default class SliderPlayers extends React.PureComponent {
     constructor(props) {
         super(props);
         this.state = {
             mouseTrackingEnabled: true,
             preventEventOnTouchMove: true}
     }
    responsive = {
        100: {items: 1},
        600: {items: 2},
        960: {items: 3},
    }
    stagePadding = {
        paddingLeft: 50,
        paddingRight: 50,
    }

    render() {
        const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
        return (
            <div className={styles.app} id="app">
                <div className={styles.btn}>
                    <button className={styles.btnPrev} onClick={()=> this.Carousel.slidePrev()}><span>Prev</span></button>
                    <button className={styles.btnNext} onClick={()=> this.Carousel.slideNext()}><span>Next</span></button>
                </div>
                <AliceCarousel
                    items={this.props.players}
                    preventEventOnTouchMove={preventEventOnTouchMove}
                    mouseTrackingEnabled={mouseTrackingEnabled}
                    responsive={this.responsive}
                    infinite={true}
                    stagePadding={this.stagePadding}
                    buttonsDisabled={true}
                    autoPlayInterval={3000}
                    ref={(el)=> (this.Carousel =el)}
                >
                    {this.props.players.map((player) => {
                        return (
                            <div className={styles.item} key={player.id}>
                                <div className={styles.wrap}><Player player={player}/></div>
                            </div>
                        )
                    })}
                </AliceCarousel>
            </div>
        )
    }
}