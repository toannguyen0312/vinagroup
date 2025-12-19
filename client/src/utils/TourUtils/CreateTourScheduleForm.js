import React from "react";
import { useState, useEffect } from "react";
import { createTourSchedule, listTours } from "../api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateTourScheduleForm() {
    const initialFormState = {
        tour_id: "",
        lichTrinh: "",
        ngayXuatPhat: null,
        ngayKetThuc: null,
        giaTien: "",
    };
    const [formData, setFormData] = useState({...initialFormState});
    const [tours, setTours] = useState([]);

    // Load tours when component mounts
    useEffect(() => {
        async function loadTours() {
            try {
                const toursData = await listTours();
                setTours(toursData);
            } catch (error) {
                console.error("Error loading tours:", error);
            }
        }
        loadTours();
    }, []);

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleDateChange = (date, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: date,
        });
    }; // ✅ Added missing semicolon

    const formatDateForBackend = (date) => {
        if (!date) return '';
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const backendData = {
                ...formData,
                ngayXuatPhat: formatDateForBackend(formData.ngayXuatPhat),
                ngayKetThuc: formatDateForBackend(formData.ngayKetThuc),
            };
            
            await createTourSchedule(backendData);
            setFormData({...initialFormState});
            alert("Tour schedule created successfully!");
        } catch (error) {
            console.error("Error creating tour schedule:", error);
            alert("Error creating tour schedule. Please try again.");
        }
    };

    return (
        <div> {/* ✅ Added wrapper div */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="tour_id">
                    Chọn Tour
                    <select
                        id="tour_id"
                        name="tour_id"
                        onChange={handleChange}
                        value={formData.tour_id}
                        required
                    >
                        <option value="">-- Chọn một tour --</option>
                        {tours.map((tour) => (
                            <option key={tour.tour_id} value={tour.tour_id}>
                                {tour.tour_name}
                            </option>
                        ))}
                    </select>
                </label>
                <br />

                <label htmlFor="lichTrinh">
                    Lịch Trình
                    <input
                        id="lichTrinh"
                        type="text"
                        name="lichTrinh"
                        onChange={handleChange}
                        value={formData.lichTrinh}
                        required
                    />
                </label>
                <br />

                <label htmlFor="ngayXuatPhat">
                    Ngày Xuất Phát
                    <DatePicker
                        id="ngayXuatPhat"
                        selected={formData.ngayXuatPhat}
                        onChange={(date) => handleDateChange(date, 'ngayXuatPhat')}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        minDate={new Date()}
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        className="form-control" // ✅ Use className instead of style
                    />
                </label>
                <br />

                <label htmlFor="ngayKetThuc">
                    Ngày Kết Thúc
                    <DatePicker
                        id="ngayKetThuc"
                        selected={formData.ngayKetThuc}
                        onChange={(date) => handleDateChange(date, 'ngayKetThuc')}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="DD/MM/YYYY"
                        minDate={formData.ngayXuatPhat || new Date()}
                        showYearDropdown
                        showMonthDropdown
                        dropdownMode="select"
                        className="form-control" // ✅ Use className instead of style
                    />
                </label>
                <br />

                <label htmlFor="giaTien">
                    Giá Tiền
                    <input
                        id="giaTien"
                        type="number" // ✅ Changed to number type
                        name="giaTien"
                        onChange={handleChange}
                        value={formData.giaTien}
                        min="0"
                        step="1000"
                        required
                    />
                </label>
                <br />
                <button type="submit">Lưu</button>
            </form>
        </div>
    );
}

export default CreateTourScheduleForm;