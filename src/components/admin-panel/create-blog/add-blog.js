import Navbar from "../Navbar/navbar"
import JoditEditor from 'jodit-react';
import { useEffect, useState, useRef } from "react";
import axios from "axios"
// import { useNavigate } from "react-router-dom";



const CreateBlog = () => {

    const [blog_title, setBlog_Title] = useState('');
    const [blog_slug, setBlog_Slug] = useState('');
    const [blog_summary, setBlog_Summary] = useState('');
    const [blog_keyword, setBlog_Keyword] = useState('')
    const [image, setImage] = useState('')
    const [pic, setpic] = useState('')
    const [blog_content, setBlog_Content] = useState('')
    const [content, setContent] = useState('');
    const [error, setError] = useState(false)
    // const navigate = useNavigate()

    const editor = useRef(null);





    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = {};
        if (!blog_title) {
            validationErrors.blog_title = "Please enter the blog title";
        }
        if (!blog_slug) {
            validationErrors.blog_slug = "Please enter the blog slug";
        }
        if (!blog_summary) {
            validationErrors.blog_summary = "Please enter the blog summary";
        }
        if (!blog_keyword) {
            validationErrors.blog_keyword = "Please enter the blog keyword";
        }
        if (!image) {
            validationErrors.image = "Please choose a picture";
        }
        if (!blog_content) {
            validationErrors.blog_content = "Please enter the blog content";
        }

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }


        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "dellatecnica-images")
        data.append("cloud_name", "dx3wxmbqf")
        const res1 = await fetch("https://api.cloudinary.com/v1_1/dx3wxmbqf/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setpic(data.url)
                console.log(pic, "received fom use starte")

            }).catch(err => {
                console.log(err)
            })
    }

    console.log(pic, "after function check image")



    useEffect(() => {
        if (pic) {

            // fetch("/post-newblog", {
            fetch("https://wild-gold-bull-sock.cyclic.app/post-newblog", {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`

                },
                body: JSON.stringify({
                    blog_title,
                    blog_slug,
                    blog_summary,
                    blog_keyword,
                    pic,
                    blog_content,
                })
            })

                .then(res => res.json())
            setTimeout(() => {
                window.location.href = "/all-blogs"

            }, 1000)

        }
    }, [pic])




    return (
        <>
            <Navbar />
            {/* <div className="content-wrapper"> */}
                        <div className="container-xxl flex-grow-1 container-p-y"> 
            {/* all contain here start */}
            <div className="col-2xl">
                <div className="card mb-4">
                    <div className="card-header d-flex justify-content-between align-items-center">
                        <h5 className="mt-5">Create Blog Post</h5>
                        <small className="text-muted float-end">Dellatecnica</small>
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="mt-5">
                                        <label className="form-label" htmlFor="basic-default-fullname">Title</label>
                                        <input type="text" className="form-control" id="basic-default-fullname" placeholder="The Title for the Blog Post"
                                            name="blog_title"
                                            onChange={(e) => setBlog_Title(e.target.value)} 
                                            autoComplete="off"/>
                                        {error && !blog_title && <div className="form-text text-danger">Please Enter Blog Title</div>
                                        }
                                    </div>
                                 </div>

                                <div className="col-md-6">
                                    <div className="mt-5">
                                        <label className="form-label" htmlFor="basic-default-company">Slug</label>
                                        <input type="text" className="form-control" id="basic-default-company" placeholder="The Permalink/Slug for the Blog Post"
                                            name="blog_slug"
                                            onChange={(e) => setBlog_Slug(e.target.value)}
                                            autoComplete="off" />
                                        {error && !blog_slug && <div className="form-text text-danger">Please Enter Blog Slug</div>
                                        }
                                    </div>

                                </div>
                            </div>
                            <div className="mt-5">
                                <label className="form-label" htmlFor="basic-default-email">Summary</label>
                                <div className="input-group input-group-merge">
                                    <textarea id="basic-default-message" className="form-control" placeholder="Short Summary, Used as the Meta Description"
                                        name="blog_summary"
                                        onChange={(e) => setBlog_Summary(e.target.value)}
                                        autoComplete="off"
                                    />

                                </div>
                                {error && !blog_summary && <div className="form-text text-danger">Please Enter Blog Summary</div>
                                }
                            </div>


                            <div className="mt-5">
                                <label className="form-label" htmlFor="basic-default-phone">Tags</label>
                                <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="Used as Meta Tags"
                                    name="blog_keyword"
                                    onChange={(e) => setBlog_Keyword(e.target.value)}
                                    autoComplete="off"
                                />
                                {error && !blog_keyword && <div className="form-text text-danger">Please Enter Blog Keywords</div>
                                }
                            </div>
                            <div className="mt-5">
                                <label className="form-label" htmlFor="basic-default-email">Thumbnail(Preferred Size: 1440X810)</label>
                                <div className="input-group input-group-merge">
                                    <input type="file" id="basic-default-email" className="form-control" placeholder="Short Summary,Used as the Meta Description" aria-label="john.doe" aria-describedby="basic-default-email2"
                                        name="photo"
                                        onChange={(e) => setImage(e.target.files[0])}
                                    />
                                </div>
                                {error && !image && <div className="form-text text-danger">Please Choose a Picture</div>
                                }
                            </div>

                            <div className="mt-5">
                                <label className="form-label" htmlFor="basic-default-message">Content</label>
                              
                                <JoditEditor
                                    ref={editor}
                                    value={blog_content}
                                    onChange={newContent => setBlog_Content(newContent)}


                                />

                            </div>
                            <button type="submit" className="btn btn-primary "
                                onClick={handleSubmit} 
                            >
                                Create</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* all contain here end */}
        </div>
        {/* </div> */}
        </>


    )



}

export default CreateBlog