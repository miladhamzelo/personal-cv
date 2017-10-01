/* eslint arrow-body-style: 0*/


const combineReducers = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
    (nextState, key) => {
      nextState[key] = reducers[key]( // eslint-disable-line no-param-reassign
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
});

export default rootReducer;
