
// import Style from "./navbar.module.css"
import "./navbar.css"
import { Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { BiUser } from "react-icons/bi"
import { IoBagHandleOutline } from "react-icons/io5"
import { AiOutlineArrowRight } from "react-icons/ai"
import { FaFacebookSquare } from "react-icons/fa"
import { GrPinterest } from "react-icons/gr"
import { BsInstagram } from "react-icons/bs"
import { BsYoutube } from "react-icons/bs"
import { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { RxCross1 } from "react-icons/rx"

const Navbar = () => {
    const [showMediaIcons, setshowMediaIcons] = useState(true)
    const auth = localStorage.getItem("user")
    let name = JSON.parse(auth).name

    const logOut = () => {
        localStorage.removeItem("user");
        window.location.href="/admin-login"
        // navigate("/")
    }

    return <>
        <header>
            {/* <div className="navUpper">
                <p>Welcome! Get Flat Rs 500/- discount on your Ist purchase with code - FIRSTORDER. (T&C*)  <AiOutlineArrowRight /></p>
                
            </div> */}
            <div className="navLower">
                <div className="hamburger" onClick={() => setshowMediaIcons(!showMediaIcons)}>
                    {showMediaIcons ? <GiHamburgerMenu /> : <RxCross1 />}

                </div>
                <div className="nav_left">
                    <Link to="/all-blogs">
                        <img src="/images/delatecnica_logo.png" />
                    </Link>
                </div>
                <div className={showMediaIcons ? `${"nav_center"}` : `${"nav_center"} ${"active"}`}>
                    <nav>
                        <ul>
                            <li ><Link to="/all-blogs" className="nounderline"  >All Blog</Link></li>
                            <li><Link to="/create-blog" className="nounderline">Create New Blog</Link></li>
                            <li><Link to="/all-comment" className="nounderline">All Comments</Link></li>
                            {/* <li><Link to="/collections/jackets-blazers" className="nounderline">Kurta Jackets</Link></li> */}
                            {/* <li><Link to="/collections/Sarpech" className="nounderline">Groom's Accessories</Link></li>
                            <li><Link to="/collections/shirts" className="nounderline">Shirts</Link></li> */}
                        </ul> 
                    </nav>
                    <div className="mobile_logIn">
                        <Link to="/login" className="logIn text-decoration-none text-dark" >
                            <a href="">
                                <BiUser />
                            </a>
                            <span className="login-controll">Login</span>
                        </Link>
                        <div className="socialIcon">
                            <ul>
                                <li><a>
                                    <FaFacebookSquare />
                                </a></li>
                                <li><a>
                                    <GrPinterest />
                                </a></li>
                                <li><a>
                                    <BsInstagram />
                                </a></li>
                                <li><a>
                                    <BsYoutube />
                                </a></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="nav_right">
                    <div className="searchBar">
                        <a href="">
                            <BsSearch />
                        </a>
                    </div>
                    <div className="userSection">
                        <Link to="/all-blogs">
                            <BiUser />
                        </Link>
                    </div>
                    
                    <div style={{color:"green", fontWeight:"600"}}>({`${name}`})</div>
                    <div style={{color:"red", fontWeight:"600", cursor:"pointer"}} onClick={ logOut}>Logout</div>
                </div>
            </div>

        </header>
    </>


}

export default Navbar;