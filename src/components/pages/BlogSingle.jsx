import React, { Component } from 'react';
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { SidebarBlog, SingleContent } from '../layouts/blog';
import { Header, Footer, TopBar, BottomBar } from '../layouts/general/index'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Helmet } from 'react-helmet';



const BlogDetails = () => {

    // const params = useParams()
    const { blog_slug } = useParams();
    const [singleblog, setSingleBlog] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {
        SingleBlog()
    }, [])

    const SingleBlog = async () => {
        const result = await axios({
            method: "get",
            url: (`https://wild-gold-bull-sock.cyclic.app/blog/${blog_slug}`)
        }).then((res) => {
            setSingleBlog(res.data)
        }).catch((error) => {
            setError(error)

        })

    }

    if (!singleblog) {
        return null; // Render loading state or handle the case when the blog is not found
    }

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || '';
    };





    const headers = [
        {
            id: 1,
            logoweb: "assets/img/logo-small.png",
            names: "Blog",
        }
    ]
    const banners = [
        {
            id: 1,
            links: '/blog',
            titlelink: 'Blog',
            border: '|',
            name: 'Blog Single',
            heading: 'Blog Single'
        }
    ]
    return <>
        <div className="header-fixed sidebar-right header-style-2 topbar-style-1 menu-has-search">

            {/* helmet Start */}

            <Helmet>
                <title>{singleblog.blog_title}</title>
                <meta name="title" content={singleblog.blog_title} />
                <meta name="keywords" content={singleblog.blog_keyword} />
                <meta name="description"
                    content={stripHtmlTags(singleblog.blog_summary)} />
            </Helmet>

            {/* helmet end */}

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
                        <div id="content-wrap" className="container">
                            <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                            <SingleContent singleblog={singleblog} />
                            <SidebarBlog />
                            <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />
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
export default BlogDetails;


