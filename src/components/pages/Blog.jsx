import React, { Component, useEffect, useState } from 'react';
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { SidebarBlog, ContentBlog } from '../layouts/blog';
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import axios from 'axios';
import { Helmet } from 'react-helmet';

const Blog = () => {

    const [blog, setBlog] = useState([])
    const [error, setError] = useState("")

    const state = {
        headers: [
            {
                id: 1,
                logoweb: "assets/img/logo-small.png",
                names: "Blog",
            }
        ],
        banners: [
            {
                id: 1,
                links: '',
                titlelink: '',
                border: '',
                name: 'Blog',
                heading: 'BLOG'
            }
        ]
    }


    return (
        <div className="header-fixed sidebar-right header-style-2 topbar-style-1 menu-has-search">

      <div id="wrapper" className="animsition">
                <div id="page" className="clearfix">
                    <div id="site-header-wrap">
                        <TopBar />
                        {
                            state.headers.map((data, idx) => (
                                <Header data={data} key={idx} />
                            ))
                        }
                    </div>
                    {
                        state.banners.map(data => (
                            <BannerTitle key={data.id} data={data} />
                        ))
                    }
                    <div id="main-content" className="site-main clearfix">
                        <div id="content-wrap" className="container">
                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                            <ContentBlog />
                            <SidebarBlog />
                            <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
                        </div>
                    </div>
                    <Footer />
                    <BottomBar />
                </div>
            </div>
        </div>
    );
}


export default Blog;