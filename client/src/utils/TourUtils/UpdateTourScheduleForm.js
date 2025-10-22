import React from "react";
import { useState } from "react";
import { createTourSchedule } from "../api";

function UpdateTourScheduleForm() {
    const initialFormState = {
        lichTrinh: "",
        ngayXuatPhat: "",
        ngayKetThuc: "",
        giaTien: "",
    };
    const [formData, setFormData] = useState({...initialFormState});
    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData({...initialFormState});
    };

    return (
        <form onSubmit={handleSubmit}>
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
    )
}

export default UpdateTourScheduleForm;