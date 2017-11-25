import React from 'react';
import CategoryItem from '../category-item/categoryItem';

const CategorySelectorComponent = (props) => {

    const renderItems = () => {
        const items = [];
        for (let i = 0; i < props.itemCount; i++) {
            const num = i + 1;
            const className = `circle-quarter-${props.categories[i].iconIndex}`;
            const item = num <= 2 ? <div onClick={props.actions.setCategory.bind(this, props.categories[i].key)} key={i} className={className}> <CategoryItem selectedKey={props.selectedKey} displayKey={props.categories[i].key} actions={props.actions} itemIndex={props.categories[i]} icon={props.displayIcons[i]} bottomItem={false} /></div> :
                <div onClick={props.actions.setCategory.bind(this, props.categories[i].key)}  key={i} className={className}> <CategoryItem selectedKey={props.selectedKey} displayKey={props.categories[i].key} actions={props.actions} itemIndex={props.categories[i]} icon={props.displayIcons[i]} bottomItem={true} /></div>;
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