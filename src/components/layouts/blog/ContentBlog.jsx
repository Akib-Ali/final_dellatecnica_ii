import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { format } from 'date-fns';
import ReactPaginate from 'react-paginate';
import { FiChevronsRight, FiChevronsLeft } from 'react-icons/fi'


import { Audio, RotatingLines, RotatingSquare, InfinitySpin } from 'react-loader-spinner'



const ContentBlog = () => {

    const [blogs, setBlogs] = useState([])
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);




    //pagination
    const indexOfLastProject = (currentPage + 1) * itemsPerPage;
    const indexOfFirstProject = indexOfLastProject - itemsPerPage;

    let currentBlogs = [];
    if (Array.isArray(data)) {
        currentBlogs = data.slice(indexOfFirstProject, indexOfLastProject);
    } else {

        console.log("something went wrong")
    }

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const pageCount = Math.ceil(data.length / itemsPerPage);



    useEffect(() => {
        getData()
        setLoading(true)
    }, [])

    const getData = async () => {
        const data = await axios({
            method: "get",
            // url: "/blog-list"
            url: "https://wild-gold-bull-sock.cyclic.app/blog-list"
        }).then((res) => {
            setData(res.data)
            setLoading(false)
        }).catch((err) => {
            setError(err)
            setLoading(false)
        })

    }



    return (
        <div id="site-content" className="site-content clearfix">
            <div id="inner-content" className="inner-content-wrap">

                {loading &&
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                        <RotatingLines strokeColor="#D4AF37" strokeWidth={5} animationDuration={0.75} width={86} visible={true} />
                    </div>


                }
                

                {data.length > 0 && currentBlogs.map((data, index) => (
                    <article className="hentry margin-top-33 padding-top-45 data-effect" key={index}>
                        <div className="post-media data-effect-item has-effect-icon offset-v-25 offset-h-24 clerafix">
                                <Link  to={`blog/${data.blog_slug}`} onClick={() => { window.location.href = `blog/${data.blog_slug}` }}><img src={data.pic} alt="altimage" /></Link>
                                <div className="post-calendar">
                                    <span className="inner">
                                        <span className="entry-calendar">
                                            <span className="day">{format(new Date(data.createdAt), 'dd')}</span>
                                            <span className="month">{format(new Date(data.createdAt), 'MMMM')}</span>
                                        </span>
                                    </span>
                                </div>
                                <div className="overlay-effect bg-color-1" />
                                <div className="elm-link">
                                    <Link to={`blog/${data.blog_slug}`} onClick={() => { window.location.href = `blog/${data.blog_slug}` }}className="icon-1" />
                                </div>
                            </div>
                            <div className="post-content-wrap clearfix">
                                <h2 className="post-title">
                                    <span className="post-title-inner">
                                        <Link to={`blog/${data.blog_slug}`} onClick={() => { window.location.href = `blog/${data.blog_slug}` }}>{data.blog_title}</Link>
                                    </span>
                                </h2>
                                <div className="post-meta">
                                    <div className="post-meta-content">
                                        <div className="post-meta-content-inner">
                                            <span className="post-date item">
                                                <span className="inner">
                                                    <span className="entry-date">
                                                        {format(new Date(data.createdAt), 'd MMM, yyyy')}</span>
                                                </span></span>
                                            <span className="post-by-author item"><span className="inner"><Link to="#">By :
                                                Admin</Link></span></span>
                                            <span className="comment item"><span className="inner"><Link to="#">{data.comments}
                                                Comments</Link></span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content post-excerpt">
                                    <p>{data.blog_summary}</p>
                                </div>
                                <div className="post-read-more">
                                    <div className="post-link">
                                        <Link to={`blog/${data.blog_slug}`} onClick={() => { window.location.href = `blog/${data.blog_slug}` }}>READ MORE</Link>
                                    </div>
                                </div>
                            </div>
                        {/* </Link> */}
                    </article>
                ))
                }

                <div className="themesflat-pagination clearfix mb-5">

                    {data.length > 3 &&
                        <ReactPaginate
                            previousLabel={<FiChevronsLeft />}
                            nextLabel={<FiChevronsRight />}
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName="pagination m-0"
                            activeClassName="active"
                        />
                    }









                </div>

            </div>
        </div>


    );
}


export default ContentBlog;