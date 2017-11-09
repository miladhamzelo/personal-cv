import React, { Component } from 'react';
import ActionEject from 'material-ui/svg-icons/action/eject';
import IconButton from 'material-ui/IconButton';
import ContentSelectorContainer from '../../containers/content-selector/contentSelectorContainer';

const ContentComponent = (props) => {
    return (
        <div className="content-component-wrapper position-element-middle-abs">
            <div className="exit-button-wrapper">
                <IconButton onClick={props.actions.clearCategories}>
                    <ActionEject />
                </IconButton>
                <ContentSelectorContainer displayKey={props.displayKey} />
            </div>
        </div>
    );
}

export default ContentComponent;