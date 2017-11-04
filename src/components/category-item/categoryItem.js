import React from 'react'

const categoryItem = (props) => {
    const classNames = ['category-item-wrapper'];
    if (props.bottomItem){
        classNames.push('bottom-element');
    }
    return (
        <div className={classNames.join(' ')}>shane</div>
            )

};


export default categoryItem;