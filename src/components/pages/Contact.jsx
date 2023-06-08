import React, { Component } from 'react';
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { FormContact02, IconBox } from '../layouts/contact';
import { TitleHeading } from '../layouts/home01/index'
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet';

const Contact = () => {
    const banners = [
        {
            id: 1,
            links: '',
            titlelink: '',
            border: '',
            name: 'Contact',
            heading: 'CONTACT US'
        }
    ]
    const headingcontact = [
        {
            id: 1,
            classnames: 'heading',
            title: 'CONTACT US',
            text: 'Are you interested in finding out how Dellatecnica Woodworking company can make your project a success? For more information on our company please contact us.',
            classtext: 'sub-heading font-weight-400 max-width-770 line-height-26 margin-top-14',
        }
    ]
    return <>
        <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
            <Helmet>
                <meta name="title" content="Contact us for Woodworking machines |DELLATECNICA" />
                <meta name="keywords" content=" contact us, DELLATECNICA, Woodworking machines, Best Woodworking machines, DELLATECNICA phone number, DELLATECNICA email id, DELLATECNICA address, DELLATECNICA office, contact now" />
                <meta name="description" content="Are you looking for a Woodworking machines? Learn about our product range now and receive a free quote." />
            </Helmet>
            <div id="wrapper" className="animsition">
                <div id="page" className="clearfix">
                    <div id="site-header-wrap">
                        <TopBar />
                        <Header />
                    </div>
                    {
                        banners.map(data => (
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
                                                        <div className="themesflat-spacer clearfix" data-desktop={61} data-mobile={60} data-smobile={60} />
                                                        {
                                                            headingcontact.map(data => (
                                                                <TitleHeading data={data} key={data.id} />
                                                            ))
                                                        }
                                                        <div className="themesflat-spacer clearfix" data-desktop={45} data-mobile={35} data-smobile={35} />
                                                    </div>
                                                </div>
                                                <IconBox />
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="themesflat-spacer clearfix" data-desktop={58} data-mobile={35} data-smobile={35} />
                                                    </div>
                                                </div>
                                                <FormContact02 />
                                            </div>
                                        </div>
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
    </>
}
export default Contact;