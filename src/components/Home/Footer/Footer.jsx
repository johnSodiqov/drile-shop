import "./Footer.css"
import logo from "../../assets/Drile.png"
import bgIMage from "../../assets/footer-img.png"
import { FaFacebookSquare, FaInstagramSquare, FaTelegram, FaLinkedin } from "react-icons/fa";
import {Link} from "react-router-dom"

export const Footer = () => {
    return (
        <>
            <footer id="contact">
                <div className="container h-100 ">
                    <div className="footer-content">
                        <div className="footer-logo">
                            <img src={logo} alt="" />
                        </div>

                        <div className="social-icons-group">
                            <a href="https://www.facebook.com/john.sodiqov" target="_blank" rel="noreferrer"><FaFacebookSquare className="social-icon"  /></a>
                            <a href="https://www.instagram.com/john.sodiqov" target="_blank" rel="noreferrer"><FaInstagramSquare className="social-icon"/></a>
                            <a href="https://t.me/John_Sodiqovs_blog" target="_blank" rel="noreferrer"><FaTelegram className="social-icon" /></a>
                            <a href="https://www.facebook.com/john.sodiqov" target="_blank" rel="noreferrer"><FaLinkedin className="social-icon" /></a>
                        </div>
                        <div className="footer-link">
                        <Link to={"/"}><p>Home</p></Link>
                        <Link to={"/products"}><p>Products</p></Link>
                        <Link to={"/about"}><p>About</p></Link>
                            <p>Contact Us</p>
                        </div>


                    </div>

                </div>
                <div className="bg-image">
                    <img src={bgIMage} alt="" />
                </div>
            </footer>
            <div className="copyright">
                <p>© Copyright 2022 | drile | All right reserved.</p>
            </div>
        </>
    )
}