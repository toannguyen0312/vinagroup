import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./TourNhatBan.css";
import NhatBanMain from "./TourNhatBanPhoto/NhatBanMain.jpg"
import TourNhatBanDetail from "./TourNhatBanDetail";
import TourInfo from "./TourNhatBanPhoto/TourInfo";

import logovinagroup from "../../../dashboard/logovinagroup.jpg";

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
        <div className="logo-container">
            <Link to ="/"><img src={logovinagroup} alt="Logo" className="logo-image"/></Link>
            <i className="bi bi-list mobile-menu-icon" onClick={toggleNav}></i>
        </div>
        <div>
            <img src={NhatBanMain} alt="mainPhoto" className="main-photo"/>
            <p className="title-text">Tour Nhật Bản - Cung Đường Vàng</p>
        </div>
        <TourNhatBanDetail />
        <TourInfo />
    </div>
    );
}

export default TourNhatBan;