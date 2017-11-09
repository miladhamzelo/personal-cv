import React from 'react'
import SvgIcon from 'material-ui/SvgIcon';

const categoryItem = (props) => {

    const classNames = ['category-item-wrapper'];
    if (props.bottomItem) {
        classNames.push('bottom-element');
    }
    return (
        <div onClick={props.actions.setCategory.bind(this, props.displayKey)} className={classNames.join(' ')}>
            <props.icon />
        </div>
    );

};


export default categoryItem;