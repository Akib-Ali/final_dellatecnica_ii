import React, { useEffect, useState } from 'react';
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { ContentProject, RelateProject, Sidebar } from '../layouts/project';
import NotFound from './notFound';
import { fetchProduct } from '../../utils/helpers';

const ProductDetail = (props) => {
    const slug = props.match.params.slug;
    const [product, setProduct] = useState(null);
    const [category, setCategory] = useState('');

    const getProduct = async () => {
        const matchedProduct = await fetchProduct(slug);
        setProduct(matchedProduct);
        setCategory(matchedProduct.name01)
    }

    useEffect(() => {
        getProduct();
    }, [slug]);

    const headers = [
        {
            id: 1,
            logoweb: "assets/img/logo-small.png",
            names: "Products",
        }
    ];

    const banners = [
        {
            id: 1,
            links: category == 'Holzmac' ? '/holzmac' : '/promac',
            titlelink: category == 'Holzmac' ? 'Holzmac Product' : 'Promac Product',
            border: '|',
            name: 'Projects',
            heading: !product ? '' : product.heading
        }
    ];

    const relatedProducts = [
        {
            id: 1,
            srcimg: '/assets/img/imagebox/top-rated-product-1.png',
            heading: 'PANEL SAW',
            meta: 'Holzmac',
            text: 'PS-300T+',
            slug: "panel-saw-300",
        },
        {
            id: 2,
            srcimg: '/assets/img/imagebox/top-rated-product-2.png',
            heading: 'THROUGH FEED EDGE BANDER',
            meta: 'Holzmac',
            text: 'TF-6',
            slug: 'edge-banding-machine-tf-6',
        },
        {
            id: 3,
            srcimg: '/assets/img/imagebox/top-rated-product-3.png',
            heading: 'TWIN HEAD DRILLING MACHINE',
            meta: 'Holzmac',
            text: 'Duplex',
            slug: 'multi-borer-duplex',
        },
        {
            id: 4,
            srcimg: '/assets/img/imagebox/top-rated-product-4.png',
            heading: 'CNC ROUTER',
            meta: 'Holzmac',
            text: 'NC-1330ATC',
            slug: 'cnc-router-1330'
        },
        {
            id: 5,
            srcimg: '/assets/img/partners/featured-product-01.png',
            heading: 'CURVILINEAR EDGE BANDER & TRIMMER',
            meta: 'Holzmac',
            text: 'EB-Smart+',
            slug: 'eb-smart-plus',
        },
        {
            id: 6,
            srcimg: '/assets/img/partners/featured-product-03.png',
            heading: 'AUTOMATIC BEVEL EDGE BANDER',
            meta: 'Holzmac',
            text: 'Inclinia',
            slug : "edge-bander-inclinia",
        },
    ]
    return <>
        <div className="header-fixed page no-sidebar header-style-2 topbar-style-1 menu-has-search">
            <div id="wrapper" className="animsition">
                <div id="page" className="clearfix">
                    <div id="site-header-wrap">
                        <TopBar />
                        {
                            headers.map((data, idx) => (
                                <Header data={data} key={idx} />
                            ))
                        }
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
                                        <div className="row-project-detail">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                                        <div className="detail-inner-wrap">
                                                            {
                                                                !product ? <NotFound /> : (
                                                                    <>
                                                                        <Sidebar product={product} />
                                                                        <ContentProject product={product} />
                                                                    </>
                                                                )
                                                            }
                                                        </div>
                                                        <div className="themesflat-spacer clearfix" data-desktop={58} data-mobile={60} data-smobile={60} />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="themesflat-lines style-1 line-full line-solid clearfix"><span className="line" /></div>
                                                        <div className="themesflat-spacer clearfix" data-desktop={46} data-mobile={35} data-smobile={35} />
                                                        
                                                        <div className="themesflat-headings style-2 clearfix">
                                                            <h2 className="heading">RELATED PRODUCTS</h2>
                                                            <div className="sep has-width w80 accent-bg margin-top-3 clearfix" />
                                                        </div>
                                                        <div className="themesflat-spacer clearfix" data-desktop={35} data-mobile={35} data-smobile={35} />
                                                        <RelateProject banner={banners} data={relatedProducts} />
                                                        <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                    {
                        headers.map((data, idx) => (
                            <BottomBar data={data} key={idx} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>
}

export default ProductDetail;
