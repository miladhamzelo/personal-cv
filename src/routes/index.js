import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPageContainer from '../containers/landing-page/landingPageContainer';
import ResumeContainer from '../containers/resume/resumeContainer';

export default function (history) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPageContainer} />
        <Route path="/resume" component={ResumeContainer} />
      </Switch>
    </BrowserRouter>
  );
}
