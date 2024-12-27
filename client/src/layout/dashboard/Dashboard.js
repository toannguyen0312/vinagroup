import React, { useState, useEffect, useRef } from "react";
import logovinagroup from "./logovinagroup.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./DashBoard.css";

function Dashboard() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleNav = () => {
        console.log("Hamburger icon clicked!"); // Logging to check if click works
        setMobileMenuOpen(!mobileMenuOpen); // Toggle the mobile menu state
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMobileMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
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
                                className="search-input"
                            />
                            <button className="bi bi-search search-button" type="button"></button>
                        </form>
                    </div>
                </div>
                <p>
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
                </p>
            </header>
        </main>
    );
}

export default Dashboard;
