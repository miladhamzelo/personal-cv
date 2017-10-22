import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as ViewActions from '../../actions';
import LandingPageComponent from '../../components/landing-page/landingPageComponent';

class LandingPageContainer extends Component {

    render() {

        return (
                <LandingPageComponent />
        );
    }
}

function
  mapStateToProps(state) {
    return {
        something: null
    };
}

function
mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ViewActions, dispatch),
    };
}

export default connect(mapStateToProps,
    mapDispatchToProps)(LandingPageContainer);