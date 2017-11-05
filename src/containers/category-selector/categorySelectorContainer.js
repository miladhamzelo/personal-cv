import React, { Component } from 'react';
import CategorySelectorComponent from '../../Components/category-selector/categorySelectorComponent';
import { icons } from './index.config';

export default class CategorySelectorContainer extends Component {

    render() {

        return (
            <CategorySelectorComponent itemCount={icons.length} displayIcons={icons} />
        )
    }
}