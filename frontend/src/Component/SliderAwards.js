import React from 'react';
import styles from './../style/SliderAwards.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css";
import 'react-alice-carousel/lib/alice-carousel.css'
import img1 from './../logo/award-img1.png'
import img2 from './../logo/award-img2.png'
import img3 from './../logo/award-img3.png'
import img4 from './../logo/award-img4.png'
import img5 from './../logo/award-img5.png'


const images = [img1,img2,img3,img4,img5];

class SliderAwards extends React.PureComponent {
    state = {mouseTrackingEnabled: true, preventEventOnTouchMove: true}
    responsive = {
        0: {items: 1},
        600: {items: 2},
        960: {items: 3},
    }

    stagePadding = {
        paddingLeft: 0,
        paddingRight: 0,
    }

    render() {
        const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
        return (
            <div className={styles.app} id="app">
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

                >
                    {
                        images.map((el) => {
                            return (
                                <div className={styles.item} key={el}>
                                    <div className={styles.img} style={{backgroundImage: `url(${el})`}}></div>
                                    <h1 className={styles.text}>2014 World Cup Champion</h1>
                                </div>
                            )
                        })
                    }
                </AliceCarousel>
            </div>
        )
    }
}

export default SliderAwards
