import LandingPageContainer from '../../containers/landing-page/landingPageContainer';
import ResumeContainer from '../../containers/resume/resumeContainer';

export const routes = [
    {
        path: '/',
        component: LandingPageContainer,
    },

    {
        path: '/resume',
        component: ResumeContainer 
    }
];
