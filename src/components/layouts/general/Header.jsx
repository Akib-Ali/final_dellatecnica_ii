import React, { Component } from 'react';
import { Link, withRouter, NavLink } from 'react-router-dom';
import menus from '../menu'

class Header extends Component {
    render() {
        const { location } = this.props;
        return (
            <header id="site-header">
                <div id="site-header-inner" className="container">
                    <div className="wrap-inner clearfix">
                        <div id="site-logo" className="clearfix">
                            <div id="site-log-inner">
                                <a href="/" onClick={() => { window.location.href = "/" }} rel="home" className="main-logo">
                                    <img src="/assets/img/dellatecnica-logo.png" alt="Della" width={186} height={39} data-retina="/assets/img/dellatecnica-logo.png" data-width={186} data-height={39} />
                                </a>
                            </div>
                        </div>
                        <div className="mobile-button">
                            <span />
                        </div>
                        <nav id="main-nav" className="main-nav">
                            <ul id="menu-primary-menu" className="menu">
                                <li className={`menu-item menu-item-has-children ${location.pathname === '/' ? 'current-menu-item' : ''
                                    }`}>
                                    <a href="/" onClick={() => { window.location.href = "/" }} >Home</a>
                                </li>
                                <li className={`menu-item menu-item-has-children ${location.pathname === '/about-us' ? 'current-menu-item' : ''
                                    }`}
                                >     <a href="/about-us" onClick={() => { window.location.href = "/about-us" }}>About</a>
                                </li>
                                <li className={`menu-item menu-item-has-children ${location.pathname === ('/holzmac' || "/promac") ? 'current-menu-item' : ""
                                    }`}>
                                    <a>Our Brands</a>
                                    <ul className="sub-menu">
                                        <li className="menu-item">
                                            <a href="/holzmac" onClick={() => { window.location.href = "/holzmac" }} >HOLZMAC</a>
                                        </li>
                                        <li className="menu-item">
                                            <a href="/promac" onClick={() => { window.location.href = "/promac" }} >Promac</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className={`menu-item menu-item-has-children ${location.pathname === '/blogs' ? 'current-menu-item' : ''
                                    }`}>
                                    <a href="/blogs" onClick={() => { window.location.href = "/blogs" }}>Blog</a>
                                </li>
                                <li className={`menu-item menu-item-has-children ${location.pathname === '/contact-us' ? 'current-menu-item' : ''
                                    }`}>
                                    <a href="/contact-us" onClick={() => { window.location.href = "/contact-us" }}>Contact Us</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);