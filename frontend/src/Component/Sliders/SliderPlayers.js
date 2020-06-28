import React from 'react';
import styles from '../../style/SliderPlayers.module.css'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import Player from "../Player";
import RightCircleOutlined from "@ant-design/icons/lib/icons/RightCircleOutlined";
import LeftCircleOutlined from "@ant-design/icons/lib/icons/LeftCircleOutlined";
import RightOutlined from "@ant-design/icons/lib/icons/RightOutlined";


export default class SliderPlayers extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            mouseTrackingEnabled: true,
            preventEventOnTouchMove: true
        }
    }

    responsive = {
        0: {items: 1},
        200: {items: 2},
        500: {items: 3},
        900: {items: 4},
    }
    stagePadding = {
        paddingLeft: 0,
        paddingRight: 0,
    }

    render() {
        const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
        return (
            <div className={styles.app} id="app">
                <div className={styles.btn}>
                    {/*<LeftCircleOutlined onClick={() => this.Carousel.slidePrev()} theme="outlined"/>*/}
                    {/*<RightCircleOutlined />*/}
                    {/*<RightOutlined onClick={() => this.Carousel.slideNext()}/>*/}
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
                    dotsDisabled={true}
                    ref={(el) => (this.Carousel = el)}
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