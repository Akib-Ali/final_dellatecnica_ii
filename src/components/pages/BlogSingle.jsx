import React, { Component } from 'react';
import BannerTitle from '../layouts/about/banner/BannerTitle'
import { SidebarBlog, SingleContent } from '../layouts/blog';
import {Header, Footer, TopBar, BottomBar} from '../layouts/general/index'
import  { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';


const BlogDetails = () => {

    const params = useParams()
    // console.log(params, "id received from params")
    const [singleblog, setSingleBlog] = useState([])
    const [error, setError] = useState(false)


    useEffect(() => {
        SingleBlog()
    }, [])

    const SingleBlog = async () => {
        const result = await axios({
            method: "get",
            url: (`https://wild-gold-bull-sock.cyclic.app/blog/${params.id}`)

        }).then((res) => {
            setSingleBlog(res.data)
        }).catch((error) => {
            setError(error)

        })

    }


    // console.log(singleblog, "data received from useState")



   const headers= [
        {
            id: 1,
            logoweb: "assets/img/logo-small.png",
            names: "Blog",
        }
    ]
    const banners= [
        {
            id: 1,
            links: '/blog',
            titlelink: 'Blog',
            border: '|',
            name: 'Blog Single',
            heading: 'Blog Single'
        }
    ]
    return<>
       <div className="header-fixed sidebar-right header-style-2 topbar-style-1 menu-has-search">
                <div id="wrapper" className="animsition">
                    <div id="page" className="clearfix">
                        <div id="site-header-wrap">
                            <TopBar />
                            {
                                headers.map((data,idx) =>(
                                    <Header data={data} key={idx}/>
                                ))
                            }
                        </div>
                        {
                           banners.map(data =>(
                                <BannerTitle key={data.id} data={data}/>
                            ))
                        }
                        <div id="main-content" className="site-main clearfix">
                            <div id="content-wrap" className="container">
                                <div className="themesflat-spacer clearfix" data-desktop={60} data-mobile={60} data-smobile={60} />
                                <SingleContent  singleblog={singleblog}/>
                                <SidebarBlog />  
                                <div className="themesflat-spacer clearfix" data-desktop={80} data-mobile={60} data-smobile={60} />                          
                            </div>
                        </div>
                        <Footer />
                        {
                            headers.map((data,idx) =>(
                                <BottomBar data={data} key={idx}/>
                            ))
                        }
                    </div>
                </div>
            </div>
    </>
}
export default BlogDetails;


