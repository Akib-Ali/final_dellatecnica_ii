import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { format } from 'date-fns';

const SidebarBlog = () => {
    const [blog, setBlog] = useState([])
    const [error, setError] = useState(false)
    const [tags, setTags] = useState([])

    useEffect(() => {
        getthreeData()
    }, [])

    const getthreeData = async () => {
        try {
            const responce = await axios.get("https://wild-gold-bull-sock.cyclic.app/blog-list")
            const data = responce.data.slice(0, 3);
            setBlog(data)
        } catch (error) {
            setError(error)

        }

    }
    // console.log(blog, "received only two blog in console")

    useEffect(() => {
        getTags()
    }, [])

    const getTags = async () => {
        const data = await axios({
            method: "get",
            url: "https://wild-gold-bull-sock.cyclic.app/blog-list"
        }).then((res) => {
            setTags(res.data)
        }).catch((err) => {
            console.log(err)

        })
    }

    console.log(tags, "get tags from useState")


    return (
        <div id="sidebar">
            <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={60} data-smobile={60} />
            <div id="inner-sidebar" className="inner-content-wrap">
                <div className="widget widget_search">
                    <form action="#" method="get" role="search" className="search-form style-1">
                        <input type="search" className="search-field" placeholder="Search..." defaultValue={""} name="s"
                            title="Search for" />
                        <button className="search-submit" type="submit" title="Search">Search</button>
                    </form>
                </div>{/* /.widget_search */}
                <div className="widget widget_follow">
                    <h2 className="widget-title"><span>FOLLOW US </span></h2>
                    <div className="follow-wrap clearfix col3 g8">
                        <div className="follow-item facebook">
                            <div className="inner">
                                <span className="socials">
                                    <a target='_blank' href="https://www.facebook.com/Dellatecnica.Machines/"><i className="fa fa-facebook" /></a>
                                    {/* <span className="text">43217 <br /> likes</span> */}
                                </span>
                            </div>
                        </div>
                        <div className="follow-item instagram">
                            <div className="inner">
                                <span className="socials">
                                    <a target='_blank' href="https://www.instagram.com/dellatecnica/"><i className="fa fa-instagram" /></a>
                                    {/* <span className="text">3752 flowers</span> */}
                                </span>
                            </div>
                        </div>
                        <div className="follow-item linkedin">
                            <div className="inner">
                                <span className="socials">
                                    <a target='_blank' href="https://www.linkedin.com/company/dellatecnica"><i className="fa fa-linkedin" /></a>
                                    {/* <span className="text">432 contacter</span> */}
                                </span>
                            </div>
                        </div>
                        <div className="follow-item google">
                            <div className="inner">
                                <span className="socials">
                                    <a target='_blank' href="https://www.youtube.com/@dellatecnica.machines"><i className="fa fa-youtube-play" /></a>
                                    {/* <span className="text">432 contacter</span> */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>{/* /.widget_follow */}
                <div className="widget widget_lastest">
                    <h2 className="widget-title"><span>RECENT POST</span></h2>
                    {blog.map((elem, index) => (
                        <Link to={`/blog-detail/${elem._id}`} onClick={() => { window.location.href = `/blog-detail/${elem._id}` }} key={index}>
                            <ul className="lastest-posts data-effect clearfix">
                                <li className="clearfix">
                                    <div className="thumb data-effect-item has-effect-icon ">

                                        <img src={elem.pic} alt={elem.pic} />


                                        <div className="overlay-effect bg-color-2" />
                                        <div className="elm-link">
                                            <a href="#" className="icon-2" />
                                        </div>
                                    </div>
                                    <div className="text">

                                        <h3>{elem.blog_title}</h3>

                                        <div className="post-calendar">
                                            <span className="post-date">
                                                <span className="entry-date">
                                                    <span className="day">{format(new Date(elem.createdAt), 'dd')}</span> &nbsp;
                                                    <span className="month">{format(new Date(elem.createdAt), 'MMMM')}</span> &nbsp;

                                                    <span className="year">{format(new Date(elem.createdAt), 'yyyy')}</span> &nbsp;
                                                </span>
                                            </span>
                                        </div>

                                    </div>
                                </li>

                            </ul>
                        </Link>
                    ))}


                </div>
                <div className="widget widget_tags margin-top-55">
                    <h2 className="widget-title"><span>TAGS</span></h2>
        
                    {tags.length > 0 && tags.map((elem, index) => (

                        <div className="tags-list" key={index}>
                           <Link to={`/blog-detail/${elem._id}`} onClick={() => { window.location.href = `/blog-detail/${elem._id}` }}>{elem.blog_keyword}</Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}


export default SidebarBlog;