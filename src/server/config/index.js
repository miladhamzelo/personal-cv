import ResumePageContainer from '../../containers/resume/resumeContainer';

export const routes = [

    {
        path: '/',
        component: ResumePageContainer,
        loadData: () => { return null }
    }
]