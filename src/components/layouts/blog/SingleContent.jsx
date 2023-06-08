import React, { Component, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { format } from 'date-fns';
import { Audio, Comment, ThreeDots } from 'react-loader-spinner'
import ReCAPTCHA from "react-google-recaptcha";



const SingleContent = ({ singleblog }) => {
    

    const [client_name, setclient_Name] = useState("");
    const [client_email, setclient_Email] = useState("")
    const [client_message, setclient_Message] = useState("")
    const [admin_approved, setadmin_Approved] = useState("no")
    const [error, setError] = useState(false)
    const [comments, setComments] = useState([])
    const [commenterror, setCommentError] = useState("")
    const [isloading, setLoading] = useState(false)
    const [recapthaValue, setRecapthaValue] = useState("")
    const [tags, setTags] = useState([]);

    const totalComments = comments.length





    // Recaptha 
    const capthaRef = useRef()
    const SITE_KEY = "6LeK_WwmAAAAALXWUgvC-3gko0ONIhq1xkmlqqMr"

    const handleRecaptha = (value) => {

        setRecapthaValue(value)

    }





    const handleComments = async (e) => {
        e.preventDefault()
        setLoading(true)
        capthaRef.current.reset()
        if (!client_name || !client_email || !client_message || !recapthaValue) {
            setError(true)
            return false

        }
        let result = await fetch("https://wild-gold-bull-sock.cyclic.app/post-comment", {
            method: 'post',
            body: JSON.stringify({ client_name, client_email, client_message, admin_approved, recapthaValue }),
            headers: {
                "Content-Type": "application/json"
            },

        });
        setclient_Name("")
        setclient_Email("")
        setclient_Message("")
        result = await result.json()
        setLoading(false)
        window.location.reload(true);


    }


    const filteredComments = comments.filter(
        (comment) => comment.admin_approved === 'yes'
    );

    const filterlength = filteredComments.length;



    const extractTags = () => {
        if (singleblog.blog_keyword) {
            const newTags = singleblog.blog_keyword.split(",");
            setTags(newTags);
        }
    };


    useEffect(() => {
        extractTags(); // Call the extractTags function
        getAllComment()

    }, [singleblog])



    const getAllComment = async () => {
        try {
            const response = await axios.get("https://wild-gold-bull-sock.cyclic.app/comment-list");
            const { data } = response;
            if (Array.isArray(data)) {
                setComments(data);
            } else {
                setCommentError("Invalid comment data");
            }
        } catch (error) {
            setCommentError(error.message);
        }
    }



    return (
        <div id="site-content" className="site-content clearfix">
            <div id="inner-content" className="inner-content-wrap">
                <article className="hentry data-effect">
                    <div className="post-media data-effect-item has-effect-icon offset-v-25 offset-h-24 clerafix">
                        <img src={singleblog.pic} alt="altimage" />
                        <div className="post-calendar">




                            <span className="inner">
                                <span className="entry-calendar">
                                    <span className="day">{singleblog.createdAt ? format(new Date(singleblog.createdAt), 'dd') : ''}</span>
                                    <span className="month">{singleblog.createdAt ? format(new Date(singleblog.createdAt), 'MMMM') : ''}</span>
                                </span>

                            </span>

                        </div>
                        <div className="overlay-effect bg-color-1" />

                    </div>
                    <div className="post-content-wrap clearfix">
                        <h2 className="post-title">
                            <span className="post-title-inner">
                                {singleblog.blog_title}
                            </span>
                        </h2>
                        <div className="post-meta">
                            <div className="post-meta-content">
                                <div className="post-meta-content-inner">

                                    <span className="post-date item">
                                        <span className="inner">
                                            <span className="entry-calendar">
                                                <span className="day">{singleblog.createdAt ? format(new Date(singleblog.createdAt), 'dd') : ''}</span> &nbsp;
                                                <span className="month">{singleblog.createdAt ? format(new Date(singleblog.createdAt), 'MMMM') : ''}</span> &nbsp;
                                                <span className="year">{singleblog.createdAt ? format(new Date(singleblog.createdAt), 'yyyy') : ''}</span>
                                            </span>

                                        </span>
                                    </span>


                                    <span className="post-by-author item"><span className="inner"><a href="#">By:
                                        Admin</a></span></span>
                                    <span className="comment item"><span className="inner"><a href="#">{filterlength} &nbsp;
                                        Comments</a></span></span>
                                </div>

                            </div>
                        </div>
                        <div className="post-content post-excerpt margin-bottom-43">
                            <div>{singleblog.blog_summary}</div>
                            <div dangerouslySetInnerHTML={{ __html: singleblog.blog_content }}>

                            </div>
                            <div className="box-excerpt clearfix">


                            </div>

                        </div>
                        <div className="post-tags-socials clearfix">
                            <div className="post-tags">
                                <span>Tags :</span>
                                {tags.map((tag, index) => (
                                    <a key={index}>{tag.trim()}</a>
                                ))}
                            </div>
                            <div className="post-socials ">
                                <a target='_blank' href="https://www.facebook.com/Dellatecnica.Machines/" className="facebook"><span className="fa fa-facebook-square" /></a>
                                <a target='_blank' href="https://www.instagram.com/dellatecnica/" className="twitter"><span className="fa fa-instagram" /></a>
                                <a target='_blank' href="https://www.linkedin.com/company/dellatecnica" className="linkedin"><span className="fa fa-linkedin-square" /></a>
                                <a target='_blank' href="https://www.youtube.com/@dellatecnica.machines" className="pinterest"><span className="fa fa-youtube-play" /></a>
                            </div>
                        </div>
                    </div>
                </article>
                <div className="themesflat-pagination clearfix no-border padding-top-17">
                    <ul className="page-prev-next">
                        <li>
                            <a className="prev">
                                Previous Article
                            </a>
                        </li>
                        <li className="text-right">
                            <a className="next">
                                Next Article
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="comments" className="comments-area">
                    <h2 className="comments-title">{filterlength} COMMENTS</h2>

                    {/* here start comment section  */}

                    {filteredComments.length > 0 && filteredComments.map((elem, index) => (


                        <ul className="comment-list">
                            <li className="comment">

                                <article className="comment-wrap clearfix">

                                    <div className="gravatar">

                                        <img alt="altimage" src="https://w7.pngwing.com/pngs/442/16/png-transparent-computer-icons-man-icon-logo-silhouette-business.png" />
                                    </div>
                                    <div className="comment-content">
                                        <div className="comment-meta">
                                            <h6 className="comment-author">{elem.client_name}</h6>

                                            <span className="post-date item">
                                                <span className="inner">
                                                    <span className="entry-date">
                                                        {format(new Date(elem.createdAt), 'd MMM, yyyy')}</span>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="comment-text">

                                            <p>{elem.client_message}</p>
                                        </div>
                                    </div>
                                </article>

                            </li>

                        </ul>

                    ))}

                    {/* here end */}
                    <div id="respond" className="comment-respond">
                        <h3 id="reply-title" className="comment-reply-title margin-bottom-31">Leave a Comment</h3>
                        <form id="commentform" className="comment-form">
                            <div className="text-wrap clearfix">
                                <fieldset className="name-wrap">
                                    <input type="text" id="author" className="tb-my-input" name="author" tabIndex={1}
                                        placeholder="Name*" size={32} aria-required="true"
                                        value={client_name}
                                        onChange={(e) => setclient_Name(e.target.value)}
                                        autoComplete='off'
                                    />
                                    {error && !client_name && <div className="form-text text-danger">Please enter name</div>
                                    }
                                </fieldset>
                                <fieldset className="email-wrap">
                                    <input type="email" id="email" className="tb-my-input"
                                        name="email" tabIndex={2}
                                        placeholder="Email*" defaultValue={""} size={32} aria-required="true"
                                        value={client_email}
                                        onChange={(e) => setclient_Email(e.target.value)}
                                        autoComplete='off'

                                    />
                                    {error && !client_email && <div className="form-text text-danger">Please enter a valid email</div>
                                    }

                                </fieldset>
                            </div>
                            <fieldset className="message-wrap">
                                <textarea id="comment-message" name="comment" rows={8} tabIndex={4} placeholder="Message*"
                                    aria-required="true" defaultValue={""}
                                    value={client_message}
                                    onChange={(e) => setclient_Message(e.target.value)}
                                    autoComplete='off'
                                />
                                {error && !client_message && <div className="form-text text-danger">Please enter a message</div>
                                }
                            </fieldset>

                            {/* captcha div start */}

                            <fieldset className="message-wrap">
                                <ReCAPTCHA
                                    sitekey={SITE_KEY}
                                    onChange={handleRecaptha}
                                    ref={capthaRef}
                                />

                                {error && !recapthaValue && <span className="form-text text-danger">Please select captcha </span>
                                }
                            </fieldset>


                            {/* capth div end */}
                            <p className="form-submit">
                                {isloading ? <ThreeDots
                                    height="80"
                                    width="80"
                                    radius="9"
                                    color="#F6BA6F"
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                />
                                    :
                                    <button id="comment-reply" className="submit" onClick={handleComments}>Send US</button>

                                }
                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default SingleContent;