import React, {useState, useEffect} from "react";

import { listTourSchedulesByParams } from "../api";

function TourReservationForm({ region, tourName }) {
    const initialFormState= {
        name: "",
        phoneNumber: "",
        email: "",
        address: "",
    };

    const[formData, setFormData] = useState({...initialFormState});
    const[selectedScheduleId, setSelectedScheduleId] = useState(null);
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
                        <div className="card">
                            <div className="card-body">

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">1. Thông tin đặt chỗ</h6>
                                <label htmlFor="departureDate" className="form-label">
                                    Ngày khởi hành
                                </label>
                                <select
                                    id="departureDate"
                                    className="form-select booking-date-select"
                                    /* value={selectedScheduleId}
                                        onChange={(event)} => setSelectedScheduleId(event.target.value)} */
                                >
                                    <option value="" disabled>Ngày khởi hành</option>
                                    {tourSchedule.map((schedule) => {
                                        <option
                                            key={schedule.schedule_id}
                                            value={schedule.schedule_id}
                                        >
                                            {formatDate(schedule.start_date)}
                                        </option>
                                    })}
                                </select>
                                <div>
                                    <p className="card-text">Số lượng khách</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">2. Thông tin liên hệ</h6>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
       </>
    );
}

export default TourReservationForm;