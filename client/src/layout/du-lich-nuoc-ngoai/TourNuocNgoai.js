import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { listToursByParams } from "../../utils/api";

function TourNuocNgoai({ region: propRegion, tourName: propTourName }) {
const { region: urlRegion, tourName: urlTourName } = useParams();
const region = propRegion || urlRegion;
const TourName = propTourName || urlTourName;

const [tourData, setTourData] = useState(null);
const [tourSchedule, setTourSchedule] = useState(null);
const [loading, setLoading] = useState(true);


    return (

    );
}

export default TourNuocNgoai;