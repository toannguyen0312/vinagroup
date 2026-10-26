import React, {useState, useEffect} from "react";

import { listTourSchedulesByParams, createTourReservation } from "../api";
import { formatDate } from "../formatDate";

function TourReservationForm({ region, tourName }) {
    const initialFormState= {
        tourSchedule_id: "",
        name: "",
        mobile_number: "",
        email: "",
        address: "",
        adultCount: 1,
        childCount: 0,
    };

    const[formData, setFormData] = useState({...initialFormState});
    const[tourSchedule, setTourSchedule] = useState([]);
    const [tourScheduleError, setTourScheduleError] = useState(null);
    const [error, setError] = useState(false);

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

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        try {
            await createTourReservation({
                ...formData,
                tourSchedule_id: Number(formData.tourSchedule_id),
                adultCount: Number(formData.adultCount),
                childCount: Number(formData.childCount),
                name: formData.name.trim(),
                mobile_number: formData.mobile_number.trim(),
                email: formData.email.trim(),
                address: formData.address.trim(),
            });
            setFormData({...initialFormState});
        } catch (error) {
            setError(error);
        }
    };
    

    return (
       <>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">Đặt Tour</h4>
                    <form onSubmit={handleSubmit}>
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
                                                    name="tourSchedule_id"
                                                    className="form-select booking-date-select"
                                                    value={formData.tourSchedule_id}
                                                    onChange={handleChange}
                                                    required
                                                >
                                                    <option value="" disabled>Ngày khởi hành</option>
                                                    {tourSchedule.map((schedule) => {
                                                        return (
                                                            <option
                                                                key={schedule.tourSchedule_id}
                                                                value={schedule.tourSchedule_id}
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
                                                            setFormData((prev) = ({
                                                                ...prev,
                                                                adultCount: Math.max(1, Number(prev.adultCount) - 1),
                                                            }))
                                                        }>-
                                                    </button>
                                                    <span>{formData.adultCount}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => 
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                adultCount: Math.max(1, Number(prev.adultCount + 1)),
                                                            }))
                                                        }>+
                                                    </button>
                                                </div>
                                                <div className="">
                                                    <p>Trẻ em</p>
                                                    <button
                                                        type="button"
                                                        onClick={() => 
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                childCount: Math.max(0, Number(prev.childCount) - 1),
                                                            }))
                                                        }>-
                                                    </button>
                                                    <span>{formData.childCount}</span>
                                                    <button
                                                        className=""
                                                        type="button"
                                                        onClick={() => 
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                childCount: Math.max(0, Number(prev.childCount) + 1),
                                                            }))
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
                                        <input type="text" className="form-control" id="customerName" name="name" onChange={handleChange} value={formData.name} placeholder="Nhập họ và tên" required></input>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="customerMobileNumber" className="form-label">Số điện thoại</label>
                                        <input type="tel" className="form-control" id="customerMobileNumber" name="mobile_number" onChange={handleChange} value={formData.mobile_number} placeholder="Nhập số điện thoại" required></input> 
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="customerEmail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="customerEmail" name="email" onChange={handleChange} value={formData.email} placeholder="Nhập email" required></input>
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="customerAddress" className="form-label">Địa chỉ</label>
                                        <input type="text" className="form-control" id="customerAddress" name="address" onChange={handleChange} value={formData.address} placeholder="Nhập địa chỉ liên hệ" required></input> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            >
                            Submit
                        </button>
                        {error ? (
                            <p className="text-danger mt-2 mb-0">
                                {error.message || "Không thể đặt chỗ. Vui lòng thử lại."}
                            </p>
                        ) : null}
                    </form>
                </div>
            </div>
       </>
    );
}

export default TourReservationForm;