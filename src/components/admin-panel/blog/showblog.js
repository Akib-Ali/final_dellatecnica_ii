import Navbar from "../Navbar/navbar"
import { useState, useEffect } from "react"
import axios from "axios"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Audio, Grid, Oval } from 'react-loader-spinner'
import { Link } from "react-router-dom";

const ShowBlog = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [isloading, setLoading] = useState(false)

    useEffect(() => {
        getData()
        setLoading(true)
    }, [])
    const getData = async () => {
        const data = await axios({
            method: "get",
            //  url: "/blog-list",
            url: "https://wild-gold-bull-sock.cyclic.app/blog-list",
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }

        }).then((res) => {
            setData(res.data)
            setLoading(false)
            // console.log(res.data)
        }).catch((err) => {
            setError(err)
        })
    }

    console.log(data, "received blog from state")



    return (

        <>
            <Navbar />
            {isloading ? (
                
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
                    <Oval
                        height={80}
                        width={80}
                        color="#D4AF37"
                        secondaryColor="#D4AF37"
                    />
                </div>
            ) : (

                <table class="table" style={{ marginTop: "0px" }}>
                    <thead>
                        <tr>
                            <th scope="col">SR.NO</th>
                            <th scope="col">Image</th>
                            <th scope="col">Title</th>
                            <th scope="col">Slug</th>
                            <th scope="col">Keyword</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>

                    {data.length > 0 && data.map((elem, index) => {
                        return (
                            <tbody className="table-border-bottom-0" key={index}>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td><img src={elem.pic} height="100px" width="150px" /></td>
                                    <td>{elem.blog_title}</td>
                                    <td>{elem.blog_slug}</td>
                                    <td>{elem.blog_keyword}</td>
                                    <td>
                                        {/* <span className="badge bg-label-primary me-1"> */}
                                        <span>
                                            Active</span>
                                    </td>
                                    <td>
                                        <Link to={`/edit-blog/${elem._id}`}>
                                            <button className="btn btn-sm btn-primary">Edit</button>
                                        </Link>

                                        <DeleteModal
                                            id={elem._id}
                                            refetch={getData}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })}

                </table>
            )}
        
        </>
    )





}

export default ShowBlog


const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleDelete = async () => {

        let api = await axios({
            method: "delete",
            url: (`https://wild-gold-bull-sock.cyclic.app/delete-blog/${props.id}`),
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`
            }

        })
        props.refetch()

        onCloseModal()


    }



    return (
        <>
            <button className="btn btn-sm btn-danger" onClick={onOpenModal}>Delete</button>
            <Modal open={open} center onClose={onCloseModal}>
                <br></br>
                <h2>Are you sure you want to delete?</h2>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>Yes</button>
                <button className="btn btn-sm btn-primary" onClick={onCloseModal}>No</button>
            </Modal>
        </>
    )
}

