import "./Navbar.css"
import navLogo from "../../assets/Drile.png"
import { GoPerson } from "react-icons/go"
import { BsSearch } from "react-icons/bs"
import { TiShoppingCart } from "react-icons/ti"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"


export const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate()
    function navOpener() {
        setIsActive(!isActive)
        console.log(isActive)
    }
    

    return (<>
        <div className="navbar">
            <div className="container">

                <div className="nav-logo">
                    <Link to={"/"}>
                        <img src={navLogo} alt="" />
                    </Link>
                </div>

                <div className={`nav-link ${(isActive) ? `active ` : ``}`}>
                    {
                        <>
                            
                            
                            <Link to={"/products"}>Products</Link>
                            <Link to={"/about"}>About</Link>
                            <a href="#contact">Contact Us</a>
                        </>

                    }
                </div>

                <div className="nav-icon">
                    <BsSearch />
                    <TiShoppingCart onClick={() => navigate("cart")} />
                    <GoPerson />
                </div>

                <div className="burger" onClick={navOpener}>
                    <button ></button>
                </div>

            </div>
        </div>
    </>)
} 