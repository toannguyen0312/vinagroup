import React, { useState, useEffect, useRef } from "react";
import logovinagroup from "./logovinagroup.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./DashBoard.css";
import MainSlider from "./mainSlider"; 
import TourCardForm from "./TourCardForm";
import Footer from "./footer";

function Dashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleNav = () => {
        console.log("Hamburger icon clicked!"); 
        setMobileMenuOpen(!mobileMenuOpen); 
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <main>
            <header>
                <div className="header-container">
                    <div className="logo-container">
                        <img src={logovinagroup} alt="Logo" className="logo-image" />
                        <i className="bi bi-list mobile-menu-icon" onClick={toggleNav}></i>
                    </div>
                    <div className="search-container">
                        <form>
                            <input
                                name="tour"
                                type="text"
                                id="tour"
                                placeholder="Bạn muốn du lịch ở đâu"
                                required={true}
                                className="search-input shadow bg-white rounded"
                            />
                            <button type="button" className="search-button flex items-center justify-center shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="nav-container">
                    <nav ref={menuRef}>
                        {/* Dropdown menu for navigation */}
                        <ul className={`nav-items ${mobileMenuOpen ? 'dropdown-menu show' : ''}`}>
                            <li className="nav-item">Home</li>
                            <li className="nav-item">Giới Thiệu</li>
                            <li className="nav-item">Du Lịch Nước Ngoài</li>
                            <li className="nav-item">Du Lịch Trong Nước</li>
                            <li className="nav-item">Teambuilding & Sự Kiện</li>
                            <li className="nav-item">Cẩm Nang Du Lịch</li>
                            <li className="nav-item">Góc Truyền Thông</li>
                            <li className="nav-item">Liên Hệ</li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section>
                <MainSlider /> {/* Include the MainSlider component */}
            </section>
            <h2 className="text-center mt-3">TOUR NƯỚC NGOÀI</h2>
            <TourCardForm />
            <h2 className="text-center mt-3">TOUR TRONG NƯỚC</h2>
            <TourCardForm />
            <h2 className="text-center mt-3">CẨM NANG</h2>
            <Footer />
        </main>
    );
}

export default Dashboard;