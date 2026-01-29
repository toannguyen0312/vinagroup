import React from "react";
import TourSchedule from "./TourSchedule";

function TourReservationForm({ tourSchedule = [] }) {


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
}

export default TourReservationForm;