import "./Intro.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import introImg from "../../assets/intro-img.png"

export const Intro = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 720 },
            items: 1,
            partialVisibilityGutter: 0
        },
        mobile: {
            breakpoint: { max: 480, min: 0 },
            items: 1,
            partialVisibilityGutter: 0
        }
    };
    return (
        <>

            <Carousel 
            responsive={responsive}
            arrows
            infinite
            autoPlay
            autoPlaySpeed={3000}
            customTransition="transform 1000ms ease-in-out"
            removeArrowOnDeviceType="mobile"
            >
                <div className="intro" id="home">
                    <div className="intro-img">
                        <img src={introImg} alt="" />
                    </div>

                    <div className="intro-text">
                        <h1>Get ready for Our <br />
                            stylist chair</h1>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                </div>

                <div className="intro">
                    <div className="intro-img">
                        <img src={introImg} alt="" />
                    </div>

                    <div className="intro-text">
                        <h1>Get ready for Our <br />
                            stylist chair</h1>
                        <button className="shop-now-btn">Shop Now</button>
                    </div>
                </div>
            </Carousel>
        </>
    )
}