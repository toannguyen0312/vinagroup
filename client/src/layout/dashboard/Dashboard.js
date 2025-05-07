import React, { useState } from "react";
import logovinagroup from "./logovinagroup.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./DashBoard.css";
import MainSlider from "./mainSlider"; 
import TourCardForm from "./TourCardForm";
import Footer from "./footer";
import DashBoardNav from "./DashBoardNav";


function Dashboard({}) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleNav = () => {
        setMobileMenuOpen(prev => !prev);
    };

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
                <DashBoardNav 
                    mobileMenuOpen={mobileMenuOpen}
                    setMobileMenuOpen={setMobileMenuOpen}
                />
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