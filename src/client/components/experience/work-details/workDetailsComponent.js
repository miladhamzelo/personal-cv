import Paper from 'material-ui/Paper';
import React from 'react';
import { jobDuties } from './index.config';

const WorkDetailsComponent = (props) => {

    const style = {
        height: 'auto',
        width: 600,
        textAlign: 'center',
        display: 'block',
        borderRadius: 50,
        margin: '0 auto',
        backgroundColor: 'inherit'
    };

    return (
        <div>
            <div className="work-details-container"><Paper style={style} zDepth={5} rounded={false}>
                <h1 className="work-details-header"><span className="job-title-container">{props.jobTitle} </span><span className="position-header-container">Job Duties : </span>  </h1>
                <p className="work-details"> {`${jobDuties[props.jobKey]}`}</p>
            </Paper>
            </div>
        </div>
    )
};

export default WorkDetailsComponent;