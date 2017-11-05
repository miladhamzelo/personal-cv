import React from 'React';
import CategoryItem from '../category-item/categoryItem';

const CategorySelectorComponent = (props) => {

    const renderItems = () => {
        const items = [];
        for (let i = 0; i < props.itemCount; i++) {
            const num = i + 1;
            const className = `circle-quarter-${num}`;
            const item = num <= 2 ? <div className={className}> <CategoryItem key={i} icon={props.displayIcons[i]} bottomItem={false} /></div> :
                <div className={className}> <CategoryItem key={i} icon={props.displayIcons[i]} bottomItem={true} /></div>;  
            items.push(item);
        }
        return items;
    }

    const items = renderItems();

    return (

        <div className="category-selector-widget-wrapper position-element-middle">
            {items}
        </div>
    );
}

export default CategorySelectorComponent;