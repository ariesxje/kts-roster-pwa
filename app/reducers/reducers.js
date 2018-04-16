import { combineReducers } from 'redux';

const globalReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers([globalReducer]);

export default reducers;
