import "./Products.css"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { TfiReload } from "react-icons/tfi"
import { AiOutlineHeart } from "react-icons/ai"
import { TiShoppingCart } from "react-icons/ti"
import { useNavigate } from "react-router-dom"

export const Products = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const [startPoint, setStartPoint] = useState(0)
    const [endPoint, setEndPoint] = useState(8)


    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=20`)
            .then(res => {
                setProducts(res.data)
            })
    }, [startPoint])

    const nextProudcts = () => {
        if (endPoint < products.length) {
            setEndPoint(endPoint + 8)
            setStartPoint(startPoint + 8)
        }
    }
    const previousProudcts = () => {
      if(startPoint >0) {
            setEndPoint(endPoint - 8)
            setStartPoint(startPoint - 8)
        }
    }

    function sendProduct(item) {
        navigate("/item", { state: item })
        console.log("It works")
    }
    return (
        <div className="products-container">
            <h1 className="section-header">Products</h1>

            <div className="best-cards">
                {
                    products.map((item, index) => {
                        return (
                            ((item.id > startPoint) && (item.id <= endPoint)) && <div className="best-card" key={index} onClick={() => sendProduct(item)} >
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

            <div className="pagination">
                <button className=" shop-now-btn" onClick={previousProudcts}>Previous</button>
                <button className=" shop-now-btn" onClick={nextProudcts}>Next</button>
            </div>
        </div>
    )
}