import React from "react";
import Slider from "react-slick";
import "./TourCardForm.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import KoreanTour from "./CardImage/KoreanTour.jpg";

function TourCardForm() {
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
                    <img src={KoreanTour} alt="Korean Tour" className="image-size"/>
                    <div className="card-body">
                        <h5>Đài Loan</h5>
                        <p>Thời gian: 5 ngày 4 đêm</p>
                        <p>Ngày khởi hành: 12/03/2025</p>
                        <p>Phương tiện: Việtjet Air</p>
                        <h5>Giá: 13.590.000đ</h5>
                    </div>
                </div>
                <div className="card shadow card-change">
                    <img src={KoreanTour} alt="Korean Tour" className="image-size"/>
                    <div className="card-body">
                        <h5>Nhật Bản</h5>
                        <p>Thời gian: 7 ngày 6 đêm</p>
                        <p>Ngày khởi hành: 15/04/2025</p>
                        <p>Phương tiện: ANA</p>
                        <h5>Giá: 25.000.000đ</h5>
                    </div>
                </div>
                <div className="card shadow card-change">
                    <img src={KoreanTour} alt="Korean Tour" className="image-size"/>
                    <div className="card-body">
                        <h5>Hàn Quốc</h5>
                        <p>Thời gian: 6 ngày 5 đêm</p>
                        <p>Ngày khởi hành: 20/05/2025</p>
                        <p>Phương tiện: Korean Air</p>
                        <h5>Giá: 20.000.000đ</h5>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default TourCardForm;