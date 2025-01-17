import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import CoverMAU from "./MobileImage/CoverMAU.jpg";
import CoverMdubai from "./MobileImage/CoverMdubai.jpg";
import CoverMEU from "./MobileImage/CoverMEU.jpg"; 
import CoverMhk from "./MobileImage/CoverMhk.jpg";
import CoverMjpn from "./MobileImage/CoverMjpn.jpg";
import CoverMkor from "./MobileImage/CoverMkor.jpg";
import CoverMlao from "./MobileImage/CoverMlao.jpg";
import CoverMLG from "./MobileImage/CoverMLG.jpg";
import CoverMsingmalay from "./MobileImage/CoverMsingmalay.jpg";
import CoverMthai from "./MobileImage/CoverMthai.jpg";
import CoverMtw from "./MobileImage/CoverMtw.jpg";
import CoverMUS from "./MobileImage/CoverMUS.jpg";

const images = [
    CoverMAU, CoverMEU, CoverMLG, CoverMUS, CoverMdubai, CoverMhk, CoverMjpn, CoverMkor, CoverMlao, CoverMsingmalay, CoverMthai, CoverMtw
]

function MainSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

return (
    <div>
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} style={{ width: "100%"}} />
                </div>
            ))}
        </Slider>
    </div>
)
};

export default MainSlider;