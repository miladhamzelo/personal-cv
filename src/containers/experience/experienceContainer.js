import React, { Component } from 'react';
import ExperienceComponent from '../../components/experience/experienceComponent';
import WorkDetailsComponent from '../../components/experience/work-details/workDetailsComponent';

export default class ExperienceContainer extends Component {

    _renderComponent() {
        return this.props.props.showExperience ? <WorkDetailsComponent /> :
            <ExperienceComponent actions={this.props.props.actions} experience={this.props.props.experience} selectedSlide={this.props.props.selectedSlide} />

    }

    render() {
        const comp = this._renderComponent();
        return (
            comp
        );
    }
}