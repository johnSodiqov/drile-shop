import { useNavigate, useLocation, } from "react-router-dom"
import { useEffect, useState } from "react";
import { TfiReload } from "react-icons/tfi"
import { AiOutlineHeart } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti"
import "./ItemPage.css"
import axios from "axios";

export const ItemPage = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const item = location.state
    const itemLength = item.description.length;
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=4")
            .then(res => {
                setBestSeller(res.data)
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function sendProduct(item) {
        navigate("/item", { state: item })
        console.log("It works")

    }
    function localStorageSet(id) {
        let products = [];
        if (localStorage.getItem("item") !== null) {
            products = localStorage.getItem("item")
            console.log(localStorage.getItem("item"))
        } else {
            products.push(id)
            console.log(2)
        }
        if (products.length > 0) {
            let result = products.indexOf(id)
            console.log(result)
        }
    }
    return (
        <div className="product">
            <div className="container">

                <div className="product-container">
                    <div className="product-img">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="product-info">
                        <h1>{item.title}</h1>
                        <h5 className={``} style={(itemLength > 250) ? {
                            fontSize: "18px",
                            lineHeight: "20px"
                        } : {
                            fontSize: "20px",
                            lineHeight: "24px"
                        }}>{item.description}</h5>
                        <p >Price: ${item.price}</p>
                        <button className="shop-now-btn" onClick={() => sendProduct}>Buy Now</button>
                        <button className="shop-now-btn mx-4" onClick={() => localStorageSet(item.id)}>Add to cart</button>
                    </div>
                </div>

                <h1 className="section-header">Testimonials</h1>
                <div className="testimonials container">

                    <div className="testimonial-card">
                        <div className="card-content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi provident rerum atque. Reprehenderit, laborum natus explicabo ex id officiis. Ipsum totam repellat mollitia dolorem soluta.</p>
                        </div>

                        <div className="card-info">
                            <img src="https://i.pinimg.com/564x/bd/73/ba/bd73bac287431a8b0b915852caa98828.jpg" alt="profile images" />
                            <h3>Ella Musk</h3>
                        </div>

                    </div>

                    <div className="testimonial-card">
                        <div className="card-content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi provident rerum atque. Reprehenderit, laborum natus explicabo ex id officiis. Ipsum totam repellat mollitia dolorem soluta.</p>
                        </div>

                        <div className="card-info">
                            <img src="https://i.pinimg.com/564x/70/eb/b9/70ebb910155c12fa32ff1b1b105baf39.jpg" alt="profile images" />
                            <h3>Kazuxa</h3>
                        </div>

                    </div>

                    <div className="testimonial-card">
                        <div className="card-content">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi provident rerum atque. Reprehenderit, laborum natus explicabo ex id officiis. Ipsum totam repellat mollitia dolorem soluta.</p>
                        </div>

                        <div className="card-info">
                            <img src="https://i.pinimg.com/564x/8b/3b/8d/8b3b8d35b590dc18f0d438f418568cc0.jpg" alt="profile images" />
                            <h3>Statue #007</h3>
                        </div>

                    </div>

                </div>

                <div className="also-like">
                    {
                        bestSeller.map((item, index) => {
                            return (
                                <div className="best-card" key={index} onClick={() => sendProduct(item)} >
                                    <div className="best-card-img">
                                        <img src={item.image} alt="" />
                                    </div>

                                    <div className="best-card-text">
                                        <h5>{item.title}</h5>
                                        <p>${item.price}</p>
                                    </div>

                                    <div className="best-button-group">
                                        <TfiReload />
                                        <AiOutlineHeart />
                                        <TiShoppingCart />
                                    </div>

                                    {(item.price < 100) && <div className="best-hot-mark">
                                        <p>Hot</p>
                                    </div>}
                                    {
                                        (item.price > 500) && <div className="best-sale-mark">
                                            <p>-20%</p>
                                        </div>
                                    }
                                </div>
                            )
                        })
                    }
                </div>

                {/* <button className="shop-now-btn" onClick={() => navigate(-1)}>Back</button> */}
            </div>
        </div>
    )
}