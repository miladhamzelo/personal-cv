import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as ViewActions from '../../actions';
import LandingPageComponent from '../../components/landing-page/landingPageComponent';

class LandingPageContainer extends Component {

    _redirectToResume() {
        this.props.history.push("/resume");
    }

    render() {

        return (
            <LandingPageComponent history={this.props.history} onClick={this._redirectToResume} />
        );
    }
}

function mapStateToProps({ admins }) {
    return { admins };
}

export default {
    component: connect(mapStateToProps)(LandingPageContainer)
}