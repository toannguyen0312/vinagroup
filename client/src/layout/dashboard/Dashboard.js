import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./DashBoard.css";
import MainSlider from "./mainSlider"; 
import TourCardForm from "./TourCardForm";
import Footer from "../../utils/Footer/Footer";
import NewDashBoardNav from "./NewDashBoardNav";
import CamNangForm from "./CamNangForm";

function Dashboard({}) {
    return (
        <main>
            <div className="top-container">
                <p>028 3526 4168 | 0934 043 188</p>
            </div>
            <header>
                <NewDashBoardNav />
                <div className="header-container">
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
                            <button type="button" className="search-button shadow">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </header>            
                <div>
                    <div className="tour-button-box">
                        <button type="button" className="hot-button shadow">Tour Hè</button>
                        <button type="button" className="hot-button shadow">Tour Hot</button>
                    </div>
                    <div className="tour-button-box">
                        <button type="button" className="hot-button shadow">Tour Trong Nước</button>
                        <button type="button" className="hot-button shadow">Tour Nước Ngoài</button>
                    </div>
                </div>        
            <section>
                <MainSlider /> {/* Include the MainSlider component */}
            </section>
            <div className="tour-ngoai-section">
                <h2 className="text-center mt-3">TOUR NƯỚC NGOÀI</h2>
                <TourCardForm />
            </div>
            <h2 className="text-center mt-3">TOUR TRONG NƯỚC</h2>
            <TourCardForm />
            <h2 className="text-center mt-3">CẨM NANG</h2>
            <CamNangForm />
            <Footer />
        </main>
    );
}

export default Dashboard;