import { combineReducers } from 'redux-immutable';

import itemsReducer from './items';

const reducers = combineReducers({
  itemsReducer
});

export default reducers;
