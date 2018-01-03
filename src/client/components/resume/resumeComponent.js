import React from 'react';
import CategorySelector from '../../containers/category-selector/categorySelectorContainer';
import ContentContainer from '../../containers/content/contentContainer';

const ResumeComponent = (props) => {

    const content = (() => {
        return !props.selectedKey ? <CategorySelector categories={props.categories} actions={props.actions} /> :
            <ContentContainer actions={props.actions} displayKey={props.selectedKey} experience={props.experience} showExperience={props.showExperience} selectedSlide={props.selectedSlide} />;
    })();

    return (
        <div className="city-backdrop position-vertical-centered">
                {content}
            </div>
    );
}

export default ResumeComponent