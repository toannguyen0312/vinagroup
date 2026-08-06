import React, {useState, useEffect} from "react";

import { listTourSchedulesByParams } from "../api";
import { formatDate } from "../formatDate";

function TourReservationForm({ region, tourName }) {
    const initialFormState= {
        scheduleId: "",
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
        adultCount: 1,
        childCount: 0,
    };

    const[formData, setFormData] = useState({...initialFormState});
    const[tourSchedule, setTourSchedule] = useState([]);
    const [tourScheduleError, setTourScheduleError] = useState(null);

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        })
    };
    
    useEffect(() => {
        const abortController = new AbortController();

        setTourScheduleError(null);

        listTourSchedulesByParams(region, tourName, abortController.signal)
            .then((data) => {
                setTourSchedule(data);
            })
            .catch((error) => {
                if(error.name === "AbortError") {
                    console.log("Tour schedule fetch aborted");
                    return;
                }
                setTourScheduleError(error);
            });
        return () => abortController.abort();
    }, [region, tourName]);
    

    return (
       <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Đặt Tour</h4>
                    <form>
                        <div className="container">
                            <div className="card">
                                <div className="card-body">

                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <h6 className="card-title">1. Thông tin đặt chỗ</h6>
                                        <div className="row">
                                            <div className="col-6">
                                                <label htmlFor="departureDate" className="form-label">
                                                    Ngày khởi hành
                                                </label>
                                                <select
                                                    name="scheduleId"
                                                    className="form-select booking-date-select"
                                                    value={formData.scheduleId}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>Ngày khởi hành</option>
                                                    {tourSchedule.map((schedule) => {
                                                        return (
                                                            <option
                                                                key={schedule.schedule_id}
                                                                value={schedule.schedule_id}
                                                            >
                                                                {formatDate(schedule.start_date)}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                            <div className="col-6">
                                                <label htmlFor="departureDate" className="form-label">
                                                    Số lượng khách
                                                </label>
                                                <div className="">
                                                    <p>Người lớn</p>
                                                    <button 
                                                        type="button"
                                                        onClick={() => 
                                                            setFormData({
                                                                ...formData,
                                                                adultCount: Math.max(1,formData.adultCount - 1),
                                                            })
                                                        }>-
                                                    </button>
                                                    <span>{formData.adultCount}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => 
                                                            setFormData({
                                                                ...formData,
                                                                adultCount: Math.max(1, formData.adultCount + 1),
                                                            })
                                                        }>+
                                                    </button>
                                                </div>
                                                <div className="">
                                                    <p>Trẻ em</p>
                                                    <button
                                                        type="button"
                                                        onClick={() => 
                                                            setFormData({
                                                                ...formData,
                                                                childCount: Math.max(0, formData.childCount - 1),
                                                            })
                                                        }>-
                                                    </button>
                                                    <span>{formData.childCount}</span>
                                                    <button
                                                        className="form-control"
                                                        type="button"
                                                        onClick={() => 
                                                            setFormData({
                                                                ...formData,
                                                                childCount: Math.max(0, formData.childCount + 1 ),
                                                            })
                                                        }>+
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">2. Thông tin liên hệ</h6>
                                <div className="row g-3">
                                    <div className="col-6">
                                        <label htmlFor="customerName" className="form-label">Họ và tên</label>
                                        <input type="text" className="form-control" id="customerName" placeholder="Nhập họ và tên"></input>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="customerName" className="form-label">Số điện thoại</label>
                                        <input type="text" className="form-control" id="customerName" placeholder="Nhập số điện thoại"></input> 
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="customerName" className="form-label">Email</label>
                                        <input type="text" className="form-control" id="customerName" placeholder="Nhập email"></input>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="customerName" className="form-label">Địa chỉ</label>
                                        <input type="text" className="form-control" id="customerName" placeholder="Nhập địa chỉ liên hệ"></input> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
       </>
    );
}

export default TourReservationForm;