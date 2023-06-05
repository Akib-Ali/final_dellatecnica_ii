import React from "react";
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { TabProject } from '../layouts/home02';

function Category(props) {
    const { category } = props;

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
    return <>
        <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
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
