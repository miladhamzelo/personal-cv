import React, { Component } from 'react';
import ContentComponent from '../../components/content/contentComponent';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ViewActions from '../../actions';

export default class ContentContainer extends Component {

    render() {
        return (
            <div>
                <ContentComponent actions={this.props.actions} displayKey={this.props.displayKey} />
            </div>
        );
    }
}
