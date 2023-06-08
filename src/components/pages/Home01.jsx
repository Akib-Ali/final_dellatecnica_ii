import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Slider, TitleHeading, IconBox, About, Service, Project, ServicesBox, Testimonial, Overview, Faq, Partner, ExhibitionSlider } from '../layouts/home01/index'
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { Counter } from '../layouts/about'
import { Helmet } from 'react-helmet'


const Home01 = () => {
    const headingchoose = [
        {
            id: 1,
            classnames: 'heading',
            title: 'TRUSTWORTHINESS',
            text: 'Welcome to DELLATECNICA - your go-to destination for all things related to wood working machines! Our company is dedicated to providing you with the highest quality wood working machines.',
            classtext: 'sub-heading',
        }
    ]
    const headingservice = [
        {
            id: 1,
            classnames: 'heading',
            title: 'TOP RATED PRODUCTS',
            text: 'Our top-rated products include panel saw machines, edgebanding machines, CNC routers, and nesting machines, among others.',
            classtext: 'sub-heading',
        }
    ]
    const headingproject = [
        {
            id: 1,
            classnames: 'heading text-white',
            title: 'FEATURED PRODUCT',
            classtext: 'sub-heading',
        }
    ]
    const servicebox = [
        {
            id: 1,
            classnames: 'heading font-size-30',
            title: 'ALL SERVICES',
            classtext: 'sub-heading font-weight-400',
            text: 'Are you interested in finding out how we can make your project a success? Please constact us.'
        }

    ]
    return <>
        <div className="header-fixed page no-sidebar header-style-2 topbar-style-2 menu-has-search">

            <Helmet>
                <meta name="title" content="Best Woodworking and Panel Processing Machines | DELLATECNICA" />
                <meta name="keywords" content="Best Woodworking and Panel Processing Machines, Panel Processing Machines, Woodworking Machinery in India, Woodworking Machines, DELLATECNICA,  Woodworking  equipments, PROMAC Panel Processing, HOLZMAC Panel Processing Machines, CNC Machine Manufacturers in Ludhiana, Panel saw, Automatic Throughfeed edge banding Machine, Corner Rounding Machine, Dust Collectors, CNC Machines, High tech CNC Machines, Best Woodworking Machine Brands, Woodworking tools, Panel Processing Woodworking Machinery, Durable Woodworking Machines, Woodworking machine manufacturer, Woodworking machines in India" />
                <meta name="description" content="DELLATECNICA provides best variety of Woodworking and Panel Processing Machines. We offer top quality woodworking equipments of Holzmac and Promac Brand having machines like Panel saw, Beam Saw, Curvilinear Edge Bander, Automatic Throughfeed edge banding  Machine, CNC Nesting Machine and many more." />
            </Helmet>
            <div id="wrapper" className="animsition">
                <div id="page" className="clearfix">
                    <div id="site-header-wrap">
                        <TopBar />
                        <Header />
                    </div>
                    <div id="main-content" className="site-main clearfix">
                        <div id="content-wrap">
                            <div id="site-content" className="site-content clearfix">
                                <div id="inner-content" className="inner-content-wrap">
                                    <div className="page-content">
                                        <div className="rev_slider_wrapper fullwidthbanner-container">
                                            <div id="rev-slider1" className="rev_slider fullwidthabanner">
                                                <Slider />
                                            </div>
                                        </div>
                                        <div className="row-iconbox">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                        {
                                                            headingchoose.map(data => (
                                                                <TitleHeading data={data} key={data.id} />
                                                            ))
                                                        }
                                                        <div className="themesflat-spacer clearfix" data-desktop={42} data-mobile={35} data-smobile={35} />
                                                    </div>
                                                </div>

                                                <IconBox />
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="themesflat-spacer clearfix" data-desktop={41} data-mobile={35} data-smobile={35} />
                                                        <div className="elm-button text-center">
                                                            <a href="/holzmac" className="themesflat-button bg-accent">OUR BRANDS</a>
                                                        </div>
                                                        <div className="themesflat-spacer clearfix" data-desktop={73} data-mobile={60} data-smobile={60} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Start About Section in Home Page */}
                                        <div className="container-fluid">
                                            <div className="row equalize sm-equalize-auto">
                                                <div className="col-md-6 half-background style-1" />
                                                <div className="col-md-6 bg-light-grey">
                                                    <div className="themesflat-spacer clearfix" data-desktop={64} data-mobile={60} data-smobile={60} />
                                                    <div className="themesflat-content-box clearfix" data-margin="0 25% 0 4.5%" data-mobilemargin="0 0 0 4.5%">
                                                        <div className="themesflat-headings style-1 clearfix">
                                                            <h2 className="heading">ABOUT US</h2>
                                                            <div className="sep has-width w80 accent-bg margin-top-11 clearfix" />

                                                            <p className="sub-heading margin-top-30 text-justify"><span className='about_bold_text'>DELLATECNICA</span> is a renowned woodworking machinery firm based in Ludhiana, India, and stands as a true pioneer in the field. Established in 2004 by our Managing Director, <span className='about_bold_text'>VIKAS GERA</span>, our company has flourished under his visionary leadership and extensive experience of two decades in designing, manufacturing, and marketing woodworking machines.<br />
                                                                <br />
                                                                At <span className='about_bold_text'>DELLATECNICA</span>, we embody a perfect blend of ambition and excellence, driven by the dynamic nature of <span className='about_bold_text'>VIKAS GERA</span> himself. Balancing his roles as an engineer, designer, and entrepreneur, <span className='about_bold_text'>Vikas</span> has fostered a company culture focused on delivering exceptional solutions for wood working and panel processing.
                                                                <br />
                                                                <br />
                                                                We take great pride in offering a comprehensive range of top-quality woodworking equipment tailored to suit every need. Our product lineup encompasses everything from basic machinery to state-of-the-art CNC machines, as well as sawmilling equipment and fine finishing equipment.
                                                                <br />
                                                            </p>
                                                        </div>
                                                        <div className="themesflat-spacer clearfix" data-desktop={26} data-mobile={35} data-smobile={35} />
                                                        <div className="content-list">
                                                            <div className="themesflat-list has-icon style-1 icon-left clearfix">
                                                            </div>
                                                        </div>

                                                        <div className="elm-button">
                                                            <a href="/about-us" className="themesflat-button bg-white">Read More</a>
                                                        </div>
                                                    </div>
                                                    <div className="themesflat-spacer clearfix" data-desktop={75} data-mobile={60} data-smobile={60} />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Start About Section in Home Page */}
                                        <div className="row-services">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                        {
                                                            headingservice.map(data => (
                                                                <TitleHeading data={data} key={data.id} />
                                                            ))
                                                        }
                                                        <div className="themesflat-spacer clearfix" data-desktop={39} data-mobile={35} data-smobile={35} />
                                                        <Service />
                                                        <div className="themesflat-spacer clearfix" data-desktop={50} data-mobile={35} data-smobile={35} />
                                                        <div className="elm-button text-center">
                                                            <a href="/promac" className="themesflat-button bg-accent">VIEW MORE</a>
                                                        </div>
                                                        <div className="themesflat-spacer clearfix" data-desktop={73} data-mobile={60} data-smobile={60} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Counter />
                                        <div className="row-project parallax parallax-1 parallax-overlay">
                                            <div className="project-overlay">
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-md-12">
                                                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                            {
                                                                headingproject.map(data => (
                                                                    <TitleHeading data={data} key={data.id} />
                                                                ))
                                                            }
                                                            <div className="themesflat-spacer clearfix" data-desktop={30} data-mobile={35} data-smobile={35} />

                                                            <Project />
                                                            <div className="themesflat-spacer clearfix" data-desktop={41} data-mobile={35} data-smobile={35} />
                                                            <div className="elm-button text-center">
                                                                <a href="/holzmac" className="themesflat-button bg-accent">ALL PRODUCTS </a>
                                                            </div>
                                                            <div className="themesflat-spacer clearfix" data-desktop={73} data-mobile={60} data-smobile={60} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='youTube_video'>
                                            <iframe width="100%" height="500" src="https://www.youtube.com/embed/wpcvEIPhgtk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </div>
                                        <Testimonial />
                                        <div className="row-quote bg-row-1">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        {/* <div className="themesflat-spacer clearfix" data-desktop={40} data-mobile={60} data-smobile={60} /> */}
                                                        <div className="themesflat-quote style-1 clearfix">
                                                            <div className="quote-item">
                                                                <div className="inner">
                                                                    <div className="heading-wrap">
                                                                        <h1 className="heading">START YOUR OWN WOOD WORKING COMPANY NOW</h1>
                                                                    </div>
                                                                    <div className="button-wrap has-icon icon-left">
                                                                        <a href="tel:+91 87279 22330" className="themesflat-button bg-white small"><span> +91 87279 22330 <span className="icon"><i className="autora-icon-phone-contact" /></span></span></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="themesflat-spacer clearfix" data-desktop={31} data-mobile={60} data-smobile={60} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-tabs">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="themesflat-spacer clearfix" data-desktop={61} data-mobile={60} data-smobile={60} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <Overview />
                                                    <Faq />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='imagePopup'>
                                            <div className="modal-body">
                                                <img src='/assets/img/partners/partner-07.png'></img>
                                                <div className='closeBtn'>
                                                    <i className="fa fa-times" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <Partner /> */}
                                        <div className="mt-5">
                                            <ExhibitionSlider />
                                        </div>
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
    </>
}

export default Home01;