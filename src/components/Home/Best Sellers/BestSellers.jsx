import "./BestSeller.css"
import { TfiReload } from "react-icons/tfi"
import { AiOutlineHeart } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=7")
            .then(res => {
                setBestSeller(res.data)
            })
    }, [])

    function sendProduct(item) {
        navigate("/item", {state: item})
        console.log("It works")  
    }
    return (
        <>
            <div className="best-seller" id="bestSeller">
                <div className="container">
                    <h1>Best Seller Items</h1>

                    <div className="best-cards">
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
                </div>
                <div className="best-seller-decor"></div>
            </div>
        </>
    )
}