import React, { Component } from 'react';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import IconButton from 'material-ui/IconButton';
import ContentSelectorContainer from '../../containers/content-selector/contentSelectorContainer';
import ContentSwitcher from '../content-switcher/contentSwitcher';

const ContentComponent = (props) => {

    const exitButton = (() => {
        return !props.showExperience ? <div className="exit-to-main-container"><IconButton onClick={props.actions.clearCategories}><ActionExitToApp /></IconButton></div> :
            <IconButton onClick={props.actions.showExperiencePaper}><ActionExitToApp /></IconButton>
    })();

    return (
        <div className="content-component-wrapper">
            <ContentSwitcher showContent={!props.showExperience} next={props.actions.goToNextSlide} prev={props.actions.goToPrevSlide} />
            {exitButton}
            <ContentSelectorContainer
                showExperience={props.showExperience}
                experience={props.experience}
                displayKey={props.displayKey}
                selectedSlide={props.selectedSlide}
                actions={props.actions}
            />
        </div>);
}

export default ContentComponent;