import React, { Component } from 'react';
import ResumeComponent from '../../components/resume/resumeComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ViewActions from '../../actions';

class ResumeContainer extends Component {

    _getDisplayKey() {
        const categories = this.props.resumeCategories;
        const selectedItem = categories.find(item => {
            return item.selected;
        })

        return selectedItem ? selectedItem.key : null;
    }

    render() {
        const displayKey = this._getDisplayKey();
        return (
            <ResumeComponent
                experience={this.props.experience}
                categories={this.props.resumeCategories}
                actions={this.props.actions}
                selectedKey={displayKey}
                selectedSlide={this.props.selectedSlide}
                showExperience={this.props.showExperience}
            />
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

export default { component: connect(mapStateToProps,
    mapDispatchToProps)(ResumeContainer)
};