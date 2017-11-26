import React, { Component } from 'react';
import TechListComponent from './tech-list/techListComponent';
import Subheader from 'material-ui/Subheader';
import MapContainer from '../../containers/map/mapContainer';
import ActionInfo from 'material-ui/svg-icons/action/info';
import { classMappings, skills } from './index.config';
import IconButton from 'material-ui/IconButton';

const ExperienceComponent = (props) => {

    const _getItems = (key) => {
        return skills[key];
    }

    const job = ((key) => {
        return props.experience[props.selectedSlide];
    })();

    const pictureClassNames = (() => {
        let classNames = ['association-header'];
        classNames.push(classMappings[job.key]);
        return classNames;
    })()

    return (
        <div>
            <h2> Experience </h2>
            <div className="experience-component-container position-horizontal-centered">
                <div className="header-container">
                    <div className="association-header-container">
                        <div className={pictureClassNames.join(', ')}>
                        </div>
                    </div>

                    <div className="association-info-container">
                        <span className="org-name"> {job.company}</span>
                        <span className="date-worked"> {job.date.start} - {job.date.end}</span>
                        <span className="role-container"> {job.title}  </span>
                        <span className="job-info-container"> <IconButton onClick={props.actions.showExperiencePaper}><ActionInfo /> </IconButton> </span>
                    </div>
                </div>
                <div className="work-history-container">
                <div className="form-tech-list">
                    <div className="subheader-container">
                    <Subheader> Relevent Skills </Subheader>
                    </div>
                    <div className="tech-list-container">
                        <TechListComponent items={_getItems(job.key)} />
                    </div>
                    </div>
                    <div className="work-information-container">
                        <div className="subheader-container">
                            <Subheader>Position Information</Subheader>
                        </div>
                        <div className="map-container">
                            <MapContainer center={job.center} location={job.location} company={job.company} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceComponent;