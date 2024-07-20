import "./DealOfTheWeek.css"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"

export const DealOfTheWeek = () => {
    const [dealProduct, setDealProduct] = useState({});
    const [similar, setSimilar] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=1")
            .then(res => {
                setDealProduct(res.data[0])
            })
        axios.get("https://fakestoreapi.com/products?limit=4")
            .then(res => {
                setSimilar(res.data)
            })
    }, [])

    return (
        <div className="deal-of-week-container" id="dealWeek">

            <div className="deal-of-week">

                <div className="deal-img">
                    <img src={dealProduct.image} alt="" />
                </div>

                <div className="deal-content">
                    <h1>Deal Of The Week</h1>
                    <h3>from <span>{dealProduct.price}</span></h3>
                    <p>{dealProduct.description}</p>
                    <button className="shop-now-btn mt-3">Shop now</button>

                    <div className="similar">
                        {
                            similar.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <img src={item.image} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>



            </div>

        </div>
    )
}