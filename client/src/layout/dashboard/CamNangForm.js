import React from "react";
import Slider from "react-slick";
import "./CamNangForm.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import VinagroupVisa from "./MobileImage/VinagroupVisa.jpg";

function CamNangForm() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1.15,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "20px"
    }

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className="card shadow card-change">
                    <img src={VinagroupVisa} alt="VinaGroup Visa" className="image-size" />
                    <div className="card-body">
                        <h5>VINA GROUP - Dịch Vụ Visa Trọn Gói Gói| Tỷ Lệ Đậu 99,9%</h5>
                        <p>VinaGroup - Dịch vụ visa chuyên nghiệp, đồng hành cùng bạn chinh phục mọi hành trình quốc tế.</p>
                    </div>
                </div>
                <div className="card shadow card-change">
                    <img src={VinagroupVisa} alt="VinaGroup Visa" className="image-size" />
                    <div className="card-body">
                        <h5>VINA GROUP - Dịch Vụ Visa Trọn Gói Gói| Tỷ Lệ Đậu 99,9%</h5>
                        <p>VinaGroup - Dịch vụ visa chuyên nghiệp, đồng hành cùng bạn chinh phục mọi hành trình quốc tế.</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default CamNangForm;