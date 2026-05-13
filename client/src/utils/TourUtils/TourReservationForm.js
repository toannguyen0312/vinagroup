import React, {useState, useEffect} from "react";
import TourSchedule from "./TourSchedule";

function TourReservationForm({ tourSchedule = [] }) {


    return (
        <>
            <h5>Đặt Tour</h5>
            <div className="card">
                <div className="card-body">                    
                    <button type="button" className="btn">Chọn Ngày</button>
                    <div>
                        <h4>Ngày xuất phát:</h4>
                        <h4></h4>
                    </div>
                    <div>
                        <h4>Giá người lớn:</h4>
                    </div>
                    <div>
                        <h4>Giá trẻ em(từ 5-11 tuổi):</h4>
                    </div>
                    <div>
                        <h4>Giá trẻ nhỏ(dưới 5 tuổi):</h4>
                    </div>

                    <h3>Tổng số khách</h3>
                    <div className="card">
                        <div>
                            <h3>Nguời lớn</h3>
                        </div>
                        <div>
                            <h3>Trẻ em(từ 5-11 tuổi)</h3>
                        </div>
                        <div>
                            <h3>Trẻ nhỏ(dưới 5 tuổi)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )


    /*
    return (
        <>
            <h5>Đặt Tour</h5>
            <div className="card shadow">
                <div className="card-body">
                    <form>
                        <div>
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Chọn Ngày Xuất Phát
                                </button>
                                <ul className="dropdown-menu">
                                    {tourSchedule.length > 0 ? (
                                        tourSchedule.map((schedule, index) => (
                                            <li key={index}>
                                                <a className="dropdown-item" href="#">
                                                    {schedule.departureDate || schedule.date || `Tour ${index + 1}`}
                                                </a>
                                            </li>
                                        ))
                                    ) : (
                                        <li><a className="dropdown-item" href="#">Không có lịch trình</a></li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ); 
    */
}

export default TourReservationForm;