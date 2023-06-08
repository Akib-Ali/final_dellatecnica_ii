import React, { Component } from 'react';
import { useState, useRef } from 'react';
import axios from 'axios';
import { Audio, Comment, ThreeDots } from 'react-loader-spinner'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './FormContact02.css'; // Import custom CSS file for styling
import ReCAPTCHA from "react-google-recaptcha";




const FormContact02 = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("");
    const [phone_number, setphoneNumber] = useState("")
    const [error, setError] = useState(false)
    const [loading, setImage] = useState(false)
    const [isLoading, setLoading] = useState(false);
    const [isEmailsent, setEmailSent] = useState(false)
    const [recapthaValue, setRecapthaValue] = useState("")




    const handleQuillChange = (value) => {
        setMessage(value)
    }



    const handleEmail = async (event) => {
        event.preventDefault()
        capthaRef.current.reset()
        if (!name || !email || !message || !phone_number || !recapthaValue) {
            setError(true)
            return false
        }
        setLoading(true);

        const body = {

            name,
            email,
            message,
            phone_number,
            recapthaValue
        }


        await axios.post('https://wild-gold-bull-sock.cyclic.app/mail', body, {
            // await axios.post('/mail', body,{



            headers: {
                'Content-type': 'application/json'
            }
        }).then((res) => {

            setLoading(false)
            toast('Thanks for connectng with us. Our representative will contact you soon.');
            setName("")
            setEmail("")
            setphoneNumber("")
            setMessage("")
            window.location.reload(true);
        }).catch((err) => {
            console.log(err)
        })
        setLoading(false);


    }

    //captha code 
    const capthaRef = useRef()

    const SITE_KEY = "6LeK_WwmAAAAALXWUgvC-3gko0ONIhq1xkmlqqMr"


    const handleRecaptha = (value) => {
        // console.log(value, "received recaptha")
        setRecapthaValue(value)

    }
    console.log(recapthaValue, "received from state")





    return <>
        <div className="row-contact">

            {isLoading &&
                <Comment
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="comment-loading"
                    wrapperStyle={{}}
                    wrapperClass="comment-wrapper"
                    color="white"
                    backgroundColor="#F6BA6F"
                />
            }

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                className="toast-container"
            />


            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="themesflat-contact-form style-2 w100 clearfix">
                            <form onSubmit={handleEmail} method='post'
                                className="contact-form wpcf7-form">
                                <span className="wpcf7-form-control-wrap your-name">
                                    <input type="text" tabIndex={1} id="name" name="name"
                                        className="wpcf7-form-control" placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoComplete='off' />
                                    {error && !name && <span className="form-text text-danger">Please enter full name</span>
                                    }
                                </span>
                                <span className="wpcf7-form-control-wrap your-email">
                                    <input type="email" tabIndex={3} id="email" name="email"
                                        className="wpcf7-form-control" placeholder="Your Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete='off'
                                    />
                                    {error && !email && <span className="form-text text-danger">Please enter valid email</span>
                                    }
                                </span>
                                <span className="wpcf7-form-control-wrap your-phone">
                                    <input type="text" tabIndex={2} id="phone" name="phone_number"
                                        className="wpcf7-form-control" placeholder="Phone"
                                        value={phone_number}
                                        onChange={(e) => setphoneNumber(e.target.value)}
                                        autoComplete='off'
                                    />
                                    {error && !phone_number && <span className="form-text text-danger">Please enter contact number</span>
                                    }

                                </span>
                                <span className="wpcf7-form-control-wrap your-message">
                                    <textarea name="message" tabIndex={5} cols={40} rows={10}
                                        className="wpcf7-form-control wpcf7-textarea" placeholder="Message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        autoComplete='off' />
                                    {error && !message && <span className="form-text text-danger">Please enter a message</span>
                                    }

                                </span>

                                {/* RECAPTHA DIV */}
                                <span className="wpcf7-form-control-wrap your-message mt-3">

                                    <ReCAPTCHA
                                        sitekey={SITE_KEY}
                                        onChange={handleRecaptha}
                                        ref={capthaRef}
                                    />

                                    {error && !recapthaValue && <span className="form-text text-danger">Please select captcha </span>
                                    }
                                </span>
                                {/* end recaptha div */}

                                
                                {isLoading ? <ThreeDots
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
                                    <span className="wrap-submit">
                                        <input type="submit" defaultValue="SEND US" className="submit wpcf7-form-control wpcf7-submit" id="submit" name="submit" />
                                    </span>

                                }

                            </form>
                        </div>
                    </div>
                    <div className="col-md-8 my-5 my-lg-0">
                        <div className="mapouter"><div className="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=1979/1,%20Lane%20No.%202,%20Ferozepur%20Rd,%20opposite%20Ansal%20Plaza,%20Maharaj%20Nagar,%20Ludhiana,%20Punjab%20141001&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className='m-0'></iframe><a href="https://embedgooglemap.net/124/"></a><br /><a href="https://www.embedgooglemap.net"></a></div></div>
                    </div>
                </div>

            </div>
        </div>
    </>
}
export default FormContact02;


