import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import NewDashBoardNav from "../dashboard/NewDashBoardNav";
import TourReservationForm from "../../utils/TourUtils/TourReservationForm";
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

      const { region, tourName } = useParams();
      
      const [formData, setFormData] = useState({ ...initialFormState });
      const [tourError, setTourError] = useState(null);
      const [isLoading, setIsLoading] = useState(false);
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


      const toggleNav = () => {
        setMobileMenuOpen((prev) => !prev);
      };
    
    //Load Tour

    useEffect(loadTour, [region, tourName])

    function loadTour() {
        const abortController = new AbortController();

        setIsLoading(true);
        setTourError(null);

        listTourDetailByParams(region, tourName, abortController.signal)
            .then((data) => {
                if (!data) {
                    throw new Error("Tour data not found.");
                }

                setFormData({
                    tour_name: data.tour_name,
                    tour_short_description: data.tour_short_description,
                    tour_price: data.tour_price,
                    tour_remaining_seat: data.tour_remaining_seat,
                });
            })
            .catch(setTourError)
            .finally(() => setIsLoading(false));
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
            {isLoading ? <p>Loading tour...</p> : null}
            {tourError ? <p>Unable to load this tour: {tourError.message}</p> : null}
            <div>
                <h3>{formData.tour_name}</h3>
                <p>{formData.tour_price}</p>
                <p>{formData.tour_remaining_seat}</p>
            </div>
            <div>
                <h3>Highlights</h3>
                <p>{formData.tour_short_description}</p>
            </div>
            <TourReservationForm
                region={region}
                tourName={tourName}
            />
        </>
    )
}

export default TourFrame;