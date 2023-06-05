import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class BottomBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="bottom" className="clearfix has-spacer">
                <div id="bottom-bar-inner" className="container">
                    <div className="bottom-bar-inner-wrap">
                        <div className="bottom-bar-content">
                            <div id="copyright">©<span className="text">2023 DELLATECNICA. &nbsp;
                                <span>All rights reserved</span>
                            </span>
                            <p>Designed, Developed & Maintained by <a target='_blank' href='https://axionicsoftware.com/' className='website_colorName'>Axionic Software Private Limited</a></p>
                            </div>
                        </div>
                        <div className="bottom-bar-menu">
                            <ul className="bottom-nav">
                                <li className="menu-item current-menu-item"><a href="/">Home</a></li>
                                <li className="menu-item"><a href="/about-us">About Us</a></li>
                                <li className="menu-item">
                                    <a href="/holzmac">Holzmac</a>
                                </li>
                                <li className="menu-item">
                                    <a href="/promac">Promac</a>
                                </li>
                                <li className="menu-item"><a href="/blog">Blog</a></li>
                                <li className="menu-item"><a href="/contact-us">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BottomBar);