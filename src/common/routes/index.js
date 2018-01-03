import React from 'react';
import ResumeContainer from '../../client/containers/resume/resumeContainer'

export default [
    {
        ...ResumeContainer,
        path: '/',
        exact: true
    },
    {
        ...ResumeContainer
    }
]
