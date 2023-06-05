import Navbar from "../Navbar/navbar"
import { useState, useEffect } from "react"
import axios from "axios"
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Footer from "../footer/footer";
import { Audio, Grid, Oval } from 'react-loader-spinner'


const Comment = () => {

    const [isloading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [admin_approved, setadmin_Approved] = useState(null)

    const [error, setError] = useState(false)



    useEffect(() => {
        getComments()
    }, [])


    const getComments = async () => {

        let result = await axios({
            method: "get",
            url: "https://wild-gold-bull-sock.cyclic.app/comment-list"

        }).then((res) => {
            setData(res.data)
        }).catch((err) => {
            setError(error)

        })


    }

    console.log(data, "received comments from useState")



    const handleApprovedComment = async (id) => {
        const newStatus = data.find(comment => comment._id === id).admin_approved === "yes" ? "no" : "yes";

        try {
            await axios.post(`https://wild-gold-bull-sock.cyclic.app/update-comment/${id}`, {
                admin_approved: newStatus,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }




    }


    const handleReject = async (id) => {

        const newStatus = data.find(comment => comment._id === id).admin_approved === "yes" ? "no" : "yes";

        try {
            await axios.post(`https://wild-gold-bull-sock.cyclic.app/update-comment/${id}`, {
                admin_approved: newStatus,
            });
            window.location.reload();
        } catch (error) {
            console.error(error);
        }

    }






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

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">SR.NO.</th>
                            <th scope="col">NAME</th>
                            <th scope="col">EMAIL</th>
                            <th scope="col">MASSAGE</th>
                            <th scope="col">STATUS</th>
                            <th scope="col">ACTION</th>
                        </tr>
                    </thead>
                    {/* <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody> */}

                    {data.length > 0 && data.map((elem, index) => {
                        return (
                            <tbody className="table-border-bottom-0" key={index}>
                                <tr>
                                    <td>{index + 1}</td>

                                    <td>{elem.client_name}</td>
                                    <td>{elem.client_email}</td>
                                    <td>{elem.client_message}</td>

                                    <td>
                                        {elem.admin_approved === "yes" ? (
                                            <span className="badge bg-success me-1"
                                                onClick={() => handleReject(elem._id)} style={{ cursor: "pointer" }}>Active</span>
                                        ) : (
                                            <span className="badge bg-primary text-white me-1" onClick={() => handleApprovedComment(elem._id)}
                                            style={{ cursor: "pointer" }}>Inactive</span>
                                        )}

                                    </td>



                                    <td>
                                        <DeleteModal
                                            id={elem._id}
                                            refetch={getComments}

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

export default Comment


const DeleteModal = (props) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const handleDelete = async () => {

        let api = await axios({
            method: "delete",
            url: (`https://wild-gold-bull-sock.cyclic.app/delete-comment/${props.id}`),
            // headers:{
            //     authorization:`bearer ${JSON.parse(localStorage.getItem("token"))}`
            //  }

        })
        props.refetch()

        onCloseModal()


    }



    return (
        <>
            <button className="btn btn-sm btn-danger" onClick={onOpenModal}>Delete</button>
            <Modal open={open} center onClose={onCloseModal}>
                <br></br>
                <h2>Are you sure you want to delete ?</h2>
                <button className="btn btn-sm btn-danger" onClick={handleDelete}>Yes</button>
                <button className="btn btn-sm btn-primary" onClick={onCloseModal}>No</button>
            </Modal>
        </>
    )
}

