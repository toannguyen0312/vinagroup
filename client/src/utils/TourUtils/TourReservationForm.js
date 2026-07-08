import React, {useState, useEffect} from "react";
import TourSchedule from "./TourSchedule";

function TourReservationForm({ tourSchedule = [] }) {


    return (
       <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Đặt Tour</h4>
                    <div className="card">
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">1. Thông tin đặt chỗ</h6>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">2. Thông tin liên hệ</h6>
                        </div>
                    </div>
                </div>
            </div>
       </>
    );
}

export default TourReservationForm;