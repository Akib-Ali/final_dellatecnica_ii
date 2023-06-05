import React, { Component } from 'react';

const FormContact02 = () => {
    return <>
        <div className="row-contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="themesflat-contact-form style-2 w100 clearfix">
                            <form action="#" method="post"
                                className="contact-form wpcf7-form">
                                <span className="wpcf7-form-control-wrap your-name">
                                    <input type="text" tabIndex={1} id="name" name="name" defaultValue={""}
                                        className="wpcf7-form-control" placeholder="Name*" required />
                                </span>
                                <span className="wpcf7-form-control-wrap your-email">
                                    <input type="email" tabIndex={3} id="email" name="email" defaultValue={""}
                                        className="wpcf7-form-control" placeholder="Your Email*" required />
                                </span>
                                <span className="wpcf7-form-control-wrap your-phone">
                                    <input type="text" tabIndex={2} id="phone" name="phone" defaultValue={""}
                                        className="wpcf7-form-control" placeholder="Phone" />
                                </span>
                                <span className="wpcf7-form-control-wrap your-message">
                                    <textarea name="message" tabIndex={5} cols={40} rows={10}
                                        className="wpcf7-form-control wpcf7-textarea" placeholder="Message*" required
                                        defaultValue={""} />
                                </span>
                                <span className="wrap-submit">
                                    <input type="submit" defaultValue="SEND US" className="submit wpcf7-form-control wpcf7-submit" id="submit" name="submit" />
                                </span>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8 my-5 my-lg-0">
                        <div className="mapouter"><div className="gmap_canvas"><iframe id="gmap_canvas" src="https://maps.google.com/maps?q=1979/1,%20Lane%20No.%202,%20Ferozepur%20Rd,%20opposite%20Ansal%20Plaza,%20Maharaj%20Nagar,%20Ludhiana,%20Punjab%20141001&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" className='m-0'></iframe><a href="https://embedgooglemap.net/124/"></a><br /><a href="https://www.embedgooglemap.net"></a></div></div>
                        {/* <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                            <div className="themesflat-map style-2" /> */}
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-12">
                        <div className="themesflat-spacer clearfix" data-desktop={81} data-mobile={60} data-smobile={60} />
                    </div>
                </div> */}
            </div>
        </div>
    </>
}
export default FormContact02;


