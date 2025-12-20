import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TourNhatBan.css";
import NhatBanMain from "./TourNhatBanPhoto/NhatBanMain.jpg";
import TourNhatBanDetail from "./TourNhatBanDetail";
import Footer from "../../../../utils/Footer/Footer";
import logovinagroup from "../../../dashboard/logovinagroup.jpg";
import NewDashBoardNav from "../../../dashboard/NewDashBoardNav";
import TourSpec from "../../../../utils/TourUtils/TourSpec";
import TourSchedule from "../../../../utils/TourUtils/TourSchedule";
import TourInfo1 from "./TourInfo1";
import TextEditor from "./TextEditor";
import { listTourSchedule } from "../../../../utils/api";

function TourNhatBan() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tourSchedule, setTourSchedule] = useState([]);
  const [tourScheduleError, setTourScheduleError] = useState(null);
  const [loading, setLoading] = useState(true);

  const toggleNav = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const abortController = new AbortController();

    setTourScheduleError(null);
    setLoading(true);

    listTourSchedule(abortController.signal)
      .then((data) => {
        setTourSchedule(data);
        setLoading(false);
      })
      .catch((error) => {
        // Ignore abort errors, handle real errors
        if (error.name === "AbortError") {
          console.log("Tour schedule fetch aborted");
          return;
        }
        setTourScheduleError(error);
        setLoading(false);
      });

    // Cleanup: abort fetch if component unmounts
    return () => {
      console.log("Cleanup: aborting tour schedule request");
      abortController.abort();
    };
  }, []); // runs once on mount

  return (
    <div>
      <div className="top-container">
        <p>028 3526 4168 | 0934 043 188</p>
      </div>

      <div className="logonav">
        <Link to="/" className="navbar-brand">
          <img src={logovinagroup} alt="VinaGroup Logo" className="logo-image" />
        </Link>
        <NewDashBoardNav toggleNav={toggleNav} mobileMenuOpen={mobileMenuOpen} />
      </div>

      <div>
        <img src={NhatBanMain} alt="mainPhoto" className="main-photo" />
        <p className="title-text">Tour Nhật Bản - Cung Đường Vàng</p>
      </div>

      <TourSpec />

      {loading ? (
        <div className="text-center p-4">Đang tải lịch trình...</div>
      ) : tourScheduleError ? (
        <div className="alert alert-danger">
          Lỗi tải dữ liệu: {tourScheduleError.message}
        </div>
      ) : (
        <TourSchedule tourSchedule={tourSchedule} tourId={1} />
      )}

      <TourNhatBanDetail />
      <TextEditor />
      <TourInfo1 />
      <Footer />
    </div>
  );
}

export default TourNhatBan;