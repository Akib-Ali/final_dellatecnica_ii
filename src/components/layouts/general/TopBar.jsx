import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopBar extends Component {
    render() {
        return (
            <div id="top-bar">
                <div id="top-bar-inner" className="container">
                    <div className="top-bar-inner-wrap">
                        <div className="top-bar-content">
                            <div className="inner">
                                <div className="address content">
                                    <a target='_blank' href='https://www.google.com/maps/search/1979%2F1,+Lane+No.+2,+Ferozepur+Rd,+Maharaj+Nagar,+Ludhiana,+Punjab+141001/@30.898864,75.820743,13z?hl=en-US'>
                                        <span>Ferozepur Road, opposite Ansal Plaza,Ludhiana</span>
                                    </a>
                                </div>
                                <div className="phone content">
                                    <a href='tel:+91 87279 22330'>
                                        <span >+91 87279 22330</span>
                                    </a>
                                </div>
                                <span className="time content">Mon-Sat: 10:00am - 6:30pm</span>
                            </div>
                        </div>
                        <div className="top-bar-socials">
                            <div className="inner">
                                <span className="text">Follow us:</span>
                                <span className="icons">
                                    <a href="https://www.facebook.com/Dellatecnica.Machines/" target='_blank'><i className="fa fa-facebook" /></a>
                                    <a href="https://www.instagram.com/dellatecnica/" target='_blank'><i className="fa fa-instagram" /></a>
                                    <a target='_blank' href="https://www.youtube.com/@dellatecnica.machines"><i className="fa fa-youtube-play"></i></a>
                                    <a target='_blank' href="https://www.linkedin.com/company/dellatecnica"><i className="fa fa-linkedin-square" /></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;