import React, { useState, useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import NewDashBoardNav from "../dashboard/NewDashBoardNav";
import logovinagroup from "../dashboard/logovinagroup.jpg";
import { listTourDetailByParams } from "../../utils/api";



function TourFrame() {
    const initialFormState = {
        /*
        tour_id
        region_id
        name
        slug
        short_description
        tour_price
        tour_remaining_seat
        */
       tour_name: "",
       tour_short_description: "",
       tour_price: "",
       tour_remaining_seat: "",
    }

      const history = useHistory();
      const { region, tourName } = useParams();
      
      const [formData, setFormData] = useState({ ...initialFormState });
      const [tourError, setTourError] = useState(null);
      const [error, setError] = useState(null);
    
    //Load Tour

    useEffect(loadTour, [region, tourName])

    function loadTour() {
        const abortController = new AbortController();

        setTourError(null);

        listTourDetailByParams(region, tourName, abortController.signal)
            .then((data) =>
                setFormData({
                    tour_name: data.tour_name,
                    tour_short_description: data.tour_short_description,
                    tour_price: data.tour_price,
                    tour_remaining_seat: data.tour_remaining_seat,
                })
            )
            .catch(setTourError);
        return () => abortController.abort();
    }

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
            <div>
                <h3>{formData.tour_name}</h3>
                <p>{formData.tour_price}</p>
                <p>{formData.price}</p>
            </div>
            <div>
                <h3>Highlights</h3>
                <p>{formData.tour_short_description}</p>
            </div>

            // Add a reservation form for specific tour

            // Add itinerary of the tour component

            // Add tour's policies and extras
            
        </>
    )
}