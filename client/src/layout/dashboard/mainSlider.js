import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./mainSlider.css";

import Banner1 from "./MobileImage/Banner1.jpg";
import Banner2 from "./MobileImage/Banner2.jpg";
import Banner3 from "./MobileImage/Banner3.jpg";
import Banner4 from "./MobileImage/Banner4.jpg";

const images = [
    Banner1, Banner2, Banner3, Banner4,
]

function MainSlider() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
    };

return (
    <div>
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} className="image-style shadow" style={{ width: "100%"}} />
                </div>
            ))}
        </Slider>
    </div>
)
};

export default MainSlider;