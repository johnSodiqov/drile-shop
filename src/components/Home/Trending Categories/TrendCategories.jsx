import "./TrendCategories.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect,  } from "react";
import axios from "axios"
import { TfiReload } from "react-icons/tfi"
import { AiOutlineHeart } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti"
import { useNavigate } from "react-router-dom"

export const TrendingCategories = () => {
    const [bestSeller, setBestSeller] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=4")
            .then(res => {
                setBestSeller(res.data)
            })
    }, [])

    const icons = [
        {
            icon: "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/512/external-dressing-table-furniture-and-decoration-xnimrodx-lineal-xnimrodx-2.png",
            title: "dressing table"
        },
        {
            icon: "https://img.icons8.com/ios/512/lamp.png",
            title: "lamp"
        },
        {
            icon: "https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/512/external-cabinet-office-xnimrodx-lineal-xnimrodx.png",
            title: "cabinet"
        },
        {
            icon: "https://img.icons8.com/ios/512/sofa.png",
            title: "sofa"
        },
        {
            icon: "https://img.icons8.com/ios/512/chair.png",
            title: "chair"
        },
        {
            icon: "https://img.icons8.com/windows/512/bed.png",
            title: "bed"
        },

    ]
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };

    function sendProduct(item) {
        navigate("/product", {state: item})
        console.log("It works")
        
    }

    return (
        <div className="container">
            <div className="trend-items" id="trendCategory">
                <h1>TRENDING CATEGORIES</h1>
                <Carousel responsive={responsive}
                    infinite
                    autoPlay
                    autoPlaySpeed={3000}
                    customTransition="transform 1000ms ease-in-out"
                    removeArrowOnDeviceType="mobile"
                >
                    {
                        icons.map((item, index) => {
                            return (
                                <div className="trend-item" key={index}>
                                    <div className="trend-img">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className="trend-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </div>
            <div className="best-cards">
                {
                    bestSeller.map((item, index) => {
                        return (
                            <div className="best-card" key={index} onClick={() => sendProduct(item)}>
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
    )
}