import React from 'react';
import { Router, Route } from 'react-router';
import LandingPageContainer from '../containers/landing-page/landingPageContainer';

export default function (history) {
  return (
    <Router history={history}>
      <Route path="/" component={LandingPageContainer} />
    </Router>
  );
}
