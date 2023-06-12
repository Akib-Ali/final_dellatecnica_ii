import React, { Component } from 'react';
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { FormContact02, IconBox } from '../layouts/contact';
import { TitleHeading } from '../layouts/home01/index'
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { Link } from "react-router-dom"
import { Helmet } from 'react-helmet';
import { Switch, Route, useLocation } from 'react-router-dom';
import MetaTags from './Metatags'


const Contact = () => {
    const location = useLocation();

    //meta tags here used
    const metaTags = {
        '/': {
            title: 'Best Woodworking and Panel Processing Machines | DELLATECNICA',
            keywords: 'Best Woodworking and Panel Processing Machines, Panel Processing Machines, Woodworking Machinery in India, Woodworking Machines, DELLATECNICA, Woodworking equipments, PROMAC Panel Processing, HOLZMAC Panel Processing Machines, CNC Machine Manufacturers in Ludhiana, Panel saw, Automatic Throughfeed edge banding Machine, Corner Rounding Machine, Dust Collectors, CNC Machines, High tech CNC Machines, Best Woodworking Machine Brands, Woodworking tools, Panel Processing Woodworking Machinery, Durable Woodworking Machines, Woodworking machine manufacturer, Woodworking machines in India',
            description: 'DELLATECNICA provides best variety of Woodworking and Panel Processing Machines. We offer top quality woodworking equipments of Holzmac and Promac Brand having machines like Panel saw, Beam Saw, Curvilinear Edge Bander, Automatic Throughfeed edge banding  Machine, CNC Nesting Machine and many more.'
        },
        '/contact-us': {
            title: 'Contact us for Woodworking machines |DELLATECNICA',
            keywords: 'contact us, DELLATECNICA, Woodworking machines, Best Woodworking machines, DELLATECNICA phone number, DELLATECNICA email id, DELLATECNICA address, DELLATECNICA office, contact now',
            description: 'Are you looking for a Woodworking machines? Learn about our product range now and receive a free quote.'
        },
        // Add more pages and their respective meta tags here
    };

    const currentPageMetaTags = metaTags[location.pathname] || {};



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
             {/* <Helmet>
                <meta name="title" content="Contact us for Woodworking machines |DELLATECNICA" />
                <meta name="keywords" content=" contact us, DELLATECNICA, Woodworking machines, Best Woodworking machines, DELLATECNICA phone number, DELLATECNICA email id, DELLATECNICA address, DELLATECNICA office, contact now" />
                <meta name="description" content="Are you looking for a Woodworking machines? Learn about our product range now and receive a free quote." />
            </Helmet> */}

            <MetaTags/>
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