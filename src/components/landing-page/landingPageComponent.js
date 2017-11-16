import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

export default class LandingPageComponent extends Component {

    render() {

        return (
            <div className="city-backdrop">
                <div className="page-wrapper">
                    <div className="go-to-resume-button-wrapper position-element-middle-abs">
                        <IconButton onClick={this.props.onClick.bind(this)}>
                            <ActionFlightTakeoff />
                        </IconButton>
                    </div>
                </div>
            </div>
        )
    }
}
