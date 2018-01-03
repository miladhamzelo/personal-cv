import React, { Component } from 'react';
import CategorySelectorComponent from '../../components/category-selector/categorySelectorComponent';
import { icons } from './index.config';

export default class CategorySelectorContainer extends Component {

    _getSelectedCategory() {
        const selectedItem = this.props.categories.find(item => item.selected === true);
        return selectedItem ? selectedItem.displayKey : selectedItem;
    }

    render() {
        const selectedItemKey = this._getSelectedCategory();


        return (
            <CategorySelectorComponent actions={this.props.actions} categories={this.props.categories} itemCount={icons.length} displayIcons={icons} selectedKey={selectedItemKey} />
        )
    }
}
