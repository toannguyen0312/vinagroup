import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./TourNhatBan.css";
import NhatBanMain from "./TourNhatBanPhoto/NhatBanMain.jpg"
import TourNhatBanDetail from "./TourNhatBanDetail";
import Footer from "../../../../utils/Footer/Footer";
import logovinagroup from "../../../dashboard/logovinagroup.jpg";
import NewDashBoardNav from "../../../dashboard/NewDashBoardNav";
import TourSpec from "../../../../utils/TourUtils/TourSpec";
import TourSchedule from "../../../../utils/TourUtils/TourSchedule";
import TourInfo1 from "./TourInfo1";
import TextEditor from "./TextEditor";

function TourNhatBan() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        
    const toggleNav = () => {
        setMobileMenuOpen(prev => !prev);
    };

    return (
    <div>
        <div className="top-container">
            <p>028 3526 4168 | 0934 043 188</p>
        </div>
        <div className="logonav">
            <Link to="/" className="navbar-brand">
                <img src={logovinagroup} alt="VinaGroup Logo" className="logo-image"/>
            </Link>                
            <NewDashBoardNav />
        </div>
        <div>
            <img src={NhatBanMain} alt="mainPhoto" className="main-photo"/>
            <p className="title-text">Tour Nhật Bản - Cung Đường Vàng</p>
        </div>
        <TourSpec />
        <TourSchedule />
        <TourNhatBanDetail />
        <TextEditor />
        <TourInfo1 />
        <Footer />
    </div>
    );
}

export default TourNhatBan;