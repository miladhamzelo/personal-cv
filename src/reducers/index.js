import reducer from './reducer';

const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](
          state[key],
          action,
        );
        return nextState;
      },
      {},
    );
  };
};

const rootReducer = combineReducers({
  reducer
});

export default rootReducer;
