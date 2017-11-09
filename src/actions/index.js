
import * as types from '../constants/action-types/actionTypes';


export function setCategory(displayKey) {
  return {
    type: types.SET_SELECTED_CATEGORY, displayKey
  };
}

export function clearCategories() {
  return {
    type: types.CLEAR_CATEGORIES
  };
}