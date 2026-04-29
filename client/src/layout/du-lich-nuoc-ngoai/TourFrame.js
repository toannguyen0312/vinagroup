import React from "react";
import { Link } from "react-router-dom";

import NewDashBoardNav from "../dashboard/NewDashBoardNav";
import logovinagroup from "../dashboard/logovinagroup.jpg";


function TourFrame() {
    return (
        <>
            <div>
                <p>028 3526 41668 | 0934 043 188</p>
            </div>

            <div className="logonav">
                <Link to="/" className="navbar-brand">
                <img src={logovinagroup} alt="VinaGroup Logo" className="logo-image" />
                </Link>
                <NewDashBoardNav toggleNav={toggleNav} mobileMenuOpen={mobileMenuOpen} />
            </div>

            // Add photos slideshow component

            // Add tour's title and basic description component

            // Add a reservation form for specific tour

            // Add itinerary of the tour component

            // Add tour's policies and extra
            
        </>
    )
}