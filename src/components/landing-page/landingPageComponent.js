import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class LandingPageComponent extends Component {

    render() {
        return (
            <div className="background-wrapper-landing-page">
                 <RaisedButton label="Primary" primary={true}/>
                </div>
        )
    }
}