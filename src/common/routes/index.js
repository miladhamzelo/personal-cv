import React from 'react';
import LandingPage from '../../client/containers/landing-page/landingPageContainer';
import ResumeContainer from '../../client/containers/resume/resumeContainer'

export default [
    {
        ...LandingPage,
        path: '/',
        exact: true
    },
    {
        ...ResumeContainer,
        path: '/resume'
    }
]
