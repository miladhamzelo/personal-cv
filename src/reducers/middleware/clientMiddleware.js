import { getData } from '../../data/dataFetcher';
import { API_MAPPINGS } from '../../constants/api/apiMappings';
import * as actionTypes from '../../constants/action-types/actionTypes';

export const thunk = store => {
  const dispatch = store.dispatch;
  const getState = store.getState;

  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }

    switch (action.type) {
      /*  case actionTypes.SET_FROM_CURRENCY_TYPE: {
          const state = getState();
          getDataIfNeeded(action, state);
          break;
        }*/

      default:
        break;
    }

    return next(action);
  };
};
