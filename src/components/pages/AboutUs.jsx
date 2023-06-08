import React, { Component } from 'react'
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { TitleHeading, IconBox, About, Overview, Faq, ExhibitionSlider } from '../layouts/home01/index'
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { Helmet } from 'react-helmet'

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                {
                    id: 1,
                    logoweb: "assets/img/logo-small.png",
                    names: "About Us",
                }
            ],
            headingchoose: [
                {
                    id: 1,
                    classnames: 'heading',
                    title: 'YOUR BEST CHOOSE',
                    text: 'More than 12,000 projects completed by Dellatecnica - With over 20 years of experience, we have the knowledge to serve you.',
                    classtext: 'sub-heading',
                }
            ],
            banners: [
                {
                    id: 1,
                    links: '',
                    titlelink: '',
                    border: '',
                    name: 'About Us',
                    heading: 'ABOUT US'
                }
            ]
        }
    }
    render() {
        return (
            <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
                <Helmet>
                    <meta name="title" content="About-Us | DELLATECNICA" />
                    <meta name="keywords" content=" About us, about DELLATECNICA, about DELLATECNICA machines" />
                    <meta name="description" content="At DELLATECNICA, we understand the importance of quality in the woodworking industry, which is why we only offer the highest quality machines to our customers." />
                </Helmet>
                <div id="wrapper" className="animsition">
                    <div id="page" className="clearfix">
                        <div id="site-header-wrap">
                            <TopBar />
                            <Header />
                        </div>
                        {
                            this.state.banners.map(data => (
                                <BannerTitle key={data.id} data={data} />
                            ))
                        }
                        <div id="main-content" className="site-main clearfix">
                            <div id="content-wrap">
                                <div id="site-content" className="site-content clearfix">
                                    <div id="inner-content" className="inner-content-wrap">
                                        <div className="page-content">
                                            <div className="row-iconbox">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60}
                                                                data-mobile={60} data-smobile={60} />
                                                            {
                                                                this.state.headingchoose.map(data => (
                                                                    <TitleHeading data={data} key={data.id} />
                                                                ))
                                                            }
                                                            <div className="themesflat-spacer clearfix" data-desktop={42}
                                                                data-mobile={35} data-smobile={35} />
                                                        </div>
                                                    </div>

                                                    <IconBox />
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={41}
                                                                data-mobile={35} data-smobile={35} />
                                                            <div className="elm-button text-center">
                                                                <a href="promac" className="themesflat-button bg-accent">OUR BRANDS</a>
                                                            </div>
                                                            <div className="themesflat-spacer clearfix" data-desktop={73}
                                                                data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <About />
                                            {/* <Counter /> */}
                                            <div className="row-tabs">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={61}
                                                                data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <Overview />
                                                        <Faq />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <Partner /> */}

                                            <div className="mt-5">
                                                <ExhibitionSlider />
                                            </div>
                                            <div className="row-quote bg-row-1">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={40}
                                                                data-mobile={60} data-smobile={60} />
                                                            <div className="themesflat-quote style-1 clearfix">
                                                                <div className="quote-item">
                                                                    <div className="inner">
                                                                        <div className="heading-wrap">
                                                                            <h3 className="heading">START EXECUTING YOUR PROJECT
                                                                            </h3>
                                                                        </div>
                                                                        <div className="button-wrap has-icon icon-left">
                                                                            <a href="tel:+91 87279 22330" className="themesflat-button bg-white small"><span> +91 87279 22330 <span className="icon"><i className="autora-icon-phone-contact" /></span></span></a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="themesflat-spacer clearfix" data-desktop={31}
                                                                data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <LeaderTeam /> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                        <BottomBar />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;