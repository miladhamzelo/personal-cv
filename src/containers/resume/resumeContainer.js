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
                <ResumeComponent categories={this.props.resumeCategories} actions={this.props.actions} selectedKey={displayKey} />
            );
        }
    }

    function mapStateToProps(state) {
        return {
            resumeCategories: state.reducer.categories
        }
    }

    function mapDispatchToProps(dispatch) {
        return {
            actions: bindActionCreators(ViewActions, dispatch)
        }
    }

    export default connect(mapStateToProps,
        mapDispatchToProps)(ResumeContainer);