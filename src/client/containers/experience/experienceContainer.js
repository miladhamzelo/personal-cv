import React, { Component } from 'react';
import ExperienceComponent from '../../components/experience/experienceComponent';
import WorkDetailsComponent from '../../components/experience/work-details/workDetailsComponent';

export default class ExperienceContainer extends Component {

    _renderComponent() {
        const selectedJob = this.props.props.experience[this.props.props.selectedSlide];
        return this.props.props.showExperience ? <WorkDetailsComponent jobKey={selectedJob.key} jobTitle={selectedJob.company} /> :
            <ExperienceComponent actions={this.props.props.actions} experience={this.props.props.experience} selectedSlide={this.props.props.selectedSlide} />

    }

    render() {
        const comp = this._renderComponent();
        return (
            comp
        );
    }
}