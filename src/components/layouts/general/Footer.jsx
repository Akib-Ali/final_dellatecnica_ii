import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { RxCross2 } from 'react-icons/rx';

const Footer = (args) => {

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    return <>
        <footer id="footer" className="clearfix">
            <div id="footer-widgets" className="container">
                <div className="themesflat-row gutter-30">
                    <div className="col span_1_of_3">
                        <div className="widget widget_text">
                            <div className="textwidget">
                                <p>
                                    <a href='/'>
                                        <img src="/assets/img/dellatecnica-logo.png" alt="imagealting" width={170} height={34} />
                                    </a>
                                </p>
                                <ul>
                                    <li>
                                        <div className="inner mt-4">
                                            <span>
                                                <a target='_blank' href='https://www.google.com/maps/search/1979%2F1,+Lane+No.+2,+Ferozepur+Rd,+Maharaj+Nagar,+Ludhiana,+Punjab+141001/@30.898864,75.820743,13z?hl=en-US'>
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                                </a>
                                            </span>
                                            <a target='_blank' href='https://www.google.com/maps/search/1979%2F1,+Lane+No.+2,+Ferozepur+Rd,+Maharaj+Nagar,+Ludhiana,+Punjab+141001/@30.898864,75.820743,13z?hl=en-US' className="text">1979/1, Lane No. 2, Ferozepur Road, opposite Ansal Plaza, Maharaj Nagar, Ludhiana, Punjab 141001</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="inner">
                                            <a href='tel:+91 87279 22330'>
                                                <i className="fa fa-phone" aria-hidden="true"></i>
                                            </a>
                                            <a href='tel:+91 87279 22330' className="text">CALL US : +91 87279 22330, +91 87278 22330</a>
                                        </div>
                                    </li>
                                    <li className="margin-top-7">
                                        <div className="inner">
                                            <a target='_blank' href='mailto:info@dellatecnica.in'>
                                                <i className="fa fa-envelope" aria-hidden="true"></i>
                                            </a>
                                            <a href='mailto:info@dellatecnica.in' className="text">Email: info@dellatecnica.in</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={35} />
                    </div>
                    <div className="col span_1_of_3">
                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={0} />
                        <div className="widget widget_lastest">
                            <h2 className="widget-title"><span>HOLZMAC</span></h2>
                            <ul className="lastest-posts data-effect clearfix">
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3 className='fw-bold'><a href="/holzmac/panel-saw-300">PANEL SAW (PS-300T)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/holzmac/edge-banding-machine-tf-3">AUTOMATIC THROUGH FEED
                                            EDGE BANDER (TF-3)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/holzmac/edge-banding-machine-tf-6">AUTOMATIC THROUGH FEED
                                            EDGE BANDER (TF-6)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/holzmac/multi-borer-duplex">MULTI BORER (DUPLEX)</a ></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/holzmac/eb-smart">CURVILINEAR EDGE BANDER
                                            & TRIMMER (EB SMART+)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/holzmac/cold-press-cp-60-80">COLD PRESS (CP-60/80)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/holzmac/cnc-router-1330">CNC ROUTER (NC-1330+)</a></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col span_1_of_3">
                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={0} data-smobile={0} />
                        <div className="widget widget_lastest">
                            <h2 className="widget-title"><span>PROMAC</span></h2>
                            <ul className="lastest-posts data-effect clearfix">
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/quadro">PANEL SAW (QUADRO)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/maximac">AUTOMATIC THROUGH FEED EDGE BANDER
                                            (MAXIMAC)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/automatic-cnc-nesting-machine-nm-4"> CNC NESTING MACHINE (NM-4)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/cnc-router-1300atc">CNC ROUTER - ATC (NC-1300 ATC)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/cnc-machining-center-1330atcb">CNC MACHINING CENTER (1330 ATCB)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/multi-borer-drilltek">MULTI BORER (DRILLTEK-4S)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/cnc-router-atc-hd-1">CNC HORIZONTAL DRILLING MACHINE (HD-1)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/evolution">SIX SIDES DRILLING MACHINE  (EVOLUTION)</a></h3>
                                    </div>
                                </li>
                                <li className="subheading">
                                    <div className="text my-4">
                                        <h3><a href="/promac/lock-master">CNC DOOR LOCK MACHINE (LOCK MASTER)</a></h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col span_1_of_3">
                        <div className="themesflat-spacer clearfix" data-desktop={0} data-mobile={35} data-smobile={35} />
                        <div className="widget widget_instagram">
                            <h2 className="widget-title margin-bottom-30"><span>FOLLOW US :</span></h2>
                            <div className="instagram-wrap data-effect clearfix col3 g10">
                                <div className="instagram_badge_image has-effect-icon">
                                    <a href='https://www.instagram.com/dellatecnica/' target="_blank" className="data-effect-item">
                                        <span className="item">
                                            <i className="fa fa-instagram" />
                                        </span>
                                        <div className="overlay-effect bg-color-2" />
                                    </a>
                                </div>
                                <div className="instagram_badge_image has-effect-icon">
                                    <a href='https://www.facebook.com/Dellatecnica.Machines/' target="_blank" className="data-effect-item">
                                        <span className="item"><i className="fa fa-facebook" /></span>
                                        <div className="overlay-effect bg-color-2" />
                                    </a>
                                </div>
                                <div className="instagram_badge_image has-effect-icon">
                                    <a href='https://www.youtube.com/@dellatecnica.machines' target="_blank" className="data-effect-item">
                                        <span className="item"><i className="fa fa-youtube-play" /></span>
                                        <div className="overlay-effect bg-color-2" />
                                    </a>
                                </div>
                                <div className="instagram_badge_image has-effect-icon">
                                    <a href='https://www.linkedin.com/company/dellatecnica' target="_blank" className="data-effect-item">
                                        <span className="item"><i className="fa fa-linkedin" /></span>
                                        <div className="overlay-effect bg-color-2" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="widget widget_instagram">
                            <h2 className="widget-title margin-bottom-10 margin-top-30"><span>REVIEW US :</span></h2>
                            <div className="instagram-wrap data-effect review_box clearfix col3 g10">
                                <span>
                                    <a target="_blank" className='text-white' href='https://g.page/r/CfabyDzaBd-0EBM/review'>Click Here To Provide Your Feedback</a>
                                </span>

                            </div>
                        </div>
                        {/* <div className="widget widget_instagram">
                            <h2 className="widget-title margin-bottom-10 margin-top-30"><span>DOWNLOAD CATALOG:</span></h2>
                            <div className="instagram-wrap data-effect review_box clearfix col3 g10">

                                <Button className='clickMe_btn' onClick={toggle}>
                                    Click Me
                                </Button>
                                <Modal isOpen={modal} toggle={toggle} {...args} className='popUp'>
                                    <div class="modal-header">
                                        <h5 class="modal-title">Number Verify</h5>
                                        <button type="button" aria-label="Close" onClick={toggle}><RxCross2 /></button>
                                    </div>
                                    <ModalBody className='popup_body mb-4'>
                                        <form>
                                            <div className='starting_point'>+91</div>
                                            <input type='text' placeholder='Contact Number' ></input>
                                            <button type='submit' className='sendOTP' >Send OTP</button>
                                        </form>
                                    </ModalBody>
                                </Modal>
                            </div>
                        </div> */}
                        <div className="widget ">
                            <h2 className="widget-title margin-bottom-10 margin-top-30"><span>TAGS:</span></h2>
                            <div className="instagram-wrap data-effect review_box clearfix col3 g10 text-white">
                                <span>Wood Working Machines</span> , &nbsp;
                                <span>Panel Saw</span> , &nbsp;
                                <span>HOLZMAC</span> , &nbsp;
                                <span>PROMAC</span> , &nbsp;
                                <span>Automatic Through Feed Edge Banding Machine</span> , &nbsp;
                                <span>Wood Working Machine Manufacturer In India</span> , &nbsp;
                                <span>Best Wood Working Machine Company in India</span> , &nbsp;
                                <span>Wood Working Machine Supplier</span> , &nbsp;
                                <span>Wood Working Machine Ludhiana</span> , &nbsp;
                                <span>Panel Processing Wood Working Machinery</span> , &nbsp;
                                <span>CNC Router for Panel Processing</span> , &nbsp;
                                <span>Smart Factory</span> , &nbsp;
                                <span>Panel Saw Price</span> , &nbsp;
                                <span>CNC Nesting Machine</span>, &nbsp;
                                <span>Edge Banding Machine for Panels</span>, &nbsp;
                                <span>Durable Wood Working Machines</span>,
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
}
export default Footer;