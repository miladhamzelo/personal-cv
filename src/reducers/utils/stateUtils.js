

export const stateUtils = {

    setSelectedCategory: (state, displayKey) => {
        state.categories.forEach(item => {
            if (item.key === displayKey) {
                item.selected = true;
            }
        })

        return { ...state, categories: [...state.categories] };
    },

    clearSelectedCategories: (state) => {
        const newState = { ...state };
        newState.categories.forEach(category => {
            category.selected = false;
        });
        return { ...state, categories: [...newState.categories] }
    }

};
