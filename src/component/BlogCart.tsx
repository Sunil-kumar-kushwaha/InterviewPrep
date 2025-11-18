import blogCardImg from "../img/spacejoy.jpg";
import house2 from "../img/house2.jpg";
import house1 from "../img/house.jpg";
import house3 from "../img/house3.jpg";
import "./css/BlogCart.css";
import { useEffect, useState } from "react";

export const Blogcart = () => {
    const imageSliders = [house3, blogCardImg, house2, house1];
    const [expanded, setExpanded] = useState(false);
    const [imgSliderIndex, setImgSlider] = useState(0);

    useEffect(() => {
        const timerId = setInterval(() => {
            nextSlide();
        }, 3000)
        return () => clearInterval(timerId);
    }, [imgSliderIndex])

    const nextSlide = () => {
        setImgSlider((prev) => ((prev + 1) % imageSliders.length));
    }
    const PrevSlide = () => {
        setImgSlider((prev) => ((prev - 1 + imageSliders.length) % imageSliders.length));
    }

    return (
        <div className="blogCardContainer">
            <div className="cart">
                <div className="blogImg">
                    {/* <span>{"<"}</span> */}
                    <img src={imageSliders[imgSliderIndex]} className="CardImage" alt="Blog Card" />
                    {/* <div style={{display: "flex", justifyContent: "center"}}>
                        {
                            imageSliders.map((image, index) => (<span > 0 </span>))
                        }
                    </div> */}
                    {/* <span>{">"}</span> */}
                </div>
                <div className="blogContent">
                    <p className="tag">
                        <span>Interior</span>
                    </p>
                    <h2 className="title">Top 5 Living Room Inspirations</h2>
                    <p className="description">
                        Curated vibrant colors for your living room — make it pop & calm at the same time. {expanded ? "This properties is owned by Sunil Kushwaha, Curated vibrant colors for your living room — make it pop & calm at the same time." : ''}
                    </p>
                    <button className="readBtn" onClick={() => setExpanded(!expanded)} >  {expanded ? "Read less" : "Read more"}</button>
                </div>
            </div>
        </div>

    );
};
