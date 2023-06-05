import React, { Component } from 'react';
import clip from "./video/slider-new-video.mp4"
import { Link, withRouter } from 'react-router-dom';
import bannerhome1 from './data_banner';
import bannerhome2 from '../home02/data_banner';

class Slider extends Component {

    render() {
        const { location } = this.props;
        const mainContent = () => {
            if (location.pathname === "/") {
                return (
                    <>
                        {
                            <div className="forcefullwidth_wrapper_tp_banner" style={{ width: "100%", marginTop: "0px", marginbottom: "0px" }}>
                                <div className="rev_slider_wrapper fullwidthbanner-container" style={{ marginTop: "0px", marginBottom: "0px", position: "absolute", overflow: "visible", height: "100%", width: "100%", left: "0px" }}>
                                    <div id="rev-slider1" className="rev_slider fullwidthabanner revslider-initialised tp-simpleresponsive" data-slideactive="rs-358314" style={{ marginTop: "0px", marginBottom: "0px", height: "100%", perspective: "2500px", backfaceVisibility: "hidden", transformStyle: "preserve-3d" }}>
                                        <ul className="tp-revslider-mainul" style={{ visibility: 'visible', display: 'block', overflow: 'hidden', width: '100%', height: '100%', maxHeight: 'none' }}>
                                            <li className="slider-video tp-revslider-slidesli" data-transition="random" style={{ width: '100%', height: '100%', overflow: 'hidden', zIndex: '18', visibility: 'hidden', opacity: '0' }}>
                                                <video src={clip} type="video/mp4"
                                                    controls={false}
                                                    muted
                                                    autoPlay={"autoplay"}
                                                    preload='auto'
                                                    loop style={{ height: '100%', width: '100%', objectFit: 'cover' }}></video>
                                            </li>
                                        </ul>

                                        <div className="tp-loader off" style={{ display: 'none' }}>
                                            <div className="dot1"></div>
                                            <div className="dot2"></div>
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                        <div className="tp-bannertimer" style={{ visibility: 'visible', width: '37.2667%', transform: 'translate3d(0px, 0px, 0px)' }}></div>
                                        <div className="tp-bullets custom horizontal nav-pos-hor-center nav-pos-ver-bottom nav-dir-horizontal noSwipe" style={{ width: '52px', height: '12px', top: '100%', transform: 'matrix(1, 0, 0, 1, -26, -42)', left: '50%', visibility: 'hidden', opacity: '0', display: "none" }}>
                                            <div className="tp-bullet" style={{ left: '0px', top: '0px' }}></div>
                                            <div className="tp-bullet" style={{ left: '20px', top: '0px' }}></div>
                                            <div className="tp-bullet selected" style={{ left: '40px', top: '0px' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tp-fullwidth-forcer" style={{ width: '100%', height: '500px' }}></div>
                            </div>
                        }
                    </>
                )
            }

        }
        return (

            <ul>
                {mainContent()}
            </ul>
        );
    }
}

export default withRouter(Slider);