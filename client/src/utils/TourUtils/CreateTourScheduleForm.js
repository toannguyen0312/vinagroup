import React from "react";
import { useState, useEffect } from "react";
import { createTourSchedule, listTours } from "../api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CreateTourScheduleForm.css";

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
        <div className="container mt-4">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10">
                    <div className="card shadow">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <label htmlFor="tour_id" className="form-label">
                                            Chọn Tour <span className="text-danger">*</span>
                                        </label>
                                        <select
                                            id="tour_id"
                                            name="tour_id"
                                            className="form-select"
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
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-12">
                                        <label htmlFor="lichTrinh" className="form-label">
                                            Lịch Trình <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            id="lichTrinh"
                                            type="text"
                                            name="lichTrinh"
                                            className="form-control"
                                            onChange={handleChange}
                                            value={formData.lichTrinh}
                                            placeholder="Nhập lịch trình tour"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label htmlFor="ngayXuatPhat" className="form-label">
                                            Ngày Xuất Phát <span className="text-danger">*</span>
                                        </label>
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
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="ngayKetThuc" className="form-label">
                                            Ngày Kết Thúc <span className="text-danger">*</span>
                                        </label>
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
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <label htmlFor="giaTien" className="form-label">
                                            Giá Tiền (VNĐ) <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            id="giaTien"
                                            type="number"
                                            name="giaTien"
                                            className="form-control"
                                            onChange={handleChange}
                                            value={formData.giaTien}
                                            min="0"
                                            step="1000"
                                            placeholder="Nhập giá tiền"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary w-100">
                                            <i className="bi bi-save me-2"></i>Lưu Lịch Trình
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTourScheduleForm;