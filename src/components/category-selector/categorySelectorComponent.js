import React from 'react';
import CategoryItem from '../category-item/categoryItem';

const CategorySelectorComponent = (props) => {

    const renderItems = () => {
        const items = [];
        for (let i = 0; i < props.itemCount; i++) {
            const num = i + 1;
            const className = `circle-quarter-${props.categories[i].iconIndex}`;
            const item = <div onClick={props.actions.setCategory.bind(this, props.categories[i].key)} key={i} className={className}> <CategoryItem title={props.categories[i].title} displayKey={props.categories[i].key} actions={props.actions} index={num} icon={props.displayIcons[i]}/></div>
            items.push(item);
        }
        return items;
    }

    const items = renderItems();

    return (

        <div className="category-selector-widget-wrapper position-horizontal-centered">
            {items}
        </div>
    );
}

export default CategorySelectorComponent;