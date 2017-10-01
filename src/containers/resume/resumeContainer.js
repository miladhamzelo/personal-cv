import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getData } from '../../data/dataFetcher';
import { API_MAPPINGS } from '../../constants/api/apiMappings';
import React, { Component } from 'react'; // eslint-disable-line import/first
import * as ViewActions from '../../actions';

class ResumePageContainer extends Component {

  static fetchData() {
    return getData(API_MAPPINGS.LANDING_PAGE);
  }

  render() {  
    // eslint-disable-next-line react/jsx-filename-extension
    return (
      <div> Hey buddy </div>
    );
  }
}

function
mapStateToProps(state) {
  return {
    gay: null
  };
}

function
mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ViewActions, dispatch),
  };
}

export default connect(mapStateToProps,
  mapDispatchToProps)(ResumePageContainer);