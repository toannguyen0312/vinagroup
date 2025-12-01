import React from "react";
import CreateTourScheduleForm from "./CreateTourScheduleForm";

function TourSchedule({ tourSchedule, tourId = 1 }) {
  // Filter schedules for the specific tour (default to tour_id 1 for Nhật Bản)
  const filteredSchedules = tourSchedule.filter(schedule => schedule.tour_id === tourId);
  
  // Format date function
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    });
  };

  // Format price function
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN').format(price);
  };

  const displayTourSchedule = filteredSchedules.map((schedule, index) => {
    return (
      <tr key={schedule.tourSchedule_id || index}>
        <td>{schedule.lich_trinh}</td>
        <td>{formatDate(schedule.start_date)}</td>
        <td>{formatDate(schedule.end_date)}</td>
        <td>{formatPrice(schedule.price)} VND</td>
      </tr>
    );
  });

  return (
    <>
      <div className="card">
          <div className="card-body p-0">
            <table className="table table-bordered mb-0 align-middle text-center">
              <thead className="table-light">
              <tr>
                <th scope="col">Lịch trình</th>
                <th scope="col">Ngày xuất phát</th>
                <th scope="col">Ngày kết thúc</th>
                <th scope="col">Giá tiền</th>
              </tr>
            </thead>
            <tbody>
              {filteredSchedules.length > 0 ? displayTourSchedule : (
                <tr>
                  <td colSpan="4">Chưa có lịch trình nào</td>
                </tr>
              )}
            </tbody>
            </table>
          </div>
      </div>
      <CreateTourScheduleForm />
    </>
  );


  /*return (
    <>
      <div className="card">
        <div className="card-body p-0">
          <table className="table table-bordered mb-0 align-middle text-center">
            <thead className="table-light">
              <tr>
                <th scope="col">Lịch trình</th>
                <th scope="col">Ngày xuất phát</th>
                <th scope="col">Ngày kết thúc</th>
                <th scope="col">Giá tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tháng 9</td>
                <td>25/09/2025</td>
                <td>29/09/2025</td>
                <td>33.990.000</td>
              </tr>
              <tr>
                <td>Tháng 10</td>
                <td>23/10/2025</td>
                <td>27/10/2025</td>
                <td>33.990.000</td>
              </tr>
              <tr>
                <td>Tháng 11</td>
                <td>06/11/2025</td>
                <td>10/11/2025</td>
                <td>33.990.000</td>
              </tr>
              <tr>
                <td>Tháng 11</td>
                <td>13/11/2025</td>
                <td>17/11/2025</td>
                <td>33.990.000</td>
              </tr>
              <tr>
                <td>Tháng 11</td>
                <td>20/11/2025</td>
                <td>24/11/2025</td>
                <td>33.990.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <CreateTourScheduleForm />
    </>
  ); */
}

export default TourSchedule;