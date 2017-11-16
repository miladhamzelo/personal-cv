import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import MapMarker from './mapMarker';

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
        defaultZoom={10}
        center={{ lat: props.center.lat, lng: props.center.lng }}
    >
        <MapMarker company={props.company} location={props.location} />
    </GoogleMap>
    )

export default MapComponent;

