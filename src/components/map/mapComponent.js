import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MapMarker from './mapMarker';

const markers = (locations, company) => {
    return locations.map(location => {
        return <MapMarker key={company} company={company} location={location} />
    });
}

const zoom = (newZoom) => {
    return newZoom ? newZoom : 10;
};

const MapComponent = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `inherit` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>


    <GoogleMap
        defaultZoom={zoom(props.newZoom)}
        center={{ lat: props.center.lat, lng: props.center.lng }}
    >
        {markers(props.location, props.company)}
    </GoogleMap>
    )

export default MapComponent;

