import React from "react";
import styles from "../style/GalleryPhotosMatch.module.css";
import AliceCarousel from "react-alice-carousel";
import photo1 from './../logo/853d071dfa2f869fbd2a70dbcb3a8f5e.jpg'
import photo2 from './../logo/35b8bf93115eb2b8da9f8b4f41fdb0fd.jpg'
import photo3 from './../logo/Best-Football-Score-Apps-for-Android-feature-image.jpg'
import photo4 from './../logo/1449540000_dfa512708fbc257f1a399dd810d932ed.jpg'
import photo5 from './../logo/1449540000_1f7cd1168eb6e41eeed68a1154877d33.jpg'
import photo6 from './../logo/1449540000_e7ee87b9056f7e9171396905dd7c4e90.jpg'

const photos = [
    {bgI:{backgroundImage:`url('${photo1}')`},id:1},
    {bgI:{backgroundImage:`url('${photo2}')`},id:2},
    {bgI:{backgroundImage:`url('${photo3}')`},id:3},
    {bgI:{backgroundImage:`url('${photo4}')`},id:4},
    {bgI:{backgroundImage:`url('${photo5}')`},id:5},
    {bgI:{backgroundImage:`url('${photo6}')`},id:6}
]
export default class GalleryPhotosMatch extends React.PureComponent {
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
    render(){
        const {mouseTrackingEnabled, preventEventOnTouchMove} = this.state
        return (
            <div className={styles.app} id="app">
                <div className={styles.btn}>
                    <button className={styles.btnPrev} onClick={()=> this.Carousel.slidePrev()}><span>Prev</span></button>
                    <button className={styles.btnNext} onClick={()=> this.Carousel.slideNext()}><span>Next</span></button>
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
                    ref={(el)=> (this.Carousel =el)}
                >
                    {photos.map((photo) => {
                        return (
                            <div className={styles.item} key={photo.id}>
                                <div className={styles.wrap} style={photo.bgI}></div>
                            </div>
                        )
                    })}
                </AliceCarousel>
            </div>
        )
    }
}