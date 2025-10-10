import React from "react";
import UpdateTourScheduleForm from "./UpdateTourScheduleForm";

function TourSchedule() {
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
      <UpdateTourScheduleForm />
    </>
  );
}

export default TourSchedule;