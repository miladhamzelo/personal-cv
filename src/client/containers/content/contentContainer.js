import React, { Component } from 'react';
import ContentComponent from '../../components/content/contentComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ViewActions from '../../actions';

export default class ContentContainer extends Component {

    _showContentSwitcher() {
        const key = 'experience';
        return (this.props.displayKey === key && !this.props.showExperience);
    }

    render() {
        return (
            <ContentComponent
                actions={this.props.actions}
                displayKey={this.props.displayKey}
                experience={this.props.experience}
                selectedSlide={this.props.selectedSlide}
                showExperience={this.props.showExperience}
                showContentSwitcher={this._showContentSwitcher()}
            />
        );
    }
}
