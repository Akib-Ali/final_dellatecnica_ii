import React, { useEffect, useState } from "react";
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { TabProject } from '../layouts/home02';
import { Helmet } from 'react-helmet';

function Category(props) {
    const { category } = props;

    const [title, setTitle] = useState('');
    const [keywords, setKeywords] = useState('');
    const [description, setDescription] = useState('');

    const headers = [
        {
            id: 1,
            logoweb: "assets/img/logo-small.png",
            names: "Projects",
        }
    ]
    const banners = [
        {
            id: 1,
            links: '',
            titlelink: '',
            border: '',
            name: 'Projects',
            heading: category === 'Holzmac' ? 'HOLZMAC PRODUCTS' : 'PROMAC PRODUCTS'
        }
    ]

    useEffect(() => {
        let metaTitle = '';
        let metaKeywords = '';
        let metaDescription = '';
        if (category === "Holzmac") {
            metaTitle = `Holzmac - Designed & Manufactured Under Technical Assistance from DELLATECNICA`;
            metaKeywords = `Panel Saw, wood working machines, wood working manufacturing, best wood working machine supplier, top rated wood working machines, best machine manufacturer near me, CNC machine supplier near me`;
            metaDescription = `Holzmac is the best Wood Working Machine Brand available with DELLATECNICA. Promac offers High Quality Machines for your wood working needs.`;
        } else {
            metaTitle = `Promac - Designed & Manufactured Under Technical Assistance from CMC ITALY`;
            metaKeywords = `GUSSEPE BOSCO, Wood working machines, best wood working machines, Panel Saw, CNC Italy, wood working machine supplier, wood works near me, CNC Machine price in india, manufacturer of cnc laser cutting machine`;
            metaDescription = `With a perfect blend of ambition and excellence ‘PROMAC’ is promoted by VIKAAS GERA & GUSSEPE BOSCO of CMC Italy who has three     decade experience in designing, manufacturing & marketing of wood working machines.`;
        }
        setTitle(metaTitle);
        setKeywords(metaKeywords);
        setDescription(metaDescription);
    }, [category]);

    return <>
        <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
            <Helmet>
                <meta name="title" content={title} />
                <meta name="keywords" content={keywords} />
                <meta name="description" content={description} />
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
                                        <div className="row-services">
                                            <TabProject category={category} />
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

export default Category;