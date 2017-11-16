import React, { Component } from 'react';
import { config } from './index.config';

export default class ContentSelectorContainer extends Component {

    _getSelectedComponent() {
        return config[this.props.displayKey];
    }

    render() {
        const Component = this._getSelectedComponent();

        return (
             <Component props={this.props}/>
        )
    }
}