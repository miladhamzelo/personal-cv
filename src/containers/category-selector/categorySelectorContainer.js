import React, { Component } from 'react';
import CategorySelectorComponent from '../../Components/category-selector/categorySelectorComponent';

export default class CategorySelectorContainer extends Component {

    render() {

        return (
            <CategorySelectorComponent itemCount={4} />
        )
    }
}