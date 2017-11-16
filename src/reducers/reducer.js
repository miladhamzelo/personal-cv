import { initialState } from '../constants/initial-state/initialState';
import { stateUtils } from './utils/stateUtils';
import * as actionTypes from '../constants/action-types/actionTypes';

const getSlide = (itemLength, number, selectedIndex) => {
  let newCount = selectedIndex + number;
  if (newCount >= itemLength) {
    newCount = 0;
  }
  if (newCount < 0) {
    newCount = itemLength - 1;
  }
  return newCount;
}


export default function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.SET_SELECTED_CATEGORY: {
      const stateWithSelectedCategoryClear = stateUtils.clearSelectedCategories(state);
      return (stateUtils.setSelectedCategory(state, action.displayKey));
    }

    case actionTypes.CLEAR_CATEGORIES: {
      return stateUtils.clearSelectedCategories(state);
    }

    case actionTypes.NEXT_SLIDE: {
      const newIndex = getSlide(state.experience.length, 1, state.selectedTile)
      return { ...state, selectedTile: newIndex }
    }

    case actionTypes.PREV_SLIDE: {
      const newIndex = getSlide(state.experience.length, -1, state.selectedTile)
      return { ...state, selectedTile: newIndex }
    }

    case actionTypes.SHOW_HIDE_PAPER: {
      return { ...state, showExperience: !state.showExperience }
    }


    default:
      return state;
  }
}
