import React from 'react';
import CategorySelector from '../../containers/category-selector/categorySelectorContainer';
import ContentContainer from '../../containers/content/contentContainer';

const ResumeComponent = (props) => {

    const content = (() => {
        return !props.selectedKey ? <CategorySelector categories={props.categories} actions={props.actions} /> :
            <ContentContainer actions={props.actions} displayKey={props.selectedKey} />;
    })();

    return (
        <div className="background-wrapper resume-backdrop">
            {content}
        </div>
    );
}

export default ResumeComponent