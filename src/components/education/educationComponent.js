import React from 'react';
import MapContainer from '../../containers/map/mapContainer';

const EducationComponent = () => {

    const munLocationMetaData = {
        center: {
            lat: 47.575,
            lng: -52.74
        },
        coords: [{
            lat: 47.5737975,
            lng: -52.732905
        }],
        name: 'Memeorial University of Newfoundland'
    };

    return (
        <div>
            <h2> Education </h2>
        <div className="education-component-container">
            <div className="school-info-container">
                <div className="school-image"></div>
                <div className="school-info">
                    <span className="mun-container"> Memorial Unversity of Newfoundland </span>
                    <span className="focus-study">B.Sc Computer Science </span>
                    <span className="degree-dates">2008 - 2012 </span>
                </div>
            </div>
            <div className="school-map-container">
            <div className="map-container">
                <MapContainer newZoom={12} center={munLocationMetaData.center} location={munLocationMetaData.coords}
                    company={munLocationMetaData.name} />
                    </div>
            </div>
        </div>
        </div>
    )
}

export default EducationComponent;