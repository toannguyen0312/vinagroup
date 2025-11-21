import React from "react";
import { useState, useEffect } from "react";
import { createTourSchedule, listTours } from "../api";

function CreateTourScheduleForm() {
    const initialFormState = {
        tour_id: "",
        lichTrinh: "",
        ngayXuatPhat: "",
        ngayKetThuc: "",
        giaTien: "",
    };
    const [formData, setFormData] = useState({...initialFormState});
    const [tours, setTours] = useState([]);

    // Load tours when component mounts
    useEffect(() => {
        async function loadTours() {
            try {
                console.log("🔄 Loading tours...");
                const toursData = await listTours();
                console.log("✅ Tours data received:", toursData);
                setTours(toursData);
            } catch (error) {
                console.error("❌ Error loading tours:", error);
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

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await createTourSchedule(formData);
            setFormData({...initialFormState});
            alert("Tour schedule created successfully!");
        } catch (error) {
            console.error("Error creating tour schedule:", error);
            alert("Error creating tour schedule. Please try again.");
        }
    };

    return (
        <div>
            {/* Debug info */}
            <div style={{ background: '#f0f0f0', padding: '10px', marginBottom: '20px' }}>
                <strong>Debug Info:</strong><br/>
                Tours loaded: {tours.length}<br/>
                Tours data: {JSON.stringify(tours, null, 2)}
            </div>
            
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
                <input
                    id="ngayXuatPhat"
                    type="date"
                    name="ngayXuatPhat"
                    onChange={handleChange}
                    value={formData.ngayXuatPhat}
                    required
                />
            </label>
            <br />
            <label htmlFor="ngayKetThuc">
                Ngày Kết Thúc
                <input
                    id="ngayKetThuc"
                    type="date"
                    name="ngayKetThuc"
                    onChange={handleChange}
                    value={formData.ngayKetThuc}
                    required
                />
            </label>
            <br />
            <label htmlFor="giaTien">
                Giá Tiền
                <input
                    id="giaTien"
                    type="text"
                    name="giaTien"
                    onChange={handleChange}
                    value={formData.giaTien}
                    required
                />
            </label>
            <br />
            <button type="submit">Lưu</button>
        </form>
        </div>
    )
}

export default CreateTourScheduleForm;