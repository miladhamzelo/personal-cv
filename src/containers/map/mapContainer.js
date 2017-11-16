import React, { Component } from 'react';
import MapComponent from '../../components/map/mapComponent';


export default class MapContainer extends Component {

    render() {
        return (
            <MapComponent center={this.props.center} location={this.props.location} company={this.props.company} />
        );
    }
}
