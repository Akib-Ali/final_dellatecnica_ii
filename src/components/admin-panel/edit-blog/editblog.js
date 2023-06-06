import Navbar from "../Navbar/navbar"
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import JoditEditor from 'jodit-react';

import axios from "axios"
const EditBlog = () => {
    const [blog_title, setBlog_Title] = useState('');
    const [blog_slug, setBlog_Slug] = useState('');
    const [blog_summary, setBlog_Summary] = useState('');
    const [blog_keyword, setBlog_Keyword] = useState('')
    const [image, setImage] = useState('')
    const [pic, setpic] = useState('')
    const [blog_content, setBlog_Content] = useState('')


    const params = useParams()
    // const navigate = useNavigate()
    const editor = useRef(null);


    useEffect(() => {
        getBlogDetails()
    }, [])

    const getBlogDetails = async () => {
        //  let result = await fetch(`/blog/${params.id}`)
        let result = await fetch(`https://wild-gold-bull-sock.cyclic.app/blog/${params.id}`)
        result = await result.json()
        console.log(result, "all result receive fro backend")
        setBlog_Title(result.blog_title)

        setBlog_Slug(result.blog_slug)
        setBlog_Summary(result.blog_summary)
        setBlog_Keyword(result.blog_keyword)
        setImage(result.photo)
        setBlog_Content(result.blog_content)
    }

    console.log(image, "filleds this field")

    const handleUpdate = async (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "dellatecnica-data")
        data.append("cloud_name", "dzuvrxlsy")
        const res1 = await fetch("https://api.cloudinary.com/v1_1/dzuvrxlsy/image/upload", {
            method: "post",
            body: data
        })
            .then(res => res.json())
            .then(data => {
                setpic(data.url)

            }).catch(err => {
                console.log(err)
            })
    }

    // console.log(pic, "pic value received fromstarte update")

    useEffect(() => {
        if (pic) {

            //   fetch(`/blogupdate/${params.id}`, {
            fetch(`https://wild-gold-bull-sock.cyclic.app/blogupdate/${params.id}`, {
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
            }).then(res => res.json())
            setTimeout(() => {
                window.location.href = "/all-blogs"

            }, 1000)

            // navigate("/all-blogs")
            // window.location.href="/all-blogs"
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
                            <h5 className="mb-0">Update Blog </h5>
                            <small className="text-muted float-end">Dellatecnica</small>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="basic-default-fullname">Update Title</label>
                                            <input type="text" className="form-control" id="basic-default-fullname" placeholder="The Title for the Blog Post"
                                                name="blog_title"
                                                onChange={(e) => setBlog_Title(e.target.value)} />
                                            {/* {error && !blog_title && <div className="form-text text-danger">Please Enter Blog Title</div>
                                            } */}
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label" htmlFor="basic-default-company">Update Slug</label>
                                            <input type="text" className="form-control" id="basic-default-company" placeholder="The Permalink/Slug for the Blog Post"
                                                name="blog_slug"
                                                onChange={(e) => setBlog_Slug(e.target.value)} />
                                            {/* {error && !blog_slug && <div className="form-text text-danger">Please Enter Blog Slug</div>
                                            } */}
                                        </div>

                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-email">Update Summary</label>
                                    <div className="input-group input-group-merge">
                                        <textarea id="basic-default-message" className="form-control" placeholder="Short Summary, Used as the Meta Description"
                                            name="blog_summary"
                                            onChange={(e) => setBlog_Summary(e.target.value)}
                                        />

                                    </div>
                                    {/* {error && !blog_summary && <div className="form-text text-danger">Please Enter Blog Summary</div>
                                    } */}
                                </div>


                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-phone">Update Keywords</label>
                                    <input type="text" id="basic-default-phone" className="form-control phone-mask" placeholder="Used as Meta Keywords"
                                        name="blog_keyword"
                                        onChange={(e) => setBlog_Keyword(e.target.value)}
                                    />
                                    {/* {error && !blog_keyword && <div className="form-text text-danger">Please Enter Blog Keywords</div>
                                    } */}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-email">Thumbnail(Preferred Size: 1440X810)</label>
                                    <div className="input-group input-group-merge">
                                        <input type="file" id="basic-default-email" className="form-control" placeholder="Short Summary,Used as the Meta Description" aria-label="john.doe" aria-describedby="basic-default-email2"
                                            name="photo"
                                            onChange={(e) => setImage(e.target.files[0])}
                                        />
                                    </div>
                                    {/* {error && !image && <div className="form-text text-danger">Please Choose a Picture</div>
                                    } */}
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" htmlFor="basic-default-message">Update Content</label>
                                    {/* <textarea id="basic-default-message" className="form-control"
                                                    name="blog_content"
                                                    onChange={(e) => setBlog_Content(e.target.value)}
                                                /> */}
                                    <JoditEditor
                                        ref={editor}
                                        value={blog_content}
                                        onChange={newContent => setBlog_Content(newContent)}


                                    />


                                    {/* {error && !blog_content && <div className="form-text text-danger">Please Enter Blog Content</div>
                                                } */}
                                </div>
                                <button type="submit" className="btn btn-primary"
                                    onClick={handleUpdate}
                                >
                                    Update</button>
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

export default EditBlog