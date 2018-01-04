import React, { Component } from 'react';
import ResumeComponent from '../../components/resume/resumeComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ViewActions from '../../actions';
import { Helmet } from 'react-helmet';

class ResumeContainer extends Component {

    _getDisplayKey() {
        const categories = this.props.resumeCategories;
        const selectedItem = categories.find(item => {
            return item.selected;
        })

        return selectedItem ? selectedItem.key : null;
    }

    _formHead() {
        return (
            <Helmet>
               <meta property="og:title" content="Shane's CV" />
               <meta property="og:type" content="website" /> 
               <meta property="og:url" content="http://www.shane-arthur.com" />
               <meta property="og:image" content="https://cdn3.iconfinder.com/data/icons/business-vol-2/72/72-512.png" />
               <title> Shane's CV </title>
            </Helmet>
        );
    }

    render() {
        const displayKey = this._getDisplayKey();
        return (
            <div>
                {this._formHead()}
                <ResumeComponent
                    experience={this.props.experience}
                    categories={this.props.resumeCategories}
                    actions={this.props.actions}
                    selectedKey={displayKey}
                    selectedSlide={this.props.selectedSlide}
                    showExperience={this.props.showExperience}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        resumeCategories: state.reducer.categories,
        experience: state.reducer.experience,
        selectedSlide: state.reducer.selectedTile,
        showExperience: state.reducer.showExperience
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ViewActions, dispatch)
    }
}

export default {
    component: connect(mapStateToProps,
        mapDispatchToProps)(ResumeContainer)
};