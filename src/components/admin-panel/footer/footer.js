import Style from "./footer.module.css"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import { FaFacebookSquare } from "react-icons/fa"
import { GrPinterest } from "react-icons/gr"
import { BsInstagram } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
const Footer = () => {

    return <>
        <div className={Style.underline}>
            <div className={Style.footer}>
                <div className={Style.footer_up}>
                    <Container className="p-0">
                        <Row>
                            <Col lg={4}>
                                <div className={Style.footer_left}>
                                    <h5 className={Style.footerHeading}>Useful Links</h5>
                                    <ul className="p-0">
                                        <li><Link to="/blogs/jodhpuri" className={Style.underlineText}>Blogs</Link></li>
                                        <li><Link to="/discount-offer" className={Style.underlineText}>Discounts & Offers</Link></li>
                                        <li><Link to="/international-order" className={Style.underlineText}>International Orders Helpdesk</Link></li>
                                        <li><Link to="/shipping-replacement" className={Style.underlineText}>Shipping, Replacement and Return Policies</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={Style.footer_center}>
                                    <h5 className={Style.footerHeading}>Info</h5>
                                    <ul className="p-0">
                                        <li><Link to="/about-us" className={Style.underlineText}>About Us</Link></li>
                                        <li><Link to="/contact-us" className={Style.underlineText}>Contact Us</Link></li>
                                        <li><Link to="/privacy-policy" className={Style.underlineText}>Privacy Policy</Link></li>
                                        <li><Link to="/terms-of-service" className={Style.underlineText}>Terms of Service</Link></li>
                                        <li><Link to="/personal-information" className={Style.underlineText}>Do not sell my personal information</Link></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className={Style.footer_right}>
                                    <h5 className={Style.footerHeading}>Connect with us</h5>
                                    <p>
                                        {/* supoort@rajanyas.com */}
                                    </p>
                                    <p>+91-7289833838</p>
                                </div></Col>
                        </Row>
                    </Container>
                </div>
                <Container className="p-0">
                    <Row>
                        <Col lg={6}>
                            <h5 className={Style.subHeading}>Subscribe to our emails</h5>
                            <div className={Style.subscribe}>
                                <form>
                                    <input id="" name=""></input>
                                    <label id="" name="">Email</label>
                                    <button type="submit" id="" name="">
                                        <BsArrowRight></BsArrowRight>
                                    </button>
                                </form>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className={Style.Footer_SocialIcons}>
                                <ul>
                                    <li><a>
                                        <FaFacebookSquare></FaFacebookSquare>
                                    </a></li>
                                    <li><a>
                                        <GrPinterest></GrPinterest>
                                    </a></li>
                                    <li><a>
                                        <BsInstagram></BsInstagram>
                                    </a></li>
                                    <li><a>
                                        <BsYoutube></BsYoutube>
                                    </a></li>

                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        <hr />
        <div className={Style.footerDown}>
            <p> © 2023, Siyaram</p>
        </div>

    </>

}
export default Footer