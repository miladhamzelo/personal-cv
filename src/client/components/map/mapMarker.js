import React from 'react';
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

const MapMarker = (props) => {


    return (
        <MarkerWithLabel
            position={{ lat: props.location.lat, lng: props.location.lng }}
            labelAnchor={new google.maps.Point(0, 0)}
            labelStyle={{ color: "#ffffff", height: "25px", lineHeight: "25px", width: "75px", fontSize: "0.5rem", padding: "5px", backgroundColor: "#ff9999", borderRadius: "10px" }}
        >
            <div className="marker-content">{ props.company}</div>
        </MarkerWithLabel>
    )
};

export default MapMarker;