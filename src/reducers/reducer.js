import { initialState } from '../constants/initial-state/initialState';
import { stateUtils } from './utils/stateUtils';
import * as actionTypes from '../constants/action-types/actionTypes';


export default function reducer(state = initialState, action) {
  switch (action.type) {

    case actionTypes.SET_SELECTED_CATEGORY: {
      const stateWithSelectedCategoryClear = stateUtils.clearSelectedCategories(state);
      return (stateUtils.setSelectedCategory(state, action.displayKey));
    }

    case actionTypes.CLEAR_CATEGORIES : {
     return stateUtils.clearSelectedCategories(state);
    }


    default:
      return state;
  }
}
