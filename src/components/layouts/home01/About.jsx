import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return <>
        <div className="row-about">
            <div className="container-fluid">
                <div className="row equalize sm-equalize-auto">
                    <div className="col-md-6 half-background style-1" />
                    <div className="col-md-6 bg-light-grey">
                        {/* <div className="themesflat-spacer clearfix" data-desktop={64} data-mobile={60} data-smobile={60} /> */}
                        <div className="themesflat-content-box clearfix" data-mobilemargin="0 0 0 4.5%">
                            <div className="themesflat-headings style-1 clearfix py-5 px-5">
                                <p className="sub-heading text-justify"><span className='about_bold_text'>DELLATECNICA</span> is a renowned woodworking machinery firm based in Ludhiana, India, and stands as a true pioneer in the field. Established in 2004 by our Managing Director, <span className='about_bold_text'>VIKAS GERA</span>, our company has flourished under his visionary leadership and extensive experience of two decades in designing, manufacturing, and marketing woodworking machines.
                                </p>
                                <p className='text-justify'>
                                    At <span className='about_bold_text'>DELLATECNICA</span>, we embody a perfect blend of ambition and excellence, driven by the dynamic nature of <span className='about_bold_text'>VIKAS GERA</span> himself. Balancing his roles as an engineer, designer, and entrepreneur, <span className='about_bold_text'>Vikas</span> has fostered a company culture focused on delivering exceptional solutions for wood working and panel processing.
                                    </p>
                                    <p className='text-justify'>
                                    We take great pride in offering a comprehensive range of top-quality woodworking equipment tailored to suit every need. Our product lineup encompasses everything from basic machinery to state-of-the-art CNC machines, as well as sawmilling equipment and fine finishing equipment.
                                    </p>
                                    <p className='text-justify'>
                                    Our professional approach, utilization of the latest technology, competitive pricing, and efficient follow-up service have consistently garnered high satisfaction among our esteemed customers. With <span className='about_bold_text'>DELLATECNICA</span>, you can rest assured that each machine you acquire will provide maximum dependability, durability, and value for your investment.
                                    </p>
                                    <p className='text-justify'>
                                    While most of our woodworking equipment is showcased on our website, we understand that unique requirements may arise. In such cases, we encourage you to contact us directly, and we will promptly offer tailored solutions to meet your specific needs.
                                    </p>
                                    <p className='text-justify'>
                                    <span className='about_bold_text'>DELLATECNICA</span> revolves around the principle of catering to your requirements comprehensively. We offer a diverse range of machinery, catering to both low-end and high-end segments. Our primary objective is to alleviate stress and streamline manufacturing processes for our clients by providing high-end machines at competitive prices. We take immense pride in Vikas Gera's involvement in designing each machine, ensuring top-notch specifications and functions within a reasonable budget.
                                    </p>
                                    <p className='text-justify'>
                                    Choose <span className='about_bold_text'>DELLATECNICA</span> as your trusted partner, and experience the synergy of innovation and craftsmanship in woodworking machinery.
                                    </p>
                            </div>
                            {/* <div className="themesflat-spacer clearfix" data-desktop={26} data-mobile={35} data-smobile={35} /> */}
                            <div className="content-list">
                                <div className="themesflat-list has-icon style-1 icon-left clearfix">
                                </div>
                            </div>

                            {/* <div className="elm-button ml-5">
                                <a href="#" className="themesflat-button bg-white">Read More</a>
                            </div> */}
                        </div>
                        {/* <div className="themesflat-spacer clearfix" data-desktop={75} data-mobile={60} data-smobile={60} /> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default About;
